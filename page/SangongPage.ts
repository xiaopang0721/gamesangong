/**
* 三公HUD
*/
module gamesangong.page {
	export class SangongPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.sangong.SanGong_HUDUI;
		private _player: any;
		private _playerInfo: any;
		private _difenTmep: any = [1, 5, 20, 100];
		private _leastTmep: any = [50, 200, 500, 1000];
		private _sgMgr: SangongMgr;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_sangong.atlas_game_ui + "sangong.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "anniug.atlas",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.sangong.SanGong_HUDUI', ["game_ui.tongyong.HudUI"]);
			this.addChild(this._viewUI);
			this._game.playMusic(Path.music + "sangong/sg_bgm.mp3");
			this._sgMgr = new SangongMgr(this._game);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this.initPlayerInfo();
			(this._viewUI.view_hud as TongyongHudPage).onOpen(this._game, SangongPageDef.GAME_NAME, false);
			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					x: 1280
				}, this._initialtime + index * this._time, Laya.Ease.linearNone);
			}
			Laya.timer.once(this._initialtime + 4 * this._time, this, this.onComplete)
		}

		private _initialtime: number = 200;
		private _time: number = 100;
		private onComplete() {
			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: LEvent, target: any): void {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			this._playerInfo = this._player.playerInfo;
			switch (target) {
				case this._viewUI.img_room0:
					if (this._player.playerInfo.money < this._leastTmep[0]) {
						this.showTipsBox(this._leastTmep[0]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_1.toString());
					break;
				case this._viewUI.img_room1:
					if (this._player.playerInfo.money < this._leastTmep[1]) {
						this.showTipsBox(this._leastTmep[1]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_2.toString());
					break;
				case this._viewUI.img_room2:
					if (this._player.playerInfo.money < this._leastTmep[2]) {
						this.showTipsBox(this._leastTmep[2]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_3.toString());
					break;
				case this._viewUI.img_room3:
					if (this._player.playerInfo.money < this._leastTmep[3]) {
						this.showTipsBox(this._leastTmep[3]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_4.toString());
					break;
				default:
					break;
			}
		}

		private showTipsBox(limit: number) {
			this._game.alert(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), () => {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
			}, true, Tips.TIPS_SKIN_STR["cz"]);
		}

		private initPlayerInfo(): void {
			for (let index = 0; index < this._difenTmep.length; index++) {
				this._viewUI["txt_difen" + index].text = "" + this._difenTmep[index];
			}
			for (let index = 0; index < this._leastTmep.length; index++) {
				this._viewUI["txt_least" + index].text = "" + this._leastTmep[index];
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._game.stopMusic();
			}

			super.close();
		}
	}
}