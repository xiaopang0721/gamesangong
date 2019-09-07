/**
* 三公HUD
*/
module gamesangong.page {
	export class SangongPageOld extends game.gui.base.Page {
		private _viewUI: ui.game_ui.sangong.SanGong_HUDUI;
		private _player: any;
		private _playerInfo: any;
		private _leastTmep: any = [1, 5, 20, 100];
		private _needMoney: any = [50, 200, 500, 1000];
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
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.sangong.SanGong_HUDUI', ["game_ui.tongyong.HudUI"]);
			this.addChild(this._viewUI);
			this._game.playMusic(Path.music + "sangong/sg_bgm.mp3");
			this._sgMgr = new SangongMgr(this._game);
			this._viewUI.box_fangka.visible = false;
			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this.initPlayerInfo();
			(this._viewUI.view_hud as TongyongHudPage).onOpen(this._game, SangongPageDef.GAME_NAME);
			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					right: -300
				}, 200 + index * 100, Laya.Ease.linearNone);
			}

			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: LEvent, target: any): void {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			if (this._player.playerInfo.isguest) {
				TongyongPageDef.ins.alertRecharge("您选择了游客模式登录游戏，由于该模式下的游戏数据(包括付费数据)在删除游戏、更换设备后将被清空!对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全,我们强烈建议您使用微信登录和账号登录游戏!", () => {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE);
				}, () => {
				}, false, PathGameTongyong.ui_tongyong_general + "btn_qw.png");
				return;
			}
			this._playerInfo = this._player.playerInfo;
			switch (target) {
				case this._viewUI.img_room0:
					if (this._player.playerInfo.money < this._needMoney[0]) {
						this.showTipsBox(this._needMoney[0]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_1.toString());
					break;
				case this._viewUI.img_room1:
					if (this._player.playerInfo.money < this._needMoney[1]) {
						this.showTipsBox(this._needMoney[1]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_2.toString());
					break;
				case this._viewUI.img_room2:
					if (this._player.playerInfo.money < this._needMoney[2]) {
						this.showTipsBox(this._needMoney[2]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_3.toString());
					break;
				case this._viewUI.img_room3:
					if (this._player.playerInfo.money < this._needMoney[3]) {
						this.showTipsBox(this._needMoney[3]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_4.toString());
					break;
				default:
					break;
			}
		}

		private showTipsBox(limit: number) {
			TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), () => {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
			}, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
		}

		private initPlayerInfo(): void {
			for (let index = 0; index < 4; index++) {
				this._viewUI["lab_least" + index].text = "底分: " + this._leastTmep[index];
				this._viewUI["lab_money" + index].text = "准入: " + this._needMoney[index];
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
			this._game.stopMusic();

			super.close();
		}
	}
}