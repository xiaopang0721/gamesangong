
module ui.nqp.game_ui.sangong.component {
    export class Effect_chongzhiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":246,"height":94},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Button","props":{"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png"}},{"type":"Box","props":{"y":0,"x":0,"blendMode":"lighter"},"child":[{"type":"Button","props":{"y":0,"x":12,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_chizhizz.png"}},{"type":"Image","props":{"x":79.16666666666666,"skin":"tongyong_ui/game_ui/tongyong/general/tu_czsg.png","renderType":"mask"},"compId":3}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"x":[{"value":-173,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":183,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.component.Effect_chongzhiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong.component {
    export class Effect_qzcgUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":106,"height":144},"child":[{"type":"Box","props":{"width":106,"height":144},"child":[{"type":"Image","props":{"y":72,"x":53,"skin":"tongyong_ui/game_ui/tongyong/qz/k.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8},{"type":"Image","props":{"y":0,"x":101,"skin":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":6},{"type":"Image","props":{"y":72,"x":53,"skin":"tongyong_ui/game_ui/tongyong/qz/ss10000.png","anchorY":0.5,"anchorX":0.5},"compId":9}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10001.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10002.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10003.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10004.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10005.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10006.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10007.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10008.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":28}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":12}]}},{"target":8,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":13}]}},{"target":9,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/qz/ss10000.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10001.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10002.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10003.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10004.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10005.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10006.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":12}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":13}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.component.Effect_qzcgUI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong.component {
    export class Effect_yqUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":106,"height":144},"child":[{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.1199999999999999,"scaleX":1.1199999999999999,"anchorY":0.5,"anchorX":0.5,"alpha":0.5714285714285714},"compId":6},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0.6666666666666666},"compId":7},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8},{"type":"Image","props":{"y":73,"x":52,"skin":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":24}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":14}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":14}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":14}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":20}]}},{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":27}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":27}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":12},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":26}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":32}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":19},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":32}]}},{"target":7,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":38}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":38}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":24},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":38}]}},{"target":8,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":44}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":44}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":36},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":44}]}},{"target":24,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/yq/xx10000.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10001.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10002.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10003.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10004.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10005.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10006.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10007.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10008.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10009.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10010.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10011.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10012.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":28},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10014.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":30},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10015.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":32},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10016.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":34},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10017.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":36},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10018.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":38},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10019.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":41}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.component.Effect_yqUI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong.component {
    export class PaiXingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_bg:Laya.Image;
		public img_type:Laya.Image;
		public img_num:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":160,"height":80},"child":[{"type":"Image","props":{"y":46,"x":80,"width":210,"var":"img_bg","skin":"sangong_ui/game_ui/sangong/brnntype_bgimg_0.png","height":62,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Box","props":{"y":38,"x":88,"width":165,"height":60,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":32,"x":55,"visible":true,"var":"img_type","skin":"sangong_ui/game_ui/sangong/brnntype_normal_12.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":100,"var":"img_num","skin":"sangong_ui/game_ui/sangong/tu_x5.png"}}]},{"type":"Image","props":{"y":37,"x":74,"skin":"sangong_ui/game_ui/sangong/tu_g1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":80,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}]}},{"target":4,"keyframes":{"y":[{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":5}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":5}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":15}]}},{"target":6,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":5}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.component.PaiXingUI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong.component {
    export class TouXiangUI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public text_name:laya.display.Text;
		public text_money:laya.display.Text;
		public img_frame:Laya.Image;
		public img_mask:Laya.Image;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":0,"x":0,"width":99,"height":139},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","centerY":0,"centerX":0}},{"type":"Image","props":{"visible":false,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95,"centerY":0,"centerX":0}},{"type":"Text","props":{"y":8,"x":0,"wordWrap":true,"width":100,"var":"text_name","text":"玩家名字","leading":6,"height":20,"fontSize":17,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":113,"x":0,"wordWrap":true,"width":101,"var":"text_money","text":"0","leading":6,"height":24,"fontSize":18,"color":"#f8ea5e","align":"center"}},{"type":"Image","props":{"width":98,"var":"img_frame","skin":"sangong_ui/game_ui/sangong/tu_djs.png","height":136,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":-3,"x":-3,"width":104,"var":"img_mask","renderType":"mask","height":142}}]},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.component.TouXiangUI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong.component {
    export class WanJia_LUI extends View {
		public img_frame:ui.nqp.game_ui.sangong.component.Ying_2UI;
		public img_banker:Laya.Image;
		public view_type:ui.nqp.game_ui.sangong.component.PaiXingUI;
		public box_betnum:Laya.Box;
		public img_num1:Laya.Image;
		public img_num0:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":94,"var":"img_frame","runtime":"ui.nqp.game_ui.sangong.component.Ying_2UI"}},{"type":"Image","props":{"y":28,"x":138,"var":"img_banker","skin":"sangong_ui/game_ui/sangong/qiang_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"PaiXing","props":{"y":135,"x":189,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.sangong.component.PaiXingUI"}},{"type":"Box","props":{"y":26,"x":191,"width":119,"var":"box_betnum","height":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":58.5,"skin":"sangong_ui/game_ui/sangong/tu_bei.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":48,"var":"img_num1","skin":"sangong_ui/game_ui/sangong/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":72,"var":"img_num0","skin":"sangong_ui/game_ui/sangong/bei_0.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.sangong.component.Ying_2UI",ui.nqp.game_ui.sangong.component.Ying_2UI);
			View.regComponent("ui.nqp.game_ui.sangong.component.PaiXingUI",ui.nqp.game_ui.sangong.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.component.WanJia_LUI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong.component {
    export class WanJia_RUI extends View {
		public img_frame:ui.nqp.game_ui.sangong.component.Ying_2UI;
		public img_banker:Laya.Image;
		public view_type:ui.nqp.game_ui.sangong.component.PaiXingUI;
		public box_betnum:Laya.Box;
		public img_num1:Laya.Image;
		public img_num0:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":87,"var":"img_frame","runtime":"ui.nqp.game_ui.sangong.component.Ying_2UI"}},{"type":"Image","props":{"y":28,"x":233,"var":"img_banker","skin":"sangong_ui/game_ui/sangong/qiang_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"PaiXing","props":{"y":137,"x":181,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.sangong.component.PaiXingUI"}},{"type":"Box","props":{"y":26,"x":185,"width":119,"var":"box_betnum","height":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":58.5,"skin":"sangong_ui/game_ui/sangong/tu_bei.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":48,"var":"img_num1","skin":"sangong_ui/game_ui/sangong/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":72,"var":"img_num0","skin":"sangong_ui/game_ui/sangong/bei_0.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.sangong.component.Ying_2UI",ui.nqp.game_ui.sangong.component.Ying_2UI);
			View.regComponent("ui.nqp.game_ui.sangong.component.PaiXingUI",ui.nqp.game_ui.sangong.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.component.WanJia_RUI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_win:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"var":"img_win","skin":"sangong_ui/game_ui/sangong/tu_ying2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":45}],"scaleY":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":30}],"scaleX":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.component.YingUI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong.component {
    export class Ying_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":400,"height":300},"child":[{"type":"Image","props":{"y":194,"x":197,"skin":"sangong_ui/game_ui/sangong/tu_ying.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":70,"x":196,"skin":"sangong_ui/game_ui/sangong/tu_ying1.png","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":65,"x":197,"skin":"sangong_ui/game_ui/sangong/effect/yanhua/10001.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}},{"target":4,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":5}],"skin":[{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10001.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":0},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10002.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":6},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10003.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":7},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10004.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":8},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10005.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":9},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10006.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":10},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10007.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":11},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10008.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":12},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10009.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":13},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10010.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":14},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10011.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":15},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10012.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":16},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10013.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":17},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10014.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":18},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10015.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":19},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10016.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":20},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10017.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":21},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10018.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":22},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10019.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":23},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10020.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":24},{"value":"sangong_ui/game_ui/sangong/effect/yanhua/10021.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":25}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.component.Ying_1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong.component {
    export class Ying_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":190,"height":138},"child":[{"type":"Image","props":{"width":190,"skin":"sangong_ui/game_ui/sangong/tu_ying.png","sizeGrid":"30,30,30,30","height":138,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":10,"width":190,"skin":"sangong_ui/game_ui/sangong/tu_ying.png","sizeGrid":"30,30,30,30","height":138,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"label":null,"key":"scaleY","index":10}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"label":null,"key":"scaleX","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}},{"target":3,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.component.Ying_2UI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong {
    export class JieSuan_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":330,"x":640,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_1.png","scaleY":1,"scaleX":1,"centerY":-30,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":8},{"type":"Image","props":{"y":-105.5,"x":-320,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-50,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":4},{"type":"Image","props":{"y":-105.5,"x":-320,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl.png","centerY":-40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":348,"x":626,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":6}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":7}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":7}]}},{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":5},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":5},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":5}]}},{"target":6,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":10}]}},{"target":8,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.JieSuan_1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong {
    export class JieSuan_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":330,"x":640,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_1.png","scaleY":1,"scaleX":1,"gray":true,"centerY":-30,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":8},{"type":"Image","props":{"y":-105.5,"x":-320,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sb2.png","centerY":-50,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":4},{"type":"Image","props":{"y":-105.5,"x":-320,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sb.png","centerY":-40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":348,"x":626,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","gray":true,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":6}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":7}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":7}]}},{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":5},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":5},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":5}]}},{"target":6,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":10}]}},{"target":8,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.JieSuan_2UI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong {
    export class SanGongUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_view:Laya.Box;
		public view_paixie:ui.nqp.game_ui.tongyong.PaiXeiUI;
		public text_info:laya.display.Text;
		public text_roomtype:laya.display.Text;
		public view_head0:ui.nqp.game_ui.sangong.component.TouXiangUI;
		public view_head1:ui.nqp.game_ui.sangong.component.TouXiangUI;
		public view_head2:ui.nqp.game_ui.sangong.component.TouXiangUI;
		public view_head3:ui.nqp.game_ui.sangong.component.TouXiangUI;
		public view_head4:ui.nqp.game_ui.sangong.component.TouXiangUI;
		public view_banker1:ui.nqp.game_ui.tongyong.effect.ZhuangRUI;
		public view_banker0:ui.nqp.game_ui.tongyong.effect.ZhuangLUI;
		public view_player3:ui.nqp.game_ui.sangong.component.WanJia_LUI;
		public view_player4:ui.nqp.game_ui.sangong.component.WanJia_LUI;
		public view_player1:ui.nqp.game_ui.sangong.component.WanJia_RUI;
		public view_player2:ui.nqp.game_ui.sangong.component.WanJia_RUI;
		public btn_show:Laya.Button;
		public box_bet:Laya.Box;
		public btn_bet1:Laya.Button;
		public clip_bei1:Laya.Clip;
		public btn_bet2:Laya.Button;
		public clip_bei2:Laya.Clip;
		public btn_bet3:Laya.Button;
		public clip_bei3:Laya.Clip;
		public btn_bet4:Laya.Button;
		public clip_bei4:Laya.Clip;
		public btn_bet5:Laya.Button;
		public clip_bei5:Laya.Clip;
		public box_banker:Laya.Box;
		public btn_qiang:Laya.Button;
		public btn_buqiang:Laya.Button;
		public img_qiang:Laya.Image;
		public view_type:ui.nqp.game_ui.sangong.component.PaiXingUI;
		public img_time:ui.nqp.game_ui.tongyong.DaoJiShiUI;
		public view_xipai:ui.nqp.game_ui.tongyong.effect.XiPaiUI;
		public btn_continue:Laya.Button;
		public view_banker2:ui.nqp.game_ui.tongyong.effect.ZhuangRUI;
		public view_banker3:ui.nqp.game_ui.tongyong.effect.ZhuangLUI;
		public view_banker4:ui.nqp.game_ui.tongyong.effect.ZhuangLUI;
		public view_fapai:ui.nqp.game_ui.tongyong.FaPaiUI;
		public box_betnum:Laya.Box;
		public img_num1:Laya.Image;
		public img_num0:Laya.Image;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_cardtype:Laya.Button;
		public btn_set:Laya.Button;
		public btn_record:Laya.Button;
		public btn_back:Laya.Button;
		public btn_menu:Laya.Button;
		public btn_qifu:Laya.Button;
		public btn_chongzhi:ui.nqp.game_ui.sangong.component.Effect_chongzhiUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":186,"x":640,"width":174,"height":204,"centerX":0,"anchorY":1,"anchorX":0.5},"child":[{"type":"SkeletonPlayer","props":{"y":126,"x":88,"url":"tongyong_ui/game_ui/tongyong/sk/HeGuan.sk"}}]},{"type":"PaiXei","props":{"y":111,"x":798,"var":"view_paixie","runtime":"ui.nqp.game_ui.tongyong.PaiXeiUI"}},{"type":"Text","props":{"y":23,"x":87,"width":333,"var":"text_info","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"Text","props":{"y":48,"x":87,"width":212,"var":"text_roomtype","text":"试玩场：底注：1","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"TouXiang","props":{"y":569,"var":"view_head0","centerX":-240,"runtime":"ui.nqp.game_ui.sangong.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":340,"var":"view_head1","right":20,"runtime":"ui.nqp.game_ui.sangong.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":151,"var":"view_head2","right":20,"runtime":"ui.nqp.game_ui.sangong.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":151,"x":18,"var":"view_head3","runtime":"ui.nqp.game_ui.sangong.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":340,"x":18,"var":"view_head4","runtime":"ui.nqp.game_ui.sangong.component.TouXiangUI"}},{"type":"ZhuangR","props":{"y":337,"x":1156,"var":"view_banker1","runtime":"ui.nqp.game_ui.tongyong.effect.ZhuangRUI"}},{"type":"ZhuangL","props":{"y":568,"x":350,"var":"view_banker0","runtime":"ui.nqp.game_ui.tongyong.effect.ZhuangLUI"}},{"type":"WanJia_L","props":{"y":121,"x":17,"var":"view_player3","runtime":"ui.nqp.game_ui.sangong.component.WanJia_LUI"}},{"type":"WanJia_L","props":{"y":309,"x":17,"var":"view_player4","runtime":"ui.nqp.game_ui.sangong.component.WanJia_LUI"}},{"type":"WanJia_R","props":{"y":309,"var":"view_player1","right":25,"runtime":"ui.nqp.game_ui.sangong.component.WanJia_RUI"}},{"type":"WanJia_R","props":{"y":121,"var":"view_player2","right":25,"runtime":"ui.nqp.game_ui.sangong.component.WanJia_RUI"}},{"type":"Button","props":{"y":628,"var":"btn_show","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","centerX":269,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":57,"skin":"sangong_ui/game_ui/sangong/tu_tp.png"}}]},{"type":"Box","props":{"y":516,"width":877,"var":"box_bet","height":59,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_bet1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff","disabled":false},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":8,"x":50,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei1","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":178,"var":"btn_bet2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":8,"x":50,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei2","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":355,"var":"btn_bet3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":8,"x":50,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei3","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":533,"var":"btn_bet4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":8,"x":50,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei4","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":710,"var":"btn_bet5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":13,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":8,"x":50,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei5","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]}]},{"type":"Box","props":{"y":628,"x":910,"width":172,"var":"box_banker","height":128,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":96,"var":"btn_qiang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":57,"skin":"sangong_ui/game_ui/sangong/tu_qz.png"}}]},{"type":"Button","props":{"y":30,"var":"btn_buqiang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","labelStrokeColor":"#007500","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":57,"skin":"sangong_ui/game_ui/sangong/tu_bq.png"}}]}]},{"type":"Image","props":{"y":547,"x":398,"var":"img_qiang","skin":"sangong_ui/game_ui/sangong/qiang_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"PaiXing","props":{"y":671,"x":635,"width":160,"var":"view_type","height":80,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.sangong.component.PaiXingUI"}},{"type":"DaoJiShi","props":{"y":239,"x":638,"var":"img_time","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Box","props":{"width":687,"visible":false,"height":43,"centerY":-50,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":20.5,"x":319.5,"skin":"sangong_ui/game_ui/sangong/tu_h.png","centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Text","props":{"y":6,"x":178,"wordWrap":true,"width":336,"text":"正在进入房间","strokeColor":"#00ffc1","leading":6,"height":26,"fontSize":26,"color":"#dadada","align":"center"}}]},{"type":"XiPai","props":{"y":290,"x":640,"var":"view_xipai","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.tongyong.effect.XiPaiUI"}},{"type":"Button","props":{"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","height":75,"centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":57,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png"}}]},{"type":"ZhuangR","props":{"y":147,"x":1156,"var":"view_banker2","runtime":"ui.nqp.game_ui.tongyong.effect.ZhuangRUI"}},{"type":"ZhuangL","props":{"y":151,"x":18,"var":"view_banker3","runtime":"ui.nqp.game_ui.tongyong.effect.ZhuangLUI"}},{"type":"ZhuangL","props":{"y":338,"x":17,"var":"view_banker4","runtime":"ui.nqp.game_ui.tongyong.effect.ZhuangLUI"}},{"type":"FaPai","props":{"y":163,"x":783,"var":"view_fapai","runtime":"ui.nqp.game_ui.tongyong.FaPaiUI"}},{"type":"Box","props":{"y":516,"x":630,"width":119,"var":"box_betnum","height":39,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":58.5,"skin":"sangong_ui/game_ui/sangong/tu_bei.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":49.5,"var":"img_num1","skin":"sangong_ui/game_ui/sangong/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":20,"x":72,"var":"img_num0","skin":"sangong_ui/game_ui/sangong/bei_0.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Image","props":{"width":180,"var":"img_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":293,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":75,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":147,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":218,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":86,"x":14,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":16,"x":14,"var":"btn_cardtype","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_px.png"}},{"type":"Button","props":{"y":227,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":157,"x":14,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"var":"btn_back","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_menu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":172,"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":90,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_chongzhi","props":{"var":"btn_chongzhi","right":10,"bottom":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.sangong.component.Effect_chongzhiUI"}}],"animations":[{"nodes":[{"target":105,"keyframes":{"y":[{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":0},{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":1}],"skin":[{"value":"ui/game_ui/shangong/effect/btn/00001.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":0},{"value":"ui/game_ui/shangong/effect/btn/00002.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":1},{"value":"ui/game_ui/shangong/effect/btn/00003.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":2},{"value":"ui/game_ui/shangong/effect/btn/00004.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":3},{"value":"ui/game_ui/shangong/effect/btn/00005.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":4},{"value":"ui/game_ui/shangong/effect/btn/00006.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":5},{"value":"ui/game_ui/shangong/effect/btn/00007.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":6},{"value":"ui/game_ui/shangong/effect/btn/00008.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":7},{"value":"ui/game_ui/shangong/effect/btn/00009.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":8},{"value":"ui/game_ui/shangong/effect/btn/00010.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":9}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);
			View.regComponent("ui.nqp.game_ui.sangong.component.Effect_chongzhiUI",ui.nqp.game_ui.sangong.component.Effect_chongzhiUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.nqp.game_ui.sangong.component.TouXiangUI",ui.nqp.game_ui.sangong.component.TouXiangUI);
			View.regComponent("ui.nqp.game_ui.tongyong.effect.ZhuangRUI",ui.nqp.game_ui.tongyong.effect.ZhuangRUI);
			View.regComponent("ui.nqp.game_ui.tongyong.effect.ZhuangLUI",ui.nqp.game_ui.tongyong.effect.ZhuangLUI);
			View.regComponent("ui.nqp.game_ui.tongyong.PaiXeiUI",ui.nqp.game_ui.tongyong.PaiXeiUI);
			View.regComponent("ui.nqp.game_ui.sangong.component.WanJia_RUI",ui.nqp.game_ui.sangong.component.WanJia_RUI);
			View.regComponent("ui.nqp.game_ui.sangong.component.PaiXingUI",ui.nqp.game_ui.sangong.component.PaiXingUI);
			View.regComponent("ui.nqp.game_ui.tongyong.DaoJiShiUI",ui.nqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("ui.nqp.game_ui.tongyong.effect.XiPaiUI",ui.nqp.game_ui.tongyong.effect.XiPaiUI);
			View.regComponent("ui.nqp.game_ui.tongyong.FaPaiUI",ui.nqp.game_ui.tongyong.FaPaiUI);
			View.regComponent("ui.nqp.game_ui.sangong.component.WanJia_LUI",ui.nqp.game_ui.sangong.component.WanJia_LUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.SanGongUI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong {
    export class SanGong_GuiZeUI extends View {
		public btn_tab:Laya.Tab;
		public panel_rule:Laya.Panel;
		public lab_wanfa:Laya.Image;
		public lab_type:Laya.Image;
		public lab_daxiao:Laya.Image;
		public lab_jiesuan:Laya.Image;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-32,"x":-64,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk2.png"}},{"type":"Image","props":{"y":29,"x":387,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":52,"x":-23,"width":199,"var":"btn_tab","height":478},"child":[{"type":"Button","props":{"y":16,"x":-2,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":94,"x":-2,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxsm.png","name":"item1"}},{"type":"Button","props":{"y":172,"x":-2,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxdx.png","name":"item2"}},{"type":"Button","props":{"y":250,"x":-2,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxbs.png","name":"item3"}}]},{"type":"Panel","props":{"y":74,"x":175,"width":610,"var":"panel_rule","height":442},"child":[{"type":"Image","props":{"y":5,"x":12,"var":"lab_wanfa","skin":"sangong_ui/game_ui/sangong/guize_1.png"}}]},{"type":"Image","props":{"y":87,"x":201,"var":"lab_type","skin":"sangong_ui/game_ui/sangong/guize_2.png"}},{"type":"Image","props":{"y":88,"x":199,"var":"lab_daxiao","skin":"sangong_ui/game_ui/sangong/guize_3.png"}},{"type":"Image","props":{"y":84,"x":199,"var":"lab_jiesuan","skin":"sangong_ui/game_ui/sangong/guize_4.png"}},{"type":"Button","props":{"y":-22,"x":750,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_tuichu.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.SanGong_GuiZeUI.uiView);
        }
    }
}

module ui.nqp.game_ui.sangong {
    export class SanGong_HUDUI extends View {
		public view_hud:ui.nqp.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public img_room0:Laya.Box;
		public txt_least0:Laya.Clip;
		public txt_difen0:Laya.Clip;
		public img_room1:Laya.Box;
		public txt_difen1:Laya.Clip;
		public txt_least1:Laya.Clip;
		public img_room2:Laya.Box;
		public txt_least2:Laya.Clip;
		public txt_difen2:Laya.Clip;
		public img_room3:Laya.Box;
		public txt_least3:Laya.Clip;
		public txt_difen3:Laya.Clip;
		public btn_join:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"sangong_ui/game_ui/sangong/tu_zjh.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.nqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"top":10,"skin":"sangong_ui/game_ui/sangong/zjh_title.png","scaleY":1,"scaleX":1,"centerX":200,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":1280,"var":"box_right","height":465,"centerY":-3,"centerX":2,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":78,"width":274,"var":"img_room0","right":980,"height":327},"child":[{"type":"SkeletonPlayer","props":{"y":163,"x":136,"url":"sangong_ui/game_ui/sangong/sk/sg_0.sk"}},{"type":"Clip","props":{"y":295,"x":136,"width":15,"var":"txt_least0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","height":18,"clipX":10}},{"type":"Clip","props":{"y":261,"x":139,"var":"txt_difen0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","clipX":10}},{"type":"Image","props":{"y":257,"x":79,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df1.png"}},{"type":"Image","props":{"y":293,"x":87,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr1.png"}}]},{"type":"Box","props":{"y":76,"width":274,"var":"img_room1","right":665,"height":329},"child":[{"type":"SkeletonPlayer","props":{"y":165,"x":137,"url":"sangong_ui/game_ui/sangong/sk/sg_1.sk"}},{"type":"Clip","props":{"y":263,"x":140,"var":"txt_difen1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","clipX":10}},{"type":"Clip","props":{"y":297,"x":135,"width":15,"var":"txt_least1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","height":18,"clipX":10}},{"type":"Image","props":{"y":260,"x":79,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df2.png"}},{"type":"Image","props":{"y":295,"x":88,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr2.png"}}]},{"type":"Box","props":{"y":53,"width":276,"var":"img_room2","right":350,"height":352},"child":[{"type":"SkeletonPlayer","props":{"y":187,"x":138,"url":"sangong_ui/game_ui/sangong/sk/sg_2.sk"}},{"type":"Clip","props":{"y":318,"x":136,"width":15,"var":"txt_least2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","height":18,"clipX":10}},{"type":"Clip","props":{"y":284,"x":139,"var":"txt_difen2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","clipX":10}},{"type":"Image","props":{"y":281,"x":79,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df3.png"}},{"type":"Image","props":{"y":316,"x":88,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr3.png"}}]},{"type":"Box","props":{"y":58,"width":276,"var":"img_room3","right":30,"height":347},"child":[{"type":"SkeletonPlayer","props":{"y":183,"x":138,"url":"sangong_ui/game_ui/sangong/sk/sg_3.sk"}},{"type":"Clip","props":{"y":313,"x":136,"width":15,"var":"txt_least3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","height":18,"clipX":10}},{"type":"Clip","props":{"y":279,"x":139,"var":"txt_difen3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","clipX":10}},{"type":"Image","props":{"y":276,"x":79,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df4.png"}},{"type":"Image","props":{"y":311,"x":88,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr4.png"}}]}]},{"type":"Button","props":{"y":668,"x":640,"var":"btn_join","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.HudUI",ui.nqp.game_ui.tongyong.HudUI);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.nqp.game_ui.sangong.SanGong_HUDUI.uiView);
        }
    }
}
