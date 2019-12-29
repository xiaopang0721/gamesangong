/**
* 三公-房间
*/
module gamesangong.page {
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
    const ChipConfig: any = {
        "91": [1, 50],       //新手
        "92": [5, 200],       //初级
        "93": [20, 500],      //中级
        "94": [100, 1000],     //高级
    };
    const betBtnPos: any = {
        "2": [265, 440],       //2个下注档次
        "3": [170, 345, 520],       //3个下注档次
        "4": [90, 265, 440, 615],      //4个下注档次
        "5": [0, 175, 350, 525, 700],      //5个下注档次
    };
    //音效url
    const MUSIC_PATH = {
        bgMusic: "sg_bgm.mp3",
        cardTypeMusic: "sg_",
        randBankerMusic: "suijizhuangjia.mp3",
        bankerMusic: "dingzhuang.mp3",
        loseMusic: "lose",
        winMusic: "win",
    }

    export class SangongMapPage extends game.gui.base.Page {
        private _viewUI: ui.ajqp.game_ui.sangong.SanGongUI;
        private _mapInfo: SangongMapInfo;
        private _SangongMgr: SangongMgr;
        private _SangongStory: SangongStory;
        private _battleIndex: number = -1;
        private _kuang: LImage;//随机庄家框
        private _curStatus: number; //当前地图状态
        private _countDown: number; //倒计时结束时间
        private _bankerTemp: any = [];  //所有抢庄的人
        private _mainIdx: number;   //主玩家座位号
        private _clipList: Array<SangongClip> = [];//飘字
        private _imgdiList: Array<LImage> = [];//飘字底集合
        private _bankerIdx: number; //庄家位置
        private _settleWinInfo: any = [];  //结算信息,闲家赢
        private _settleLoseInfo: any = [];  //结算信息，闲家输
        private _betPerTemp: any = [];  //下注倍数配置
        private _bankerMoneyChange: number; //庄家结算金币
        private _moneyChange: number;   //主玩家金币变化

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._asset = [
                DatingPath.atlas_dating_ui + "qifu.atlas",
                Path_game_sangong.atlas_game_ui + "sangong.atlas",
                Path_game_sangong.atlas_game_ui_sangong_effect + "nyl.atlas",
                Path_game_sangong.atlas_game_ui_sangong_effect + "qp.atlas",
                Path_game_sangong.atlas_game_ui_sangong_effect + "yanhua.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qz.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "nyl.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "chongzhi.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "fapai_1.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "xipai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "skz.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.sangong.SanGongUI');
            this.addChild(this._viewUI);
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("SangongMapPage");//额外界面控制器
            }
            if (!this._SangongMgr) {
                this._SangongStory = this._game.sceneObjectMgr.story as SangongStory;
                this._SangongMgr = this._SangongStory.sgMgr;
                this._SangongMgr.on(SangongMgr.DEAL_CARDS, this, this.onAfterDealCards);
            }
            this._game.playMusic(Path_game_sangong.music_sangong + MUSIC_PATH.bgMusic);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            //api充值不显示
            this._viewUI.btn_chongzhi.visible = !WebConfig.enterGameLocked;

            this.initBeiClip();
            this.updateViewUI();
            this.onUpdateUnitOffline();
            if (!this._SangongMgr.isReLogin) {
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
            } else {
                this.onUpdateMapInfo();
            }

            this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qiang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_buqiang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_show.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);

            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.on(SangongMapInfo.EVENT_SG_STATUS_CHECK, this, this.onUpdateMapState);
            this._game.sceneObjectMgr.on(SangongMapInfo.EVENT_SG_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.on(SangongMapInfo.EVENT_SG_COUNT_DOWN, this, this.updateCountDown);//倒计时更新
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            this._game.qifuMgr.on(QiFuMgr.QIFU_FLY, this, this.qifuFly);

            for (let i = 1; i < 6; i++) {
                this._viewUI["btn_bet" + i] && this._viewUI["btn_bet" + i].on(LEvent.CLICK, this, this.onBet, [i]);
            }
        }

        protected layout(): void {
            super.layout();
            if (this._viewUI) {
                //全面屏
                if (this._game.isFullScreen) {
                    this._viewUI.box_top_left.left = 14 + 56;
                    this._viewUI.box_room_left.left = 105 + 56;
                    this._viewUI.box_top_right.right = 28 + 56;
                    this._viewUI.box_bottom_right.right = 12 + 56;
                } else {
                    this._viewUI.box_top_left.left = 14;
                    this._viewUI.box_room_left.left = 105;
                    this._viewUI.box_top_right.right = 28;
                    this._viewUI.box_bottom_right.right = 12;
                }
            }
        }

        private _curDiffTime: number;
        update(diff: number) {
            super.update(diff);
            if (!this._curDiffTime || this._curDiffTime < 0) {
                this._viewUI.btn_chongzhi.ani1.play(0, false);
                this._curDiffTime = TongyongPageDef.CZ_PLAY_DIFF_TIME;
            } else {
                this._curDiffTime -= diff;
            }
            this._senceItemFlyMgr && this._senceItemFlyMgr.update(diff)
        }

        //倍数
        private _beiClip1: SangongClip;
        private _beiClip2: SangongClip;
        private _beiClip3: SangongClip;
        private _beiClip4: SangongClip;
        private _beiClip5: SangongClip;
        initBeiClip(): void {
            for (let i = 1; i < 6; i++) {
                this["_beiClip" + i] = new SangongClip(SangongClip.BEI_FONT);
                this["_beiClip" + i].centerX = this._viewUI["clip_bei" + i].centerX;
                this["_beiClip" + i].centerY = this._viewUI["clip_bei" + i].centerY;
                this._viewUI["clip_bei" + i].parent.addChild(this["_beiClip" + i]);
                this._viewUI["clip_bei" + i].visible = false;
            }
        }

