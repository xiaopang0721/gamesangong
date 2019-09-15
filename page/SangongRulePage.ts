/**
* 三公-规则
*/
module gamesangong.page {
	const enum TYPE_INDEX {
		TYPE_WANFA_JIESHAO = 0,
		TYPE_CARD_TYPE = 1,
		TYPE_DAXIAO = 2,
		TYPE_BEISHU = 3,
	}

	export class SangongRulePage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.sangong.SanGong_GuiZeUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_sangong.atlas_game_ui + "sangong.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.sangong.SanGong_GuiZeUI');
			this.addChild(this._viewUI);

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			if (this.dataSource) {
				this._viewUI.btn_tab.selectedIndex = this.dataSource;
			}
			else {
				this._viewUI.btn_tab.selectedIndex = TYPE_INDEX.TYPE_WANFA_JIESHAO;
			}

			this._viewUI.panel_rule.vScrollBarSkin = "";
			this._viewUI.panel_rule.vScrollBar.autoHide = true;
			this._viewUI.panel_rule.vScrollBar.elasticDistance = 100;
		}

		private selectHandler(index: number): void {
			this._viewUI.panel_rule.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_WANFA_JIESHAO;
			this._viewUI.lab_type.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_CARD_TYPE;
			this._viewUI.lab_jiesuan.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_BEISHU;
			this._viewUI.lab_daxiao.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_DAXIAO;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_tab.selectedIndex = -1;
			}

			super.close();
		}
	}
}