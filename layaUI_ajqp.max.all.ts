
module ui.ajqp.game_ui.sangong.component {
    export class Effect_yqpUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_qiang:Laya.Box;
		public box_buqiang:Laya.Box;
		public box_bet:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":67,"x":87,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":1,"anchorX":0.9},"compId":4,"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sangong_ui/game_ui/sangong/effect/qp/tu_cz.png"}},{"type":"Box","props":{"y":32,"x":49,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":14,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_1.png"}}]},{"type":"Box","props":{"y":33,"x":46,"width":59,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":0,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":33,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":53,"skin":"sangong_ui/game_ui/sangong/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":37,"skin":"sangong_ui/game_ui/sangong/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":17,"x":16,"skin":"sangong_ui/game_ui/sangong/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":58,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_b.png"}}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":61,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":46,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":39,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.component.Effect_yqpUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong.component {
    export class Effect_zqpUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_qiang:Laya.Box;
		public box_buqiang:Laya.Box;
		public box_bet:Laya.Box;
		public img_betRate:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":67,"x":19,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":1,"anchorX":0.2},"compId":4,"child":[{"type":"Image","props":{"skin":"sangong_ui/game_ui/sangong/effect/qp/tu_cz.png","scaleX":-1,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":34,"x":49,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":17,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_1.png"}}]},{"type":"Box","props":{"y":35,"x":51,"width":59,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":-3,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":35,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":53,"var":"img_betRate","skin":"sangong_ui/game_ui/sangong/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":37,"skin":"sangong_ui/game_ui/sangong/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":17,"x":16,"skin":"sangong_ui/game_ui/sangong/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":58,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_b.png"}}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":61,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":46,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":39,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.component.Effect_zqpUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong.component {
    export class PaiXingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_bg:Laya.Image;
		public img_type:Laya.Image;
		public img_num:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":160,"height":80},"child":[{"type":"Image","props":{"y":46,"x":80,"width":210,"var":"img_bg","skin":"sangong_ui/game_ui/sangong/brnntype_bgimg_0.png","height":62,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Box","props":{"y":38,"x":88,"width":165,"height":60,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":32,"x":55,"visible":true,"var":"img_type","skin":"sangong_ui/game_ui/sangong/brnntype_normal_12.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":100,"var":"img_num","skin":"sangong_ui/game_ui/sangong/tu_x5.png"}}]},{"type":"Image","props":{"y":37,"x":74,"skin":"sangong_ui/game_ui/sangong/tu_g1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":-7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":80,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":3}]}},{"target":4,"keyframes":{"y":[{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":5}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":5}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":10}]}},{"target":6,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":5}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":11}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":11}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.component.PaiXingUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong.component {
    export class WanJia_LUI extends View {
		public img_frame:ui.ajqp.game_ui.sangong.component.Ying_2UI;
		public img_banker:Laya.Image;
		public view_type:ui.ajqp.game_ui.sangong.component.PaiXingUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":94,"var":"img_frame","runtime":"ui.ajqp.game_ui.sangong.component.Ying_2UI"}},{"type":"Image","props":{"y":28,"x":138,"var":"img_banker","skin":"sangong_ui/game_ui/sangong/qiang_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"PaiXing","props":{"y":135,"x":189,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.sangong.component.PaiXingUI"}},{"type":"Effect_zqp","props":{"y":34,"x":276,"runtime":"ui.ajqp.game_ui.sangong.component.Effect_zqpUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.sangong.component.Ying_2UI",ui.ajqp.game_ui.sangong.component.Ying_2UI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.PaiXingUI",ui.ajqp.game_ui.sangong.component.PaiXingUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.Effect_zqpUI",ui.ajqp.game_ui.sangong.component.Effect_zqpUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.component.WanJia_LUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong.component {
    export class WanJia_RUI extends View {
		public img_frame:ui.ajqp.game_ui.sangong.component.Ying_2UI;
		public img_banker:Laya.Image;
		public view_type:ui.ajqp.game_ui.sangong.component.PaiXingUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":87,"var":"img_frame","runtime":"ui.ajqp.game_ui.sangong.component.Ying_2UI"}},{"type":"Image","props":{"y":28,"x":233,"var":"img_banker","skin":"sangong_ui/game_ui/sangong/qiang_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"PaiXing","props":{"y":137,"x":181,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.sangong.component.PaiXingUI"}},{"type":"Effect_yqp","props":{"y":28,"x":-3,"runtime":"ui.ajqp.game_ui.sangong.component.Effect_yqpUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.sangong.component.Ying_2UI",ui.ajqp.game_ui.sangong.component.Ying_2UI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.PaiXingUI",ui.ajqp.game_ui.sangong.component.PaiXingUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.Effect_yqpUI",ui.ajqp.game_ui.sangong.component.Effect_yqpUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.component.WanJia_RUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_win:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"x":60,"var":"img_win","skin":"sangong_ui/game_ui/sangong/tu_ying2.png","scaleY":1,"scaleX":1,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":70,"skin":"sangong_ui/game_ui/sangong/tu_ying2.png","scaleY":1,"scaleX":1,"centerY":0,"centerX":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":7}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":7}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":11}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":11}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":3,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":12}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.component.YingUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong.component {
    export class Ying_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":434,"height":465},"child":[{"type":"Image","props":{"y":198,"x":206,"width":434,"skin":"sangong_ui/game_ui/sangong/effect/nyl/tu_guang.png","scaleY":1,"scaleX":0.9,"rotation":0,"pivotY":186,"pivotX":215,"height":373,"alpha":0},"compId":8},{"type":"Image","props":{"y":193,"x":217,"skin":"sangong_ui/game_ui/sangong/effect/nyl/tu_hg.png","scaleY":0,"scaleX":0,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":203,"x":221,"skin":"sangong_ui/game_ui/sangong/effect/nyl/tu_kuang.png","scaleY":1,"scaleX":0,"anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":204,"x":218,"skin":"sangong_ui/game_ui/sangong/effect/nyl/tu_nyl.png","scaleY":0,"scaleX":0,"anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":194,"x":218,"skin":"sangong_ui/game_ui/sangong/effect/nyl/tu_nylh.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":20},{"type":"Image","props":{"y":349,"x":221,"skin":"sangong_ui/game_ui/sangong/effect/nyl/tu_ying01.png","scaleY":1,"scaleX":1.05,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":14}],"animations":[{"nodes":[{"target":5,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10}]}},{"target":8,"keyframes":{"y":[{"value":198,"tweenMethod":"linearNone","tween":false,"target":8,"key":"y","index":0},{"value":202,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":4}],"x":[{"value":206,"tweenMethod":"linearNone","tween":false,"target":8,"key":"x","index":0},{"value":217,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":4}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":4},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":0.9,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":7},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":60}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":10}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":6},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":16}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":16}]}},{"target":7,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":12}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":12}]}},{"target":14,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":1}]}},{"target":20,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":10},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":28}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":10},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":28}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":28}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.component.Ying_1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong.component {
    export class Ying_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":190,"height":138},"child":[{"type":"Image","props":{"y":59,"x":95,"skin":"sangong_ui/game_ui/sangong/effect/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","scaleY":0.74,"scaleX":0.52,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":59,"x":95,"skin":"sangong_ui/game_ui/sangong/effect/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","scaleY":0.74,"scaleX":0.52,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":4},{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":6}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.65,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":4},{"value":0.54,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":6}]}},{"target":3,"keyframes":{"scaleY":[{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.85,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.72,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.component.Ying_2UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong {
    export class SanGongUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_view:Laya.Box;
		public view_paixie:ui.ajqp.game_ui.tongyong.PaiXeiUI;
		public text_info:laya.display.Text;
		public text_roomtype:laya.display.Text;
		public view_head0:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_head1:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_head2:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_head3:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_head4:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_player3:ui.ajqp.game_ui.sangong.component.WanJia_LUI;
		public view_player4:ui.ajqp.game_ui.sangong.component.WanJia_LUI;
		public view_player1:ui.ajqp.game_ui.sangong.component.WanJia_RUI;
		public view_player2:ui.ajqp.game_ui.sangong.component.WanJia_RUI;
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
		public view_type:ui.ajqp.game_ui.sangong.component.PaiXingUI;
		public img_time:ui.ajqp.game_ui.tongyong.DaoJiShiUI;
		public view_xipai:ui.ajqp.game_ui.tongyong.effect.XiPaiUI;
		public btn_continue:Laya.Button;
		public btn_chongzhi:ui.ajqp.game_ui.tongyong.effect.ChongzhiUI;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_set:Laya.Button;
		public btn_record:Laya.Button;
		public btn_back:Laya.Button;
		public btn_menu:Laya.Button;
		public btn_qifu:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":186,"x":640,"width":174,"height":204,"centerX":0,"anchorY":1,"anchorX":0.5},"child":[{"type":"SkeletonPlayer","props":{"y":206,"x":82,"url":"tongyong_ui/game_ui/tongyong/sk/HeGuan.sk"}}]},{"type":"PaiXei","props":{"y":111,"x":798,"var":"view_paixie","runtime":"ui.ajqp.game_ui.tongyong.PaiXeiUI"}},{"type":"Image","props":{"y":0,"x":106,"width":336,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pjhd.png","sizeGrid":"0,10,0,10","height":39}},{"type":"Text","props":{"y":7,"x":109,"width":330,"var":"text_info","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"Text","props":{"y":391,"x":544,"width":212,"var":"text_roomtype","text":"底注：1","leading":6,"height":25,"fontSize":20,"color":"#dadada","align":"center"}},{"type":"TouXiangqz","props":{"y":569,"var":"view_head0","centerX":-240,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":340,"var":"view_head1","right":20,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":151,"var":"view_head2","right":20,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":151,"x":18,"var":"view_head3","runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":340,"x":18,"var":"view_head4","runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"WanJia_L","props":{"y":121,"x":17,"var":"view_player3","runtime":"ui.ajqp.game_ui.sangong.component.WanJia_LUI"}},{"type":"WanJia_L","props":{"y":309,"x":17,"var":"view_player4","runtime":"ui.ajqp.game_ui.sangong.component.WanJia_LUI"}},{"type":"WanJia_R","props":{"y":309,"var":"view_player1","right":25,"runtime":"ui.ajqp.game_ui.sangong.component.WanJia_RUI"}},{"type":"WanJia_R","props":{"y":121,"var":"view_player2","right":25,"runtime":"ui.ajqp.game_ui.sangong.component.WanJia_RUI"}},{"type":"Button","props":{"y":682,"var":"btn_show","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","centerX":269,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":64,"skin":"sangong_ui/game_ui/sangong/tu_tp.png"}}]},{"type":"Box","props":{"y":516,"width":877,"var":"box_bet","height":59,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"var":"btn_bet1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","left":0,"labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff","disabled":false},"child":[{"type":"Image","props":{"y":19,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":14,"x":50,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei1","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"var":"btn_bet2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","left":175,"labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":19,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":14,"x":50,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei2","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"var":"btn_bet3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","left":350,"labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":19,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":14,"x":50,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei3","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"var":"btn_bet4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","left":525,"labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":19,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":14,"x":50,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei4","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"var":"btn_bet5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","left":700,"labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":19,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":14,"x":50,"width":32,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei5","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]}]},{"type":"Box","props":{"y":628,"x":910,"width":172,"var":"box_banker","height":128,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":118,"var":"btn_qiang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":57,"skin":"sangong_ui/game_ui/sangong/tu_qz.png"}}]},{"type":"Button","props":{"y":42,"var":"btn_buqiang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","labelStrokeColor":"#007500","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":57,"skin":"sangong_ui/game_ui/sangong/tu_bq.png"}}]}]},{"type":"PaiXing","props":{"y":671,"x":635,"width":160,"var":"view_type","height":80,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.sangong.component.PaiXingUI"}},{"type":"DaoJiShi","props":{"y":239,"x":638,"var":"img_time","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Box","props":{"width":687,"visible":false,"height":43,"centerY":-50,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":20.5,"x":319.5,"skin":"sangong_ui/game_ui/sangong/tu_h.png","centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Text","props":{"y":6,"x":178,"wordWrap":true,"width":336,"text":"正在进入房间","strokeColor":"#00ffc1","leading":6,"height":26,"fontSize":26,"color":"#dadada","align":"center"}}]},{"type":"XiPai","props":{"y":290,"x":640,"var":"view_xipai","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.XiPaiUI"}},{"type":"Button","props":{"y":684,"x":640,"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":57,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png"}}]},{"type":"Chongzhi","props":{"y":652,"x":1209,"var":"btn_chongzhi","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.ChongzhiUI"}},{"type":"Image","props":{"y":220,"x":66,"var":"img_menu","top":87,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":93,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":174,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":25,"x":34,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":185,"x":33,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":105,"x":33,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"y":54,"x":1217,"var":"btn_back","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":54,"x":63,"var":"btn_menu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":25,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":50,"x":1118,"var":"btn_qifu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","anchorY":0.5,"anchorX":0.5}},{"type":"Effect_zqp","props":{"y":552,"x":791,"runtime":"ui.ajqp.game_ui.sangong.component.Effect_zqpUI"}},{"type":"Effect_skz","props":{"y":488,"x":23,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_skz","props":{"y":299,"x":22,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_skz","props":{"y":300,"x":1163,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_skz","props":{"y":492,"x":1162,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}}]},{"type":"Effect_kaishiyouxi","props":{"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_kaishiyouxiUI"}},{"type":"Effect_nyl","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_nylUI"}},{"type":"Effect_zjtp","props":{"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_zjtpUI"}},{"type":"Effect_zjts","props":{"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_zjtsUI"}}],"animations":[{"nodes":[{"target":105,"keyframes":{"y":[{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":0},{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":1}],"skin":[{"value":"ui/game_ui/shangong/effect/btn/00001.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":0},{"value":"ui/game_ui/shangong/effect/btn/00002.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":1},{"value":"ui/game_ui/shangong/effect/btn/00003.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":2},{"value":"ui/game_ui/shangong/effect/btn/00004.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":3},{"value":"ui/game_ui/shangong/effect/btn/00005.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":4},{"value":"ui/game_ui/shangong/effect/btn/00006.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":5},{"value":"ui/game_ui/shangong/effect/btn/00007.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":6},{"value":"ui/game_ui/shangong/effect/btn/00008.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":7},{"value":"ui/game_ui/shangong/effect/btn/00009.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":8},{"value":"ui/game_ui/shangong/effect/btn/00010.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":9}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_zjtsUI",ui.ajqp.game_ui.tongyong.effect.Effect_zjtsUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiangqzUI",ui.ajqp.game_ui.tongyong.TouXiangqzUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.WanJia_LUI",ui.ajqp.game_ui.sangong.component.WanJia_LUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.WanJia_RUI",ui.ajqp.game_ui.sangong.component.WanJia_RUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.PaiXingUI",ui.ajqp.game_ui.sangong.component.PaiXingUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.DaoJiShiUI",ui.ajqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.PaiXeiUI",ui.ajqp.game_ui.tongyong.PaiXeiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ChongzhiUI",ui.ajqp.game_ui.tongyong.effect.ChongzhiUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.Effect_zqpUI",ui.ajqp.game_ui.sangong.component.Effect_zqpUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_skzUI",ui.ajqp.game_ui.tongyong.effect.Effect_skzUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_kaishiyouxiUI",ui.ajqp.game_ui.tongyong.effect.Effect_kaishiyouxiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_nylUI",ui.ajqp.game_ui.tongyong.effect.Effect_nylUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_zjtpUI",ui.ajqp.game_ui.tongyong.effect.Effect_zjtpUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.XiPaiUI",ui.ajqp.game_ui.tongyong.effect.XiPaiUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.SanGongUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong {
    export class SanGong_GuiZeUI extends View {
		public btn_tab:Laya.Tab;
		public panel_rule:Laya.Panel;
		public lab_wanfa:Laya.Image;
		public lab_type:Laya.Image;
		public lab_jiesuan:Laya.Image;
		public lab_daxiao:Laya.Panel;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"ZhongKuang","props":{"y":0,"x":0,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI"}},{"type":"Box","props":{"y":110,"x":232,"width":816,"height":504,"centerX":0},"child":[{"type":"Image","props":{"y":29,"x":408,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":54,"x":0,"width":168,"var":"btn_tab","height":336},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":84,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxsm.png","name":"item1"}},{"type":"Button","props":{"y":168,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxdx.png","name":"item2"}},{"type":"Button","props":{"y":252,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxbs.png","name":"item3"}}]},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_rule","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"lab_wanfa","skin":"sangong_ui/game_ui/sangong/guize_1.png"}}]},{"type":"Image","props":{"y":54,"x":170,"var":"lab_type","skin":"sangong_ui/game_ui/sangong/guize_2.png"}},{"type":"Image","props":{"y":54,"x":170,"var":"lab_jiesuan","skin":"sangong_ui/game_ui/sangong/guize_4.png"}},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"lab_daxiao","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sangong_ui/game_ui/sangong/guize_3.png"}}]}]},{"type":"Button","props":{"y":122,"x":1035,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI",ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.SanGong_GuiZeUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong {
    export class SanGong_HUDUI extends View {
		public view_hud:ui.ajqp.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public img_room0:Laya.Box;
		public txt_difen0:Laya.Label;
		public txt_least0:Laya.Label;
		public img_room1:Laya.Box;
		public txt_difen1:Laya.Label;
		public txt_least1:Laya.Label;
		public img_room2:Laya.Box;
		public txt_difen2:Laya.Label;
		public txt_least2:Laya.Label;
		public img_room3:Laya.Box;
		public txt_difen3:Laya.Label;
		public txt_least3:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.ajqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"y":206,"x":29,"width":1233,"var":"box_right","height":300},"child":[{"type":"Box","props":{"y":0,"x":0,"width":300,"var":"img_room0","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"sangong_ui/game_ui/sangong/btn_cjc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":55,"var":"txt_difen0","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":55,"var":"txt_least0","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":311,"width":300,"var":"img_room1","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"sangong_ui/game_ui/sangong/btn_xzc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":55,"var":"txt_difen1","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":55,"var":"txt_least1","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":622,"width":300,"var":"img_room2","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"sangong_ui/game_ui/sangong/btn_lbc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":55,"var":"txt_difen2","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":55,"var":"txt_least2","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":933,"width":300,"var":"img_room3","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"sangong_ui/game_ui/sangong/btn_fhc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":55,"var":"txt_difen3","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":55,"var":"txt_least3","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]}]},{"type":"Box","props":{"y":642,"width":1280,"height":60,"centerX":0},"child":[{"type":"Image","props":{"y":13,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_wrzx.png","right":40}},{"type":"Image","props":{"y":30,"x":220,"skin":"sangong_ui/game_ui/sangong/zjh_title.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":104,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":-29,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.HudUI",ui.ajqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.SanGong_HUDUI.uiView);
        }
    }
}