        clearBeiClip(): void {
            for (let i = 1; i < 6; i++) {
                if (this["_beiClip" + i]) {
                    this["_beiClip" + i].removeSelf();
                    this["_beiClip" + i].destroy();
                    this["_beiClip" + i] = null;
                }
            }
        }

        //打开时要处理的东西
        private updateViewUI(): void {
            this._kuang = new LImage(PathGameTongyong.ui_tongyong + "qz/k.png");
            this._viewUI.img_menu.visible = false;
            this._viewUI.btn_continue.visible = false;
            this._viewUI.text_info.visible = false;
            this._viewUI.box_room_left.visible = false;
            this._viewUI.box_bet.visible = false;
            this._viewUI.box_banker.visible = false;
            this._viewUI.btn_continue.visible = false;
            this._viewUI.btn_show.visible = false;
            this._viewUI.view_paixie.cards.visible = false;
            this._viewUI.view_type.visible = false;
            this._viewUI.img_time.visible = false;
            this._viewUI.img_time.ani1.stop();
            this._viewUI.view_xipai.visible = false;
            this._viewUI.box_tips.visible = false;
            this._viewUI.view_xipai.ani_xipai.stop();
            this._viewUI.view_paixie.ani2.gotoAndStop(0);
            for (let i = 0; i < 5; i++) {
                this._viewUI["view_head" + i].visible = false;
                this._viewUI["view_head" + i].img_banker.visible = false;
                this._viewUI["view_head" + i].effWin.visible = false;
                this._viewUI["view_head" + i].clip_money.visible = false;
                this._viewUI["box_opt" + i].visible = false;
                this._viewUI["box_opt" + i].box_qiang.visible = false;
                this._viewUI["box_opt" + i].box_buqiang.visible = false;
                this._viewUI["box_opt" + i].box_bet.visible = false;
                if (i > 0) {
                    this._viewUI["view_player" + i].img_frame.visible = false;
                    this._viewUI["view_player" + i].view_type.visible = false;
                    this._viewUI["view_think" + i].visible = false;
                }
            }
        }

        //按钮点击
        protected onBtnTweenEnd(e: LEvent, target: any) {
            switch (target) {
                case this._viewUI.btn_menu:
                    this.menuTween(!this._viewUI.img_menu.visible);
                    break;
                case this._viewUI.btn_back:
                    let mapinfo: SangongMapInfo = this._game.sceneObjectMgr.mapInfo as SangongMapInfo;
                    if (mapinfo && (mapinfo.GetPlayState() == 1 || mapinfo.GetMapState() <= MAP_STATUS.MAP_STATE_SETTLE)) {
                        this._game.showTips("游戏尚未结束，请先打完这局哦~");
                        return;
                    }
                    this.resetData();
                    this.clearMapInfoListen();
                    this._SangongMgr.clear();
                    this._SangongStory.clear();
                    this.clearClip();
                    this._game.sceneObjectMgr.leaveStory(true);
                    break;
                case this._viewUI.btn_rules:
                    this._game.uiRoot.general.open(SangongPageDef.PAGE_SG_RULE);
                    break;
                case this._viewUI.btn_qifu:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_QIFU);
                    break;
                case this._viewUI.btn_set:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                    break;
                case this._viewUI.btn_record:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = SangongPageDef.GAME_NAME;
                    });
                    break;
                case this._viewUI.btn_show:
                    this._game.network.call_sg_show_cards();
                    break;
                case this._viewUI.btn_qiang:
                    this._viewUI.box_tips.visible = true;
                    this._viewUI.txt_tips.text = "请等待其他玩家抢庄";
                    this._game.network.call_sg_banker(1);
                    break;
                case this._viewUI.btn_buqiang:
                    this._viewUI.box_tips.visible = true;
                    this._viewUI.txt_tips.text = "请等待其他玩家抢庄";
                    this._game.network.call_sg_banker(2);
                    break;
                case this._viewUI.btn_continue:
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._SangongStory.mapLv][1]) {
                        this.onNotEnoughMoney()
                        return;
                    }
                    if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                        this.clearClip();
                        this.resetData();
                        this.updateViewUI();
                        // this._SangongStory.removeListen();
                        // this.clearMapInfoListen();
                        this._SangongMgr.clear();
                        this._SangongMgr.resetData();
                        this._game.sceneObjectMgr.leaveStory();

                    } else {
                        this.onUpdateMapInfo();
                    }
                    break;
                case this._viewUI.btn_chongzhi:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    break;
                default:
                    break;
            }
        }

        protected onMouseClick(e: LEvent) {
            if (e.target != this._viewUI.btn_menu) {
                this.menuTween(false);
            }
        }

        //菜单栏
        private menuTween(isOpen: boolean) {
            if (isOpen) {
                this._viewUI.img_menu.visible = true;
                this._viewUI.img_menu.scale(0.2, 0.2);
                this._viewUI.img_menu.alpha = 0;
                Laya.Tween.to(this._viewUI.img_menu, { scaleX: 1, scaleY: 1, alpha: 1 }, 300, Laya.Ease.backInOut);
            } else {
                Laya.Tween.to(this._viewUI.img_menu, { scaleX: 0.2, scaleY: 0.2, alpha: 0 }, 300, Laya.Ease.backInOut, Handler.create(this, () => {
                    this._viewUI.img_menu.visible = false;
                }));
            }
        }

        //选择下注倍数
        private onBet(index: number, e: LEvent): void {
            if (e.currentTarget) {
                this._game.uiRoot.btnTween(e.currentTarget);
            }
            this._viewUI.box_bet.visible = false;
            //下注按钮的倍数
            let val = this._betPerTemp[index - 1];
            this._game.network.call_sg_bet(val);
            this._viewUI.box_tips.visible = true;
            this._viewUI.txt_tips.text = "请等待其他玩家下注";
        }

        private onUnitAdd(u: Unit): void {
            this.onUpdateUnit();

        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
            let posIdx = (u.GetIndex() - this._mainIdx + 5) % 5;
            this._viewUI["view_head" + posIdx].img_banker.visible = false;
            this._viewUI["box_opt" + posIdx].visible = false;
        }

        //精灵显示
        private onUpdateUnit(qifu_index?: number): void {
            let mapinfo: SangongMapInfo = this._game.sceneObjectMgr.mapInfo as SangongMapInfo;
            if (!mapinfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            let idx = mainUnit.GetIndex();
            if (!idx) return;
            if (this._mainIdx != idx) {
                this._mainIdx = idx;
            }
            let maxCount = 5;
            for (let index = 0; index < maxCount; index++) {
                let posIdx = (idx + index) % maxCount == 0 ? 5 : (idx + index) % maxCount;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                let viewHead = this._viewUI["view_head" + index];
                viewHead.visible = unit;
                if (unit) {
                    //庄家存一下
                    if (unit.GetIdentity() == 1) {
                        this._bankerIdx = posIdx;
                    }
                    let name = getMainPlayerName(unit.GetName());
                    viewHead.txt_name.text = name;
                    if (this._curStatus != MAP_STATUS.MAP_STATE_SETTLE || this._SangongMgr.isReLogin) {
                        this.updateMoney();
                    }
                    //头像框
                    viewHead.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(unit.GetHeadKuangImg());
                    //vip
                    viewHead.img_vip.visible = unit.GetVipLevel() > 0;
                    viewHead.img_vip.skin = TongyongUtil.getVipUrl(unit.GetVipLevel());
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        viewHead.qifu_type.visible = true;
                        viewHead.qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween(viewHead.qifu_type, qifu_index);
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        viewHead.qifu_type.visible = true;
                        viewHead.qifu_type.skin = this._qifuTypeImgUrl;
                        //时间戳变化 才加上祈福标志
                        this.playTween(viewHead.qifu_type, qifu_index);
                        Laya.timer.once(2500, this, () => {
                            viewHead.img_qifu.visible = true;
                            viewHead.img_icon.skin = TongyongUtil.getHeadUrl(unit.GetHeadImg(), 2);
                        })
                    }
                    else {
                        viewHead.img_qifu.visible = TongyongUtil.getIsHaveQiFu(unit, this._game.sync.serverTimeBys);
                        viewHead.img_icon.skin = TongyongUtil.getHeadUrl(unit.GetHeadImg(), 2);
                    }
                }
            }
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index: number, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }

        private _qifuTypeImgUrl: string;
        private qifuFly(dataSource: any): void {
            if (!dataSource) return;
            let dataInfo = dataSource;
            if (!this._game.sceneObjectMgr || !this._game.sceneObjectMgr.mainUnit || this._game.sceneObjectMgr.mainUnit.GetIndex() != dataSource.qifu_index) return;
            this._game.qifuMgr.showFlayAni(this._viewUI.view_head0, this._viewUI, dataSource, (dataInfo) => {
                //相对应的玩家精灵做出反应
                this._qifuTypeImgUrl = TongyongUtil.getQFTypeImg(dataInfo.qf_id);
                this.onUpdateUnit(dataInfo.qifu_index);
            });
        }

        //金币变化
        private updateMoney(): void {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let max = 5;
            for (let index = 0; index < max; index++) {
                let posIdx = (idx + index) % max == 0 ? 5 : (idx + index) % max;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                if (unit) {
                    let money = EnumToString.getPointBackNum(unit.GetMoney(), 2);
                    this._viewUI["view_head" + index].txt_money.text = money;
                }
            }
        }

        //地图监听
        private onUpdateMapInfo(): void {
            let mapInfo = this._game.sceneObjectMgr.mapInfo;
            this._mapInfo = mapInfo as SangongMapInfo;
            if (mapInfo) {
                this._viewUI.view_xipai.ani_xipai.on(LEvent.COMPLETE, this, this.afterXiPai);
                this._viewUI.btn_continue.visible = false;
                if (this._SangongMgr.isReLogin) {
                    this._SangongStory.mapLv = this._mapInfo.GetMapLevel();
                    this.updateBattledInfo();
                    this.onUpdateMapState();
                    this.onAfterDealCards();
                    this._viewUI.view_paixie.cards.visible = true;
                    this._SangongMgr.isReLogin = false;
                }
                this.onUpdateUnit();
            } else {
                this.onUpdateUnitOffline();
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
            }
        }

        //假精灵数据
        private onUpdateUnitOffline() {
            if (!this._SangongMgr.unitOffline) return;
            let unitOffline = this._SangongMgr.unitOffline;
            let mPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (unitOffline) {
                this._viewUI.view_head0.visible = true;
                let money;
                if (mPlayer) {
                    if (!mPlayer.playerInfo) return;
                    money = mPlayer.playerInfo.money;
                    this._viewUI.view_head0.txt_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                    this._viewUI.view_head0.img_icon.skin = TongyongUtil.getHeadUrl(mPlayer.playerInfo.headimg);
                    this._viewUI.view_head0.img_qifu.visible = TongyongUtil.getIsHaveQiFu(mPlayer, this._game.sync.serverTimeBys);
                    //头像框
                    this._viewUI.view_head0.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(mPlayer.playerInfo.headKuang);
                    this._viewUI.view_head0.img_vip.visible = mPlayer.playerInfo.vip_level > 0;
                    this._viewUI.view_head0.img_vip.skin = TongyongUtil.getVipUrl(mPlayer.playerInfo.vip_level);
                } else {
                    money = unitOffline.GetMoney();
                    this._viewUI.view_head0.txt_name.text = getMainPlayerName(unitOffline.GetName());
                    this._viewUI.view_head0.img_icon.skin = TongyongUtil.getHeadUrl(unitOffline.GetHeadImg());
                    this._viewUI.view_head0.img_qifu.visible = TongyongUtil.getIsHaveQiFu(unitOffline, this._game.sync.serverTimeBys);
                    //头像框
                    this._viewUI.view_head0.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(unitOffline.GetHeadKuangImg());
                }
                money = EnumToString.getPointBackNum(money, 2);
                this._viewUI.view_head0.txt_money.text = money.toString();
            }
        }

        //地图状态
        private onUpdateMapState(): void {
            if (!this._mapInfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            this._curStatus = this._mapInfo.GetMapState();
            let idx = mainUnit.GetIndex();
            if (!idx) return;
            let betPos = this._mapInfo.GetCurrentBetPos();
            let state = this._mapInfo.GetMapState();
            this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
            this._viewUI.text_info.visible = true;
            this._viewUI.box_room_left.visible = true;
            let str = "";
            if (this._SangongStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_1) {
                str = "房间：新手场";
            } else if (this._SangongStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_2) {
                str = "房间：小资场";
            } else if (this._SangongStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_3) {
                str = "房间：老板场";
            } else if (this._SangongStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_4) {
                str = "房间：富豪场";
            }
            this._viewUI.box_tips.visible = state == MAP_STATUS.MAP_STATE_BANKER || state == MAP_STATUS.MAP_STATE_BET;
            this._viewUI.txt_roomtype.text = str + "  底注：" + ChipConfig[this._SangongStory.mapLv][0];
            this._viewUI.img_time.visible = false;
            if (state == MAP_STATUS.MAP_STATE_SHUFFLE) {
                this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_GAMEWIN, parent: this._game.uiRoot.HUD });
                this._viewUI.view_xipai.visible = true;
                this._viewUI.view_xipai.ani_xipai.play(1, false);
            } else {
                this._viewUI.view_xipai.visible = false;
                this._viewUI.view_xipai.ani_xipai.stop();
            }
            if (state == MAP_STATUS.MAP_STATE_DEAL) {
                this._viewUI.view_paixie.ani2.play(1, true);
            }
            if (state == MAP_STATUS.MAP_STATE_BANKER) {
                for (let i = 1; i < 5; i++) {
                    this._viewUI["view_think" + i].visible = true;
                    this._viewUI["view_think" + i].ani1.play(0, true);
                }
                this._viewUI.txt_tips.text = "请选择是否抢庄";
                this._viewUI.box_banker.visible = true;
            } else {
                this._viewUI.box_banker.visible = false;
            }
            if (state == MAP_STATUS.MAP_STATE_BANKER_PLAY) {
                if (this._bankerTemp.length == 0) {
                    for (let i = 1; i < 6; i++) {
                        let unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                        if (unit) {
                            this._bankerTemp.push(i);
                        }
                    }
                }
                Laya.timer.loop(this._diff_ran, this, this.randBanker);
                this._viewUI.addChild(this._kuang);
                this._kuang.visible = false;
                this._randCount = 0;
                this.randBanker();
            }
            if (state >= MAP_STATUS.MAP_STATE_BANKER) {
                this._viewUI.view_paixie.ani2.gotoAndStop(0);
            }
            if (state >= MAP_STATUS.MAP_STATE_BET) {
                for (let i = 0; i < 5; i++) {
                    let unitIdx = (idx + i) % 5 == 0 ? 5 : (idx + i) % 5;
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx)
                    if (unit) {
                        if (unit.GetIdentity() != 1) {
                            this._viewUI["view_head" + i].img_banker.visible = false;
                        } else {
                            this._viewUI["view_head" + i].img_banker.visible = true;
                        }
                    }
                }
            }
            if (state == MAP_STATUS.MAP_STATE_BET) {
                this._viewUI.box_opt0.visible = false;
                for (let i = 0; i < 5; i++) {
                    this._viewUI["box_opt" + i].visible = false;
                    if (i > 0) {
                        let unitIdx = (idx + i) % 5 == 0 ? 5 : (idx + i) % 5;
                        let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx)
                        if (unit && unit.GetIdentity() != 1) {
                            this._viewUI["view_think" + i].visible = true;
                            this._viewUI["view_think" + i].ani1.play(0, true);
                        }
                    }
                }
                //随庄家的动画
                for (let i = 0; i < this._bankerTemp.length; i++) {
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(this._bankerTemp[i]);
                    let index = (this._bankerTemp[i] - mainUnit.GetIndex() + 5) % 5;
                    if (unit.GetIdentity() == 1) {
                        this._bankerIdx = this._bankerTemp[i];
                        this._viewUI["view_head" + index].img_banker.ani1.play(0, false);
                        this._game.playSound(Path_game_sangong.music_sangong + MUSIC_PATH.bankerMusic, false);
                        break;
                    }
                }
                this._kuang.removeSelf();
                Laya.timer.clear(this, this.randBanker);
                //是庄家，就不显示下注了
                if (mainUnit.GetIdentity() == 1) {
                    this._viewUI.box_bet.visible = false;
                } else {
                    this._viewUI.box_bet.visible = true;
                }
                this._viewUI.txt_tips.text = mainUnit.GetIdentity() == 1 ? "请等待其他玩家下注" : "请选择下注倍数";
                //下注按钮的倍数显示
                let banker = this._game.sceneObjectMgr.getUnitByIdx(this._bankerIdx);
                let bankerMoney = banker.GetMoney();
                let bankePer = bankerMoney / (8 * ChipConfig[this._SangongStory.mapLv][0]);
                let selfMoney = mainUnit.GetMoney();
                let xianPer = selfMoney / (2 * ChipConfig[this._SangongStory.mapLv][0]);
                let betPer = bankePer > xianPer ? xianPer : bankePer;
                if (betPer > 35) {
                    betPer = 35;
                }
                for (let i = 1; i < 6; i++) {
                    let val = Math.floor(i * betPer / 5 + 0.5);
                    if (val >= 1 && this._betPerTemp.indexOf(val) < 0) {
                        this._betPerTemp.push(val);
                    }
                }
                for (let i = 0; i < this._betPerTemp.length; i++) {
                    let index = i + 1;
                    // this.resetBetBtnPos(this._betPerTemp.length);
                    this["_beiClip" + index].setText(this._betPerTemp[i], true, false, "", PathGameTongyong.ui_tongyong_general + "tu_bei.png");
                }
                for (let k = this._betPerTemp.length + 1; k < 6; k++) {
                    this._viewUI["btn_bet" + k].disabled = true;
                }
            } else {
                this._viewUI.box_bet.visible = false;
            }
            if (state == MAP_STATUS.MAP_STATE_SHOW_CARDS) {
                for (let i = 1; i < 5; i++) {
                    this._viewUI["view_think" + i].visible = false;
                    this._viewUI["view_think" + i].ani1.stop();
                }
                this._viewUI.btn_show.visible = true;
            } else {
                this._viewUI.btn_show.visible = false;
            }
            if (state == MAP_STATUS.MAP_STATE_SETTLE) {
                let isTongSha = this._settleWinInfo.length < 1;
                let isTongPei = this._settleLoseInfo.length < 1;
                let time_delay = isTongPei || isTongSha ? 1000 : 0;//飘筹码延迟
                let fly_delay = isTongSha || isTongPei ? 2700 : 1700;//飘字延迟
                if (isTongSha) {//庄家通杀
                    this._game.playSound(Path_game_sangong.music_sangong + "zjtongchi.mp3", false);
                    this._pageHandle.pushOpen({ id: TongyongPageDef.PAGE_TONGYONG_ZJTS, parent: this._game.uiRoot.HUD });
                } else if (isTongPei) {//庄家通赔
                    // this._game.playSound(Path_game_sangong.music_sangong + "zjtongpei.mp3", false);Z
                    this._pageHandle.pushOpen({ id: TongyongPageDef.PAGE_TONGYONG_ZJTP, parent: this._game.uiRoot.HUD });
                }
                //结算飘筹码
                Laya.timer.once(time_delay, this, () => {
                    this.showSettleEff();
                });
                //胜利动画
                Laya.timer.once(fly_delay, this, () => {
                    if (this._moneyChange >= 0) { //再播你赢了
                        this._pageHandle.pushOpen({ id: TongyongPageDef.PAGE_TONGYONG_GAMEWIN, parent: this._game.uiRoot.HUD });
                        let musicType = MathU.randomRange(1, 3);
                        this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.winMusic + musicType + ".mp3", true);
                    } else { //再播你输了
                        let musicType = MathU.randomRange(1, 4);
                        this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.loseMusic + musicType + ".mp3", true);
                    }
                    this._pageHandle.updatePageHandle();//更新额外界面的开关状态
                    this._pageHandle.reset();//清空额外界面存储数组
                });
            }
            if (state == MAP_STATUS.MAP_STATE_END) {
                this._viewUI.btn_continue.visible = true;
            }

            this._pageHandle.updatePageHandle();//更新额外界面的开关状态
            this._pageHandle.reset();//清空额外界面存储数组
        }

        private resetBetBtnPos(num: number): void {
            let posConfig = betBtnPos[num.toString()];
            switch (num) {
                case 2:
                    for (let i = 1; i < num + 1; i++) {
                        this._viewUI["btn_bet" + i].left = posConfig[i - 1];
                    }
                    break;
                case 3:
                    for (let i = 1; i < num + 1; i++) {
                        this._viewUI["btn_bet" + i].left = posConfig[i - 1];
                    }
                    break;
                case 4:
                    for (let i = 1; i < num + 1; i++) {
                        this._viewUI["btn_bet" + i].left = posConfig[i - 1];
                    }
                    break;
                case 5:
                    for (let i = 1; i < num + 1; i++) {
                        this._viewUI["btn_bet" + i].left = posConfig[i - 1];
                    }
                    break;
            }
        }

        //随一个庄家
        private _randCount: number = 0;
        private _curIndex: number = 0;
        private _diff_ran: number = 100;
        private randBanker(): void {
            if (!this._game.mainScene || !this._game.mainScene.camera) return;
            if (this._curIndex >= this._bankerTemp.length) {
                this._curIndex = 0;
            }
            let idx = this._bankerTemp[this._curIndex];
            let posIdx = (idx - this._mainIdx + 5) % 5;
            let posX = this._game.mainScene.camera.getScenePxByCellX(this._viewUI["view_head" + posIdx].x - 1);
            let posY = this._game.mainScene.camera.getScenePxByCellY(this._viewUI["view_head" + posIdx].y - 1);
            this._kuang.visible = true;
            this._kuang.pos(posX, posY);
            if (this._randCount >= 1500) {
                for (let i = 1; i < 6; i++) {
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(i)
                    let index = (i - this._mainIdx + 5) % 5
                    if (unit) {
                        if (unit.GetIdentity() == 1) {
                            this._viewUI["view_head" + index].img_banker.visible = true;
                        } else {
                            this._viewUI["view_head" + index].img_banker.visible = false;
                        }
                    }

                }
                Laya.timer.clear(this, this.randBanker);
            }
            this._curIndex++;
            this._randCount += this._diff_ran;
            if (this._bankerTemp.length > 1) {
                this._game.playSound(Path_game_sangong.music_sangong + MUSIC_PATH.randBankerMusic, false);
            }
        }

        //发完牌了
        private onAfterDealCards(): void {
            this._viewUI.view_paixie.ani2.gotoAndStop(0);
        }

        //更新倒计时时间戳
        private updateCountDown(): void {
            let mapinfo: SangongMapInfo = this._game.sceneObjectMgr.mapInfo as SangongMapInfo;
            if (!mapinfo) return;
            this._countDown = mapinfo.GetCountDown();
        }

        private _noTimer: number[] = [
            MAP_STATUS.MAP_STATE_NONE,
            MAP_STATUS.MAP_STATE_SHUFFLE,
            MAP_STATUS.MAP_STATE_DEAL,
            MAP_STATUS.MAP_STATE_DEA_END,
            MAP_STATUS.MAP_STATE_BANKER_PLAY,
            MAP_STATUS.MAP_STATE_SETTLE,
            MAP_STATUS.MAP_STATE_END,
        ];
        //操作倒计时
        deltaUpdate(): void {
            if (!(this._game.sceneObjectMgr.mapInfo instanceof SangongMapInfo)) return;
            if (!this._viewUI) return;
            if (this._noTimer.indexOf(this._curStatus) != -1) {
                this._viewUI.img_time.visible = false;
                this._viewUI.img_time.ani1.gotoAndStop(24);
                return;
            }
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._mapInfo.GetCountDown() - curTime);
            if (time > 0) {
                this._viewUI.img_time.visible = true;
                this._viewUI.img_time.txt_time.text = time.toString();
                // if (time == 3 && !this._viewUI.img_time.ani1.isPlaying) {
                //     this._viewUI.img_time.ani1.play(1, true);
                // }
            } else {
                this._viewUI.img_time.visible = false;
                // this._viewUI.img_time.ani1.gotoAndStop(24);
            }
        }

        //已选择抢庄倍数的人数
        private _battleBankerNum: number = 0;
        //已选择下注倍数的人数
        private _battleBetNum: number = 0;
        //战斗日志
        private updateBattledInfo(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            let battleInfoMgr = this._mapInfo.battleInfoMgr;
            let mainIdx = mainUnit.GetIndex();
            if (!mainIdx) return;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                switch (battleInfo.Type) {
                    case 12: {   //抢庄
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBanker;
                            let idx = info.SeatIndex;
                            let type = info.BetVal;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                this._battleBankerNum++;
                                //玩家自己
                                if (idx == mainIdx) {
                                    this._viewUI.box_banker.visible = false;
                                    this.setBankerNum(this._viewUI.box_opt0, type == 1);
                                    if (this._battleBankerNum == this.getUnitCount()) {
                                        this._viewUI.box_tips.visible = false;
                                    } else {
                                        this._viewUI.box_tips.visible = true;
                                        this._viewUI.txt_tips.text = "请等待其他玩家抢庄";
                                    }
                                } else {
                                    let posIdx = (idx - mainIdx + 5) % 5;
                                    this.setBankerNum(this._viewUI["box_opt" + posIdx], type == 1);
                                    if (this._viewUI["view_think" + posIdx]) {
                                        this._viewUI["view_think" + posIdx].visible = false;
                                        this._viewUI["view_think" + posIdx].ani1.stop();
                                    }
                                }
                            }
                            if (type == 1) {
                                this._bankerTemp.push(idx);
                            }
                        }
                        break;
                    }
                    case 13: {   //下注
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBetRate;
                            let idx = info.SeatIndex;
                            let val = info.BankerRate;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                this._battleBetNum++;
                                //玩家自己
                                if (idx == mainIdx) {
                                    this.setBetNum(this._viewUI.box_opt0, val);
                                    if (this._battleBetNum == this.getUnitCount() - 1) {
                                        this._viewUI.box_tips.visible = false;
                                    } else {
                                        this._viewUI.box_tips.visible = true;
                                        this._viewUI.txt_tips.text = "请等待其他玩家下注";
                                    }
                                } else {
                                    let posIdx = (idx - mainIdx + 5) % 5;
                                    this.setBetNum(this._viewUI["box_opt" + posIdx], val);
                                    this._viewUI["view_think" + posIdx].visible = false;
                                    this._viewUI["view_think" + posIdx].ani1.stop();
                                }
                            }
                        }
                        break;
                    }
                    case 3: {   //摊牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPlayCard<SangongData>;
                            let idx = info.SeatIndex;
                            let cards = [];
                            let pos = info.CardType;
                            for (let index = 0; index < info.Cards.length; index++) {
                                let card = info.Cards[index];
                                cards.push(card.GetVal());
                            }
                            this._SangongMgr.showCards(cards, idx);
                            let posIdx = (idx - mainIdx + 5) % 5;
                            let cardType = this._SangongMgr.checkCardsType(cards);
                            let type: number;
                            let per: number;    //倍数
                            if (cardType > 1) {
                                type = cardType + 8;
                                per = cardType + 1;
                            } else {
                                type = this._SangongMgr.checkCardsCount(cards);
                                if (type >= 7) {
                                    per = 2;
                                } else {
                                    per = 1;
                                }
                            }
                            if (posIdx == 0) {
                                this._viewUI.view_type.visible = true;
                                this._viewUI.view_type.ani1.play(1, false)
                                this._viewUI.btn_show.visible = false;
                                this._viewUI.view_type.img_type.skin = Path_game_sangong.ui_sangong + "brnntype_normal_" + type + ".png";
                                this._viewUI.view_type.img_num.skin = Path_game_sangong.ui_sangong + "tu_x" + per + ".png";
                                this._viewUI.view_type.img_bg.skin = Path_game_sangong.ui_sangong + "brnntype_bgimg_" + (per - 1) + ".png";
                            } else {
                                this._viewUI["view_player" + posIdx].view_type.visible = true;
                                this._viewUI["view_player" + posIdx].view_type.ani1.play(1, false);
                                this._viewUI["view_player" + posIdx].view_type.img_type.skin = Path_game_sangong.ui_sangong + "brnntype_normal_" + type + ".png";
                                this._viewUI["view_player" + posIdx].view_type.img_num.skin = Path_game_sangong.ui_sangong + "tu_x" + per + ".png";
                                this._viewUI["view_player" + posIdx].view_type.img_bg.skin = Path_game_sangong.ui_sangong + "brnntype_bgimg_" + (per - 1) + ".png";
                            }
                            if (!this._SangongMgr.isReLogin) {
                                let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    let headNum = parseInt(unit.GetHeadImg());
                                    let sexType = headNum > 10 ? "female" : "male";
                                    this._game.playSound(Path_game_sangong.music_sangong + MUSIC_PATH.cardTypeMusic + sexType + "_" + type + ".mp3", false);
                                }
                            }
                        }
                        break;
                    }
                    case 11: {   //结算
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
                            if (info.SeatIndex != this._bankerIdx) {
                                if (info.SettleVal > 0) {
                                    this._settleWinInfo.push(info.SeatIndex);
                                    this._settleWinInfo.push(info.SettleVal);
                                } else {
                                    this._settleLoseInfo.push(info.SeatIndex);
                                    this._settleLoseInfo.push(info.SettleVal);
                                }
                            } else {
                                this._bankerMoneyChange = info.SettleVal;
                            }
                            //记下主玩家货币变化
                            if (info.SeatIndex == mainIdx) {
                                this._moneyChange = info.SettleVal;
                            }
                        }
                        break;
                    }
                }
            }
        }

        private getUnitCount() {
            let count: number = 0;
            let unitDic = this._game.sceneObjectMgr.unitDic;
            if (unitDic) {
                for (let key in unitDic) {
                    count++;
                }
            }
            return count;
        }

        private setBankerNum(view: any, isqiang: boolean): void {
            view.visible = true;
            view.box_bet.visible = false;
            view.box_qiang.visible = isqiang;
            view.box_buqiang.visible = !view.box_qiang.visible;
            if (this._curStatus == MAP_STATUS.MAP_STATE_BANKER) {
                view.ani1.play(0, false);
            } else {
                view.ani1.gotoAndStop(27);
            }
        }

        //设置下注倍数
        private _betClipList: any[] = [];
        private setBetNum(view: any, val: number): void {
            view.visible = true;
            view.box_bet.visible = true;
            view.box_qiang.visible = false;
            view.box_buqiang.visible = false;
            let clip_money = new SangongClip(SangongClip.BET_CLIP_FONT);
            clip_money.setText(Math.abs(val), true);
            clip_money.scale(0.85, 0.85);
            clip_money.centerX = view.bet_clip.centerX;
            clip_money.centerY = view.bet_clip.centerY;
            view.bet_clip.parent.addChild(clip_money);
            this._clipList.push(clip_money);
            view.bet_clip.visible = false;
            if (this._curStatus == MAP_STATUS.MAP_STATE_BET) {
                view.ani1.play(0, false);
            } else {
                view.ani1.gotoAndStop(27);
            }
        }

        //结算表现
        private showSettleEff(): void {
            this.addBankerWinEff();
            Laya.timer.once(1000, this, () => {
                this.addBankerLoseEff();
                this.addMoneyClip(this._bankerMoneyChange, this._bankerIdx);
            });
        }

        //庄家赢钱
        private addBankerWinEff(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (!this._bankerIdx) return;
            //通赔
            if (this._settleLoseInfo.length < 1) return;
            let mainIdx = mainUnit.GetIndex();
            let bankerPos = (this._bankerIdx - mainIdx + 5) % 5;
            for (let i: number = 0; i < this._settleLoseInfo.length / 2; i++) {
                let index = i * 2;
                let unitPos = (this._settleLoseInfo[index] - mainIdx + 5) % 5;
                if (i < this._settleLoseInfo.length / 2) {
                    this.addMoneyFly(unitPos, bankerPos);
                    this.addMoneyClip(this._settleLoseInfo[index + 1], this._settleLoseInfo[index]);
                }
            }
        }

        //庄家输钱
        private addBankerLoseEff(): void {
            //通吃
            if (this._settleWinInfo.length < 1) return;
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let bankerPos = (this._bankerIdx - mainIdx + 5) % 5;
            for (let i: number = 0; i < this._settleWinInfo.length / 2; i++) {
                let index = i * 2;
                let unitPos = (this._settleWinInfo[index] - mainIdx + 5) % 5;
                if (i < this._settleWinInfo.length / 2) {
                    this.addMoneyFly(bankerPos, unitPos);
                    this.addMoneyClip(this._settleWinInfo[index + 1], this._settleWinInfo[index]);
                }
            }
        }

        //金币变化 飘金币特效
        private _senceItemFlyMgr: SenceItemFlyMgr;
        public addMoneyFly(fromPos: number, tarPos: number): void {
            if (!this._game.mainScene || !this._game.mainScene.camera) return;
            let fromX = this._viewUI["view_head" + fromPos].x + this._viewUI["view_head" + fromPos].width / 2;
            let fromY = this._viewUI["view_head" + fromPos].y + this._viewUI["view_head" + fromPos].height / 2;
            let tarX = this._viewUI["view_head" + tarPos].x + this._viewUI["view_head" + tarPos].width / 2;
            let tarY = this._viewUI["view_head" + tarPos].y + this._viewUI["view_head" + tarPos].height / 2;
            if (!this._senceItemFlyMgr) {
                this._senceItemFlyMgr = new SenceItemFlyMgr(this._game);
            }
            this._senceItemFlyMgr.init(fromX, fromY, tarX, tarY);
        }

        //金币变化 飘字clip
        public addMoneyClip(value: number, pos: number): void {
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let clip_money = value >= 0 ? new SangongClip(SangongClip.ADD_MONEY_FONT) : new SangongClip(SangongClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            let img_di = value >= 0 ? new LImage(PathGameTongyong.ui_tongyong_general + "tu_yingqian.png") : new LImage(PathGameTongyong.ui_tongyong_general + "tu_shuqian.png");
            let index = (pos - idx + 5) % 5;
            let playerIcon = this._viewUI["view_head" + index];
            //飘字底
            img_di.centerX = playerIcon.img_di.centerX;
            img_di.centerY = playerIcon.img_di.centerY;
            playerIcon.img_di.parent.addChild(img_di);
            this._imgdiList.push(img_di);
            playerIcon.img_di.visible = false;
            //飘字
            clip_money.setText(Math.abs(value), true, false, preSkin);
            clip_money.centerX = playerIcon.clip_money.centerX - 4;
            clip_money.centerY = playerIcon.clip_money.centerY;
            playerIcon.clip_money.parent.addChild(clip_money);
            this._clipList.push(clip_money);
            playerIcon.clip_money.visible = false;
            //飘字box缓动
            playerIcon.box_clip.y = 57;
            playerIcon.box_clip.visible = true;
            Laya.Tween.clearAll(playerIcon.box_clip);
            Laya.Tween.to(playerIcon.box_clip, { y: playerIcon.box_clip.y - 55 }, 700);
            //赢钱动画
            playerIcon.effWin.visible = value > 0;
            value > 0 && playerIcon.effWin.ani1.play(0, false);
        }

        //清理飘钱动画
        private clearClip(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy(true);
                    clip = null;
                }
            }
            this._clipList = [];

            if (this._imgdiList && this._imgdiList.length) {
                for (let j: number = 0; j < this._imgdiList.length; j++) {
                    let imgdi = this._imgdiList[j];
                    imgdi.removeSelf();
                    imgdi.destroy(true);
                    imgdi = null;
                }
            }
            this._imgdiList = [];
        }

        //洗牌动画之后
        private afterXiPai(): void {
            Laya.Tween.to(this._viewUI.view_xipai, { x: 820, y: 150, alpha: 0.05, rotation: -56, scaleX: 0.3, scaleY: 0.3 }, 500, null, Handler.create(this, () => {
                this._viewUI.view_paixie.cards.visible = true;
                this._viewUI.view_paixie.ani_chupai.play(0, false);
                this._viewUI.view_xipai.visible = false;
            }));
        }

        //充值弹框
        private onNotEnoughMoney(): void {
            if (!this._game.sceneObjectMgr.mainPlayer) return;
            if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._SangongStory.mapLv][1]) {
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", ChipConfig[this._SangongStory.mapLv][1]), () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, true, TongyongPageDef.TIPS_SKIN_STR["cz"]);
            }
        }

        //重置数据
        private resetData(): void {
            this._battleIndex = -1;
            this._battleBankerNum = 0;
            this._battleBetNum = 0;
            this._SangongMgr && (this._SangongMgr.isReLogin = false);
            this._viewUI.view_xipai.scale(1, 1);
            this._viewUI.view_xipai.x = 640;
            this._viewUI.view_xipai.y = 290;
            this._viewUI.view_xipai.rotation = 0;
            this._viewUI.view_xipai.alpha = 1;
            this._bankerTemp = [];
            this._randCount = 0;
            this._bankerIdx = 0;
            this._settleWinInfo = [];
            this._settleLoseInfo = [];
            this._betPerTemp = [];
            this._bankerMoneyChange = 0;
            this._moneyChange = 0;
            for (let i = 1; i < 6; i++) {
                this._viewUI["btn_bet" + i].visible = true;
            }
            this._SangongStory && (this._SangongStory.isDealCard = false);
        }

        private clearMapInfoListen(): void {
            this._game.sceneObjectMgr.off(SangongMapInfo.EVENT_SG_STATUS_CHECK, this, this.onUpdateMapState);
            this._game.sceneObjectMgr.off(SangongMapInfo.EVENT_SG_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.off(SangongMapInfo.EVENT_SG_COUNT_DOWN, this, this.updateCountDown);//倒计时更新
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterXiPai);
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qiang.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_buqiang.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_show.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);

                this._game.sceneObjectMgr.off(SangongMapInfo.EVENT_SG_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.off(SangongMapInfo.EVENT_SG_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(SangongMapInfo.EVENT_SG_COUNT_DOWN, this, this.updateCountDown);//倒计时更新
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.qifuMgr.off(QiFuMgr.QIFU_FLY, this, this.qifuFly);
                this._senceItemFlyMgr && this._senceItemFlyMgr.clear();
                this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterXiPai);
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
                if (this._SangongMgr) {
                    this._SangongMgr.off(SangongMgr.DEAL_CARDS, this, this.onAfterDealCards);
                }
                this._mapInfo = null;
                this._game.stopMusic();
                this._game.stopAllSound();
                this.clearBeiClip();
            }

            super.close();
        }
    }
}