/**
* 三公-牌 
*/
module gamesangong.manager {
	const enum CARD_TYPE {
		CARDS_TYPE_POINTS = 1,	//点数牌
		CARDS_TYPE_SG = 2,		//三公
		CARDS_TYPE_BOOM = 3,	//炸弹
		CARDS_TYPE_BAOJIU = 4,	//爆玖
	}
	const MIN_CHECKTIME: number = 1000;//最小检测时间间隔(毫秒)

	export class SangongMgr extends gamecomponent.managers.PlayingCardMgrBase<SangongData>{
		public isReLogin: boolean = false;	//是否断线重连

		static readonly MAPINFO_OFFLINE: string = "SangongMgr.MAPINFO_OFFLINE";//假精灵
		static readonly DEAL_CARDS: string = "SangongMgr.DEAL_CARDS";//发牌结束
		
		private _offsetTime: number//剩余检测时间(毫秒)
		private _unitOffline: UnitOffline;//假精灵信息
		private _cardsTemp: any = [];	//牌数据
		private _partPos: any = [];		//分牌过的位置

		constructor(game: Game) {
			super(game);
		}

		get unitOffline() {
			return this._unitOffline;
		}

		set unitOffline(v) {
			this._unitOffline = v;
			this.event(SangongMgr.MAPINFO_OFFLINE)
		}

		//心跳更新
		update(diff: number) {
			if (this._offsetTime > 0) {
				this._offsetTime -= diff;
				return;
			}
			this._offsetTime = MIN_CHECKTIME;
		}

		createObj(u: Unit) {
			let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, SangongData) as SangongData;
			card.pos = new Vector2(840, 190);
			return card;
		}

		//牌值
		private getCardValue(card): number {
			let cardValue = 0;
			card = card - 1;
			cardValue = card % 13 + 1;
			return cardValue;
		}

		//点数
		private cardCount(card: number): number {
			let cardCount = 0;
			card = card - 1;
			let cardVal = card % 13 + 1;
			if (cardVal > 10)
				cardCount = 10;
			else
				cardCount = cardVal;
			return cardCount;
		}

		// 爆玖
		private isBaoJiu(cards: any): boolean {
			//3张3
			if (cards.length != 3) return false;
			if (this.cardCount(cards[0]) != 3) return false;
			if (this.cardCount(cards[1]) != 3) return false;
			if (this.cardCount(cards[2]) != 3) return false;
			return true;
		}

		//炸弹
		private isBoom(cards: any): boolean {
			//3张牌一样，3除外
			if (cards.length != 3) return false;
			if (this.cardCount(cards[0]) == 3) return false;
			if (this.getCardValue(cards[0]) != this.getCardValue(cards[2])) return false;
			return true;
		}

		// 三公
		private isSanGong(cards: any): boolean {
			//3张大于10的
			if (cards.length != 3) return false;
			if (this.getCardValue(cards[0]) <= 10) return false;
			if (this.getCardValue(cards[1]) <= 10) return false;
			if (this.getCardValue(cards[2]) <= 10) return false;
			return true;
		}

		// 看下是什么牌
		public checkCardsType(cards): number {
			let cardtype = 0;
			if (this.isBaoJiu(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_BAOJIU;
			else if (this.isBoom(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_BOOM;
			else if (this.isSanGong(cards))
				cardtype = CARD_TYPE.CARDS_TYPE_SG;
			else
				cardtype = CARD_TYPE.CARDS_TYPE_POINTS;
			return cardtype;
		}

		// 计算下点数
		public checkCardsCount(cards: any): number {
			let count = 0;
			let val = this.cardCount(cards[0]);
			for (let i = 1; i < cards.length; i++) {
				val += this.cardCount(cards[i]);
			}
			count = val % 10;
			return count;
		}

		sort() {
			let cards = this._cards;
			let max = 5;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			let idx = mainUnit.GetIndex();
			let count = 0;
			for (let index = 0; index < max; index++) {
				let posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
				let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
				if (unit) {
					for (let i = 0; i < 3; i++) {
						let card = cards[count * 3 + i] as SangongData;
						if (card) {
							card.myOwner(unit, mainUnit == unit, idx, posIdx);
							card.index = i;
							card.sortScore = -i;
						}
					}
					count++;
				}
			}
		}

		//发牌
		fapai() {
			let count = 0;
			let cardIndex = 0;
			for (let index = 0; index < 3; index++) {
				for (let i = 0; i < this._cards.length / 3; i++) {
					let card = this._cards[index + i * 3];
					//播音效
					Laya.timer.once(130 * count, this, () => {
						this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
						card.fapai();
						cardIndex++;
						if (cardIndex == this._cards.length)
							this.event(SangongMgr.DEAL_CARDS)
					});
					count++;
				}
			}
		}

		//重连发牌
		refapai() {
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				card.refapai();
			}
		}

		//翻牌
		showCards(cards: any, pos: number) {
			let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
			if (!mainIdx) return;
			for (let index = 0; index < cards.length; index++) {
				let cardIdx = (pos + 5 - mainIdx) % 5
				let card = this._cards[cardIdx * 3 + index];
				card.Init(cards[index]);
				card.fanpai();
			}
		}

		//重置数据
		resetData(): void {
			this._cardsTemp = [];
		}
	}
}