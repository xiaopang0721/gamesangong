/**
* 三公-地图 
*/
module gamesangong.data {
	export class SangongMapInfo extends gamecomponent.object.MapInfoT<SangongData> {
		//地图状态变更
		static EVENT_SG_STATUS_CHECK: string = "SangongMapInfo.EVENT_SG_STATUS_CHECK";
		//战斗体更新
		static EVENT_SG_BATTLE_CHECK: string = "SangongMapInfo.EVENT_SG_BATTLE_CHECK";
		//倒计时时间戳更新
		static EVENT_SG_COUNT_DOWN: string = "SangongMapInfo.EVENT_SG_COUNT_DOWN";
		//牌型
		static cardType = ['0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '三公', '炸弹', '爆玖']

		constructor(v: SceneObjectMgr) {
			super(v, () => { return new SangongData() });
		}

		onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
				this._battleInfoMgr.OnUpdate();
				this._sceneObjectMgr.event(SangongMapInfo.EVENT_SG_BATTLE_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
				this._sceneObjectMgr.event(SangongMapInfo.EVENT_SG_STATUS_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
				this._sceneObjectMgr.event(SangongMapInfo.EVENT_SG_COUNT_DOWN);
			}
		}

		public getBattleInfoToString(): string {
			let str: string = "";
			for (let i = 0; i < this._battleInfoMgr.info.length; i++) {
				let battleInfo = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
				if (battleInfo.Type == 12) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBanker;
					let isQiang: string = info.BetVal == 1 ? "抢庄" : "不抢庄";
					let newString = name + "：" + isQiang;
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 1) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPass;
					let newString = "庄家是：" + name;
					str = str + "#" + newString;
				} else if (battleInfo.Type == 13) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBetRate;
					let newString = name + "：" + "下注" + info.BankerRate + "倍";
					str = str + "#" + newString;
				} else if (battleInfo.Type == 3) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPlayCard<SangongData>;
					let newString = name + "：" + "摊牌，牌型是：" + SangongMapInfo.cardType[info.CardType - 1];
					str = str + "#" + newString;
				} else if (battleInfo.Type == 11) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
					let newString = name + "盈利：" + info.SettleVal;
					str = str + "#" + newString;
				}
			}
			return str;
		}

		//通过座位取玩家名字
		private GetPlayerNameFromSeat(index: number): string {
			let name: string;
			let users = this._battleInfoMgr.users;
			name = users[index - 1].name;
			return name
		}
	}
}