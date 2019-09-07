/**
* 三公 
*/
module gamesangong.data {
	export class SangongData extends gamecomponent.object.PlayingPuKeCard {
		private _b: boolean;
		private _posTemp = [[523, 630, 115], [1027, 423, 41], [1027, 235, 41], [166, 235, 41], [166, 423, 41]];
		private _mainPlayerIndex: number;
		public _ownerIdx;	//牌的归属座位
		myOwner(v: Unit, b: boolean, index: number, seat: number) {
			this.owner = v;
			this._b = b;
			this.size = 0.2;
			this._mainPlayerIndex = index;
			this._ownerIdx = seat;
		}

		fapai() {
			let idx = this._ownerIdx;
			let posIdx = (idx - this._mainPlayerIndex + 5) % 5;
			let posX = this._posTemp[posIdx][0];
			let posY = this._posTemp[posIdx][1];
			let space = this._posTemp[posIdx][2];
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX + this.index * space;
			this.targe_pos.y = posY;
			let size = this._b ? 1 : 0.75;
			this.time_interval = 400;
			if(!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
			Laya.Tween.to(this, { size: size, rotateAngle: 4 * Math.PI }, this.time_interval);
		}

		//重连发牌
		refapai() {
			let idx = this._ownerIdx;
			let posIdx = (idx - this._mainPlayerIndex + 5) % 5;
			let posX = this._posTemp[posIdx][0];
			let posY = this._posTemp[posIdx][1];
			let space = this._posTemp[posIdx][2];
			this.size = this._b ? 1 : 0.75;
			this.pos.x = posX + this.index * space;
			this.pos.y = posY;
			super.fapai();
		}

		fanpai() {
			super.fanpai();
		}

		fanpaiall() {
			if (this.isShow) return;
			if (!this.owner.IsCompare())
				if (this.owner.IsGiveUp()) return;
			super.fanpai();
		}
	}
}