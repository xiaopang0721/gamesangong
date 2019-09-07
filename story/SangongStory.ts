/**
* name 三公剧情
*/
module gamesangong.story {
	const enum MAP_STATUS {
        MAP_STATE_NONE = 0,			//初始化
        MAP_STATE_SHUFFLE = 1,  	//洗牌中
        MAP_STATE_DEAL = 2,			//准备发牌
        MAP_STATE_DEA_END = 3,		//发牌结束
        MAP_STATE_BANKER = 4,		//准备抢庄
        MAP_STATE_BANKER_PLAY = 5, 	//抢庄动画
        MAP_STATE_BET = 6,			//准备下注
        MAP_STATE_SHOW_CARDS = 7,	//准备摊牌
        MAP_STATE_SETTLE = 8,		//准备结算
        MAP_STATE_END = 9,			//结束
    }

	export class SangongStory extends gamecomponent.story.StoryNormalBase {
		private _sgMgr: SangongMgr;
		private _cardsTemp: any = [];
		private _sgMapInfo: SangongMapInfo;
		
		public isDealCard: boolean = false;	//是否发过牌了

		constructor(v: Game, mapid: string, maplv: number) {
			super(v, mapid, maplv);
			this.init();
		}

		init() {
			super.init();
			if (!this._sgMgr) {
				this._sgMgr = new SangongMgr(this._game);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this.onIntoNewMap();
		}

		get sgMgr() {
			return this._sgMgr;
		}

		set mapLv(lv: number) {
			this.maplv = lv;
		}

		get mapLv() {
			return this.maplv;
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;

			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			this._game.uiRoot.HUD.open(SgPageDef.PAGE_SG_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._sgMapInfo = mapinfo as SangongMapInfo;
			if (mapinfo) {
				this.onUpdateState();
				this.onUpdateCardInfo();
			} else {
				this._sgMgr.unitOffline = this._offlineUnit;
			}
		}

		private onUpdateState(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			let statue = mapinfo.GetMapState();
			switch (statue) {
				case MAP_STATUS.MAP_STATE_DEAL://发牌
					if (this.isDealCard) return;
					this.updateCardsCount();
					let handle = new Handler(this, this._sgMgr.createObj);
					this._sgMgr.Init(this._cardsTemp, handle);
					this._sgMgr.sort();
					this._sgMgr.fapai();
					this.isDealCard = true;
					break;
			}
		}

		//断线重连,重发下牌
		private onUpdateCardInfo(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			if (!this.isReConnected) return;
			let statue = mapinfo.GetMapState();
			if (statue > MAP_STATUS.MAP_STATE_NONE && statue < MAP_STATUS.MAP_STATE_SETTLE) {
				this._sgMgr.isReLogin = true;
				if (this.isDealCard) return;
				if (statue > MAP_STATUS.MAP_STATE_DEA_END) {
					this.isDealCard = true;
					this.updateCardsCount();
					let handle = new Handler(this, this._sgMgr.createObj);
					this._sgMgr.Init(this._cardsTemp, handle);
					this._sgMgr.sort();
					this._sgMgr.refapai();
				}
			}
		}

		//算下在场几个人来定牌数
		private updateCardsCount(): void {
			let card = [1, 2, 3];
			this._cardsTemp = [];
			for (let index = 1; index < 6; index++) {
				let unit = this._game.sceneObjectMgr.getUnitByIdx(index)
				if (unit) {
					this._cardsTemp = this._cardsTemp.concat(card);
				}
			}
		}

		createofflineUnit() {
			//创建假的地图和精灵
			let unitOffline = new UnitOffline(this._game.sceneObjectMgr);
			if (this._game.sceneObjectMgr.mainPlayer) {
				unitOffline.SetStr(UnitField.UNIT_STR_NAME, this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname);
				unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, this._game.sceneObjectMgr.mainPlayer.playerInfo.headimg);
				unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, this._game.sceneObjectMgr.mainPlayer.playerInfo.money);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_endtime);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_type);
				unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, this._game.sceneObjectMgr.mainPlayer.playerInfo.vip_level);
			}
			unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);

			this._offlineUnit = unitOffline;
		}

		enterMap() {
			//各种判断
			if (this.mapinfo) return false;
			if (!this.maplv) {
				this.maplv = this._last_maplv;
			}
			this._game.network.call_match_game(this._mapid, this.maplv);
			return true;
		}

		leavelMap() {
			//各种判断
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			super.clear();
			this._game.sceneObjectMgr.off(SangongMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			if (this._sgMgr) {
				this._sgMgr.clear();
				this._sgMgr = null;
			}
			this._sgMapInfo = null;
		}
	}
}