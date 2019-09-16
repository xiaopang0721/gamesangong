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
    const MONEY_NUM = 40; // 特效金币数量
    const MONEY_FLY_TIME = 30; // 金币飞行时间间隔
    //音效url
    const MUSIC_PATH = {
        bgMusic: "sg_bgm.mp3",
        cardTypeMusic: "sg_",
        randBankerMusic: "suijizhuangjia.mp3",
        bankerMusic: "dingzhuang.mp3",
        loseMusic: "tongyong/lose",
        winMusic: "tongyong/win",
    }

    export class SangongMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.sangong.SanGongUI;
        private _mapInfo: SangongMapInfo;
        private _SangongMgr: SangongMgr;
        private _SangongStory: SangongStory;
        private _battleIndex: number = -1;
        private _curStatus: number; //当前地图状态
        private _countDown: number; //倒计时结束时间
        private _bankerTemp: any = [];  //所有抢庄的人
        private _mainIdx: number;   //主玩家座位号
        private _clipList: Array<SangongClip> = [];//飘字
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
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                Path_game_sangong.atlas_game_ui + "sangong.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                Path_game_sangong.atlas_game_ui + "sangong/effect/yanhua.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                Path_game_sangong.ui_sangong + "sk/sg_0.png",
                Path_game_sangong.ui_sangong + "sk/sg_1.png",
                Path_game_sangong.ui_sangong + "sk/sg_2.png",
                Path_game_sangong.ui_sangong + "sk/sg_3.png",
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
            this._viewUI.btn_menu.left = this._game.isFullScreen ? 30 : 10;
            this._viewUI.img_menu.left = this._game.isFullScreen ? 25 : 10;
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
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
            this._viewUI.btn_cardtype.on(LEvent.CLICK, this, this.onBtnClickWithTween);
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
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

            for (let i = 1; i < 6; i++) {
                this._viewUI["btn_bet" + i] && this._viewUI["btn_bet" + i].on(LEvent.CLICK, this, this.onBet, [i]);
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
        }

        //倍数
        private _beiClip1: ClipUtil;
        private _beiClip2: ClipUtil;
        private _beiClip3: ClipUtil;
        private _beiClip4: ClipUtil;
        private _beiClip5: ClipUtil;
        initBeiClip(): void {
            for (let i = 1; i < 6; i++) {
                this["_beiClip" + i] = new ClipUtil(ClipUtil.BEI_FONT);
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
            this._viewUI.img_menu.visible = false;
            this._viewUI.btn_continue.visible = false;
            this._viewUI.text_info.visible = false;
            this._viewUI.text_roomtype.visible = false;
            this._viewUI.box_bet.visible = false;
            this._viewUI.box_banker.visible = false;
            this._viewUI.btn_continue.visible = false;
            this._viewUI.btn_show.visible = false;
            this._viewUI.img_qiang.visible = false;
            this._viewUI.view_paixie.cards.visible = false;
            this._viewUI.view_type.visible = false;
            this._viewUI.box_betnum.visible = false;
            this._viewUI.img_time.visible = false;
            this._viewUI.img_time.ani1.stop();
            this._viewUI.view_xipai.visible = false;
            this._viewUI.view_xipai.ani_xipai.stop();
            this._viewUI.view_paixie.ani2.gotoAndStop(0);
            for (let i = 0; i < 5; i++) {
                this._viewUI["view_head" + i].visible = false;
                this._viewUI["view_banker" + i].visible = false;
                this._viewUI["view_banker" + i].ani1.gotoAndStop(10);
                if (i > 0) {
                    this._viewUI["view_player" + i].img_frame.visible = false;
                    this._viewUI["view_player" + i].box_betnum.visible = false;
                    this._viewUI["view_player" + i].img_banker.visible = false;
                    this._viewUI["view_player" + i].view_type.visible = false;
                }
            }
        }

        //按钮点击
        protected onBtnTweenEnd(e: LEvent, target: any) {
            switch (target) {
                case this._viewUI.btn_menu:
                    this._viewUI.img_menu.visible = true;
                    this._viewUI.btn_menu.visible = false;
                    break;
                case this._viewUI.btn_back:
                    let mapinfo: SangongMapInfo = this._game.sceneObjectMgr.mapInfo as SangongMapInfo;
                    if (mapinfo && mapinfo.GetPlayState() == 1) {
                        this._game.showTips("游戏尚未结束，请先打完这局哦~");
                        return;
                    }
                    this.resetData();
                    this.clearMapInfoListen();
                    this._SangongMgr.clear();
                    this._SangongStory.clear();
                    this.clearClip();
                    this._game.sceneObjectMgr.leaveStory(true);
                    // this.close();
                    break;
                case this._viewUI.btn_cardtype:
                    this._game.uiRoot.general.open(SangongPageDef.PAGE_SG_RULE, (page: SangongRulePage) => {
                        page.dataSource = 1;
                    });
                    break;
                case this._viewUI.btn_rules:
                    this._game.uiRoot.general.open(SangongPageDef.PAGE_SG_RULE);
                    break;
                case this._viewUI.btn_qifu:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
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
                    this._game.network.call_sg_banker(1);
                    break;
                case this._viewUI.btn_buqiang:
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

        //点击任意地方关闭菜单
        protected onMouseClick(e: LEvent) {
            if (e.currentTarget != this._viewUI.btn_menu) {
                this._viewUI.img_menu.visible = false;
                this._viewUI.btn_menu.visible = true;
            }
        }

        //选择下注倍数
        private onBet(index: number, e: LEvent): void {
            if (e.currentTarget) {
                this._game.uiRoot.btnTween(e.currentTarget);
            }
            //下注按钮的倍数
            let val = this._betPerTemp[index - 1];
            this._game.network.call_sg_bet(val);
        }

        private onUnitAdd(u: Unit): void {
            this.onUpdateUnit();

        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
            let posIdx = (u.GetIndex() - this._mainIdx + 5) % 5;
            this._viewUI["view_banker" + posIdx].visible = false;
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
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx)
                this._viewUI["view_head" + index].visible = unit;
                if (unit) {
                    //庄家存一下
                    if (unit.GetIdentity() == 1) {
                        this._bankerIdx = posIdx;
                    }
                    let name = getMainPlayerName(unit.GetName());
                    this._viewUI["view_head" + index].text_name.text = name;
                    this._viewUI["view_head" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                    if (this._curStatus != MAP_STATUS.MAP_STATE_SETTLE || this._SangongMgr.isReLogin) {
                        this.updateMoney();
                    }
                    //头像框
                    this._viewUI["view_head" + index].img_txk.visible = unit.GetVipLevel() > 0;
                    if (this._viewUI["view_head" + index].img_txk.visible) {
                        this._viewUI["view_head" + index].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        this._viewUI["view_head" + index].qifu_type.visible = true;
                        this._viewUI["view_head" + index].qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween(this._viewUI["view_head" + index].qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (unit.GetQiFuEndTime() > this._game.sync.serverTimeBys) {
                        if (qifu_index && posIdx == qifu_index) {
                            Laya.timer.once(2500, this, () => {
                                this._viewUI["view_head" + index].img_qifu.visible = true;
                                if (this._viewUI["view_head" + index].img_qifu.visible && unit.GetQiFuType()) {
                                    this._viewUI["view_head" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                }
                            })
                        } else {
                            this._viewUI["view_head" + index].img_qifu.visible = true;
                            if (this._viewUI["view_head" + index].img_qifu.visible && unit.GetQiFuType()) {
                                this._viewUI["view_head" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                            }
                        }
                    } else {
                        this._viewUI["view_head" + index].img_qifu.visible = false;
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

        private _nameStrInfo: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
        private _qifuTypeImgUrl: string;
        protected onOptHandler(optcode: number, msg: any) {
            if (msg.type == Operation_Fields.OPRATE_GAME) {
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                        let dataInfo = JSON.parse(msg.data);
                        //打开祈福动画界面
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, (page) => {
                            page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        });
                        //相对应的玩家精灵做出反应
                        this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        this.onUpdateUnit(dataInfo.qifu_index);
                        break;
                }
            }
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
                    this._viewUI["view_head" + index].text_money.text = money;
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
                    this._viewUI.view_head0.text_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                    this._viewUI.view_head0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mPlayer.playerInfo.headimg + ".png";
                    this._viewUI.view_head0.img_qifu.visible = mPlayer.playerInfo.qifu_endtime > this._game.sync.serverTimeBys;
                    if (this._viewUI.view_head0.img_qifu.visible && mPlayer.playerInfo.qifu_type) {
                        this._viewUI.view_head0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mPlayer.playerInfo.qifu_type - 1] + ".png";
                    }
                    //头像框
                    this._viewUI.view_head0.img_txk.visible = mPlayer.playerInfo.vip_level > 0;
                    if (this._viewUI.view_head0.img_txk.visible) {
                        this._viewUI.view_head0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mPlayer.playerInfo.vip_level + ".png";
                    }
                } else {
                    money = unitOffline.GetMoney();
                    this._viewUI.view_head0.text_name.text = getMainPlayerName(unitOffline.GetName());
                    this._viewUI.view_head0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitOffline.GetHeadImg() + ".png";
                    this._viewUI.view_head0.img_qifu.visible = unitOffline.GetQiFuEndTime() > this._game.sync.serverTimeBys;
                    if (this._viewUI.view_head0.img_qifu.visible && unitOffline.GetQiFuType()) {
                        this._viewUI.view_head0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unitOffline.GetQiFuType() - 1] + ".png";
                    }
                    //头像框
                    this._viewUI.view_head0.img_txk.visible = unitOffline.GetVipLevel() > 0;
                    if (this._viewUI.view_head0.img_txk.visible) {
                        this._viewUI.view_head0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unitOffline.GetVipLevel() + ".png";
                    }
                }
                money = EnumToString.getPointBackNum(money, 2);
                this._viewUI.view_head0.text_money.text = money.toString();
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
            this._viewUI.text_roomtype.visible = true;
            let str = "";
            if (this._SangongStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_1) {
                str = "新手场：底注：";
            } else if (this._SangongStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_2) {
                str = "小资场：底注：";
            } else if (this._SangongStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_3) {
                str = "老板场：底注：";
            } else if (this._SangongStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_4) {
                str = "富豪场：底注：";
            }
            this._viewUI.text_roomtype.text = str + ChipConfig[this._SangongStory.mapLv][0];
            if (state == MAP_STATUS.MAP_STATE_SHUFFLE) {
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
                Laya.timer.loop(100, this, this.randBanker);
                this.randBanker();
            }
            if (state >= MAP_STATUS.MAP_STATE_BANKER) {
                this._viewUI.view_paixie.ani2.gotoAndStop(0);
            }
            if (state >= MAP_STATUS.MAP_STATE_BET) {
                this._viewUI.img_qiang.visible = false;
                for (let i = 1; i < 5; i++) {
                    this._viewUI["view_player" + i].img_banker.visible = false;
                }
                for (let i = 0; i < 5; i++) {
                    let unitIdx = (idx + i) % 5 == 0 ? 5 : (idx + i) % 5;
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx)
                    if (unit) {
                        if (unit.GetIdentity() != 1) {
                            this._viewUI["view_banker" + i].visible = false;
                        } else {
                            this._viewUI["view_banker" + i].visible = true;
                        }
                    }
                    this._viewUI["view_banker" + i].ani1.stop();
                }
            }
            if (state == MAP_STATUS.MAP_STATE_BET) {
                //随庄家的动画
                for (let i = 0; i < this._bankerTemp.length; i++) {
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(this._bankerTemp[i]);
                    let index = (this._bankerTemp[i] - mainUnit.GetIndex() + 5) % 5;
                    if (unit.GetIdentity() == 1) {
                        this._viewUI["view_banker" + index].ani1.play(1, false);
                        this._bankerIdx = this._bankerTemp[i];
                        this._game.playSound(Path_game_sangong.music_sangong + MUSIC_PATH.bankerMusic, false);
                        break;
                    }
                }
                Laya.timer.clear(this, this.randBanker);
                //是庄家，就不显示下注了
                if (mainUnit.GetIdentity() == 1) {
                    this._viewUI.box_bet.visible = false;
                } else {
                    this._viewUI.box_bet.visible = true;
                }
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
                    // this._viewUI["btn_bet" + index].label = this._betPerTemp[i] + "倍";
                    this["_beiClip" + index].setText(this._betPerTemp[i], true);
                }
                for (let k = this._betPerTemp.length + 1; k < 6; k++) {
                    this._viewUI["btn_bet" + k].visible = false;
                }
            } else {
                this._viewUI.box_bet.visible = false;
            }
            if (state == MAP_STATUS.MAP_STATE_SHOW_CARDS) {
                this._viewUI.btn_show.visible = true;
            } else {
                this._viewUI.btn_show.visible = false;
            }
            if (state == MAP_STATUS.MAP_STATE_SETTLE) {
                this.addBankerWinEff();
            }
            if (state == MAP_STATUS.MAP_STATE_END) {
                this._pageHandle.pushClose({ id: SangongPageDef.PAGE_SG_WIN, parent: this._game.uiRoot.HUD });
                this._pageHandle.pushClose({ id: SangongPageDef.PAGE_SG_LOSE, parent: this._game.uiRoot.HUD });
                this._viewUI.btn_continue.visible = true;
            }

            this._pageHandle.updatePageHandle();//更新额外界面的开关状态
            this._pageHandle.reset();//清空额外界面存储数组
        }

        //随一个庄家
        private _randCount: number = 0;
        private randBanker(): void {
            let idx = this._bankerTemp[this._randCount % this._bankerTemp.length];
            let posIdx = (idx - this._mainIdx + 5) % 5;
            for (let i = 0; i < 5; i++) {
                if (i == posIdx) {
                    this._viewUI["view_banker" + i].visible = true;
                } else {
                    this._viewUI["view_banker" + i].visible = false;
                }
            }
            this._randCount++;
            if (this._randCount >= 11) {
                for (let i = 1; i < 6; i++) {
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(i)
                    let index = (i - this._mainIdx + 5) % 5
                    if (unit) {
                        if (unit.GetIdentity() == 1) {
                            this._viewUI["view_banker" + index].visible = true;
                        } else {
                            this._viewUI["view_banker" + index].visible = false;
                        }
                    }

                }
                Laya.timer.clear(this, this.randBanker);
            }
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

        //操作倒计时
        deltaUpdate(): void {
            if (!(this._game.sceneObjectMgr.mapInfo instanceof SangongMapInfo)) return;
            if (!this._viewUI) return;
            if (this._curStatus != MAP_STATUS.MAP_STATE_BANKER && this._curStatus != MAP_STATUS.MAP_STATE_BET) {
                this._viewUI.img_time.visible = false;
                this._viewUI.img_time.ani1.gotoAndStop(24);
                return;
            }
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._countDown - curTime) + 1;
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
                                //玩家自己
                                if (idx == mainIdx) {
                                    this._viewUI.img_qiang.visible = true;
                                    let skinType = type == 1 ? 1 : 0;
                                    this._viewUI.img_qiang.skin = Path_game_sangong.ui_sangong + "qiang_" + skinType + ".png"
                                    this._viewUI.box_banker.visible = false;
                                } else {
                                    let posIdx = (idx - mainIdx + 5) % 5;
                                    this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_banker.visible = true);
                                    let skinType = type == 1 ? 1 : 0;
                                    this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_banker.skin = Path_game_sangong.ui_sangong + "qiang_" + skinType + ".png");
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
                                //玩家自己
                                if (idx == mainIdx) {
                                    this._viewUI.box_betnum.visible = true;
                                    if (val < 10) {
                                        this._viewUI.img_num1.visible = false;
                                        this._viewUI.img_num0.visible = true;
                                        this._viewUI.img_num0.skin = Path_game_sangong.ui_sangong + "bei_" + val + ".png";
                                        this._viewUI.img_num0.x = 60;
                                    } else {
                                        this._viewUI.img_num1.visible = true;
                                        this._viewUI.img_num1.skin = Path_game_sangong.ui_sangong + "bei_" + Math.floor(val / 10) + ".png";
                                        this._viewUI.img_num1.x = 48;
                                        this._viewUI.img_num0.visible = true;
                                        this._viewUI.img_num0.skin = Path_game_sangong.ui_sangong + "bei_" + val % 10 + ".png";
                                        this._viewUI.img_num0.x = 72;
                                    }
                                    this._viewUI.box_bet.visible = false;
                                } else {
                                    let posIdx = (idx - mainIdx + 5) % 5;
                                    this._viewUI["view_player" + posIdx].box_betnum.visible = true;
                                    if (val < 10) {
                                        this._viewUI["view_player" + posIdx].img_num1.visible = false;
                                        this._viewUI["view_player" + posIdx].img_num0.visible = true;
                                        this._viewUI["view_player" + posIdx].img_num0.skin = Path_game_sangong.ui_sangong + "bei_" + val + ".png";
                                        this._viewUI["view_player" + posIdx].img_num0.x = 60;
                                    } else {
                                        this._viewUI["view_player" + posIdx].img_num1.visible = true;
                                        this._viewUI["view_player" + posIdx].img_num1.skin = Path_game_sangong.ui_sangong + "bei_" + Math.floor(val / 10) + ".png";
                                        this._viewUI["view_player" + posIdx].img_num1.x = 48;
                                        this._viewUI["view_player" + posIdx].img_num0.visible = true;
                                        this._viewUI["view_player" + posIdx].img_num0.skin = Path_game_sangong.ui_sangong + "bei_" + val % 10 + ".png";
                                        this._viewUI["view_player" + posIdx].img_num0.x = 72;
                                    }
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

        //庄家赢钱
        private addBankerWinEff(): void {
            let timeInternal = MONEY_NUM * MONEY_FLY_TIME
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (!this._bankerIdx) return;
            Laya.timer.once(timeInternal, this, () => {
                this.addBankerLoseEff();
                this.addMoneyClip(this._bankerMoneyChange, this._bankerIdx);
                this.updateMoney();
                if (this._moneyChange >= 0) {
                    this._game.uiRoot.general.open(SangongPageDef.PAGE_SG_WIN);
                    let musicType = MathU.randomRange(1, 3);
                    this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.winMusic + musicType + ".mp3", true);
                } else {
                    this._game.uiRoot.general.open(SangongPageDef.PAGE_SG_LOSE);
                    let musicType = MathU.randomRange(1, 4);
                    this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.loseMusic + musicType + ".mp3", true);
                }
            });
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
        public addMoneyFly(fromPos: number, tarPos: number): void {
            if (!this._game.mainScene || !this._game.mainScene.camera) return;
            let fromX = this._game.mainScene.camera.getScenePxByCellX(this._viewUI["view_head" + fromPos].x);
            let fromY = this._game.mainScene.camera.getScenePxByCellY(this._viewUI["view_head" + fromPos].y);
            let tarX = this._game.mainScene.camera.getScenePxByCellX(this._viewUI["view_head" + tarPos].x);
            let tarY = this._game.mainScene.camera.getScenePxByCellY(this._viewUI["view_head" + tarPos].y);
            for (let i: number = 0; i < MONEY_NUM; i++) {
                let posBeginX = MathU.randomRange(fromX + 23, fromX + 70);
                let posBeginY = MathU.randomRange(fromY + 23, fromY + 70);
                let posEndX = MathU.randomRange(tarX + 23, tarX + 65);
                let posEndY = MathU.randomRange(tarY + 23, tarY + 65);
                let moneyImg: LImage = new LImage(PathGameTongyong.ui_tongyong_general + "icon_money.png");
                moneyImg.scale(0.7, 0.7);
                if (!moneyImg.parent) this._viewUI.addChild(moneyImg);
                moneyImg.pos(posBeginX, posBeginY);
                // Laya.Bezier 贝塞尔曲线  取得点
                Laya.Tween.to(moneyImg, { x: posEndX }, i * MONEY_FLY_TIME, null);
                Laya.Tween.to(moneyImg, { y: posEndY }, i * MONEY_FLY_TIME, null, Handler.create(this, () => {
                    moneyImg.removeSelf();
                }));
            }
        }

        //金币变化 飘字clip
        public addMoneyClip(value: number, pos: number): void {
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let valueClip = value >= 0 ? new SangongClip(SangongClip.ADD_MONEY_FONT) : new SangongClip(SangongClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            valueClip.scale(0.8, 0.8);
            valueClip.anchorX = 0.5;
            let moneyStr = EnumToString.getPointBackNum(Math.abs(value), 2);
            valueClip.setText(moneyStr + "", true, false, preSkin);
            let index = (pos - idx + 5) % 5;
            let posX = this._viewUI["view_head" + index].x + 50;
            let posY = this._viewUI["view_head" + index].y + 50;
            let deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
            if (!valueClip.parent) this._viewUI.box_view.addChildAt(valueClip, deep);
            valueClip.pos(posX, posY);
            this._clipList.push(valueClip);
            Laya.Tween.clearAll(valueClip);
            Laya.Tween.to(valueClip, { y: posY - 80 }, 1000);
        }

        //清理飘钱动画
        private clearClip(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy();
                    clip = null;
                }
            }
            this._clipList = [];
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
            this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterXiPai);
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardtype.off(LEvent.CLICK, this, this.onBtnClickWithTween);
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
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

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