
module ui.ajqp.game_ui.sangong.component {
    export class Effect_yqpUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_qiang:Laya.Box;
		public box_buqiang:Laya.Box;
		public box_bet:Laya.Box;
		public bet_clip:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":35,"x":77,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":0.9,"anchorX":0.8},"compId":4,"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sangong_ui/game_ui/sangong/effect/qp/tu_cz.png"}},{"type":"Box","props":{"y":32,"x":49,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":1,"x":11,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_1.png"}}]},{"type":"Box","props":{"y":33,"x":48,"width":84,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":11,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":33,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":16,"skin":"sangong_ui/game_ui/sangong/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":8,"x":65,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_b.png"}},{"type":"Box","props":{"y":15,"x":42,"width":38,"height":27,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"bet_clip","skin":"sangong_ui/game_ui/sangong/effect/qp/clip_sz.png","clipX":10,"centerY":0,"centerX":0}}]}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":55,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":55,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":45,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":35,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
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
		public bet_clip:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":35,"x":19,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":1,"anchorX":0.2},"compId":4,"child":[{"type":"Image","props":{"skin":"sangong_ui/game_ui/sangong/effect/qp/tu_cz.png","scaleX":-1,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":34,"x":50,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":1,"x":11,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_1.png"}}]},{"type":"Box","props":{"y":34,"x":49,"width":84,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":11,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":35,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":15,"x":16,"skin":"sangong_ui/game_ui/sangong/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":9,"x":66,"skin":"sangong_ui/game_ui/sangong/effect/qp/qiang_b.png"}},{"type":"Box","props":{"y":15,"x":44,"width":38,"height":27,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"bet_clip","skin":"sangong_ui/game_ui/sangong/effect/qp/clip_sz.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":55,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":55,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":45,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":35,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
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
		public view_type:ui.ajqp.game_ui.sangong.component.PaiXingUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":94,"var":"img_frame","runtime":"ui.ajqp.game_ui.sangong.component.Ying_2UI"}},{"type":"PaiXing","props":{"y":135,"x":189,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.sangong.component.PaiXingUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.sangong.component.Ying_2UI",ui.ajqp.game_ui.sangong.component.Ying_2UI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.PaiXingUI",ui.ajqp.game_ui.sangong.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.component.WanJia_LUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong.component {
    export class WanJia_RUI extends View {
		public img_frame:ui.ajqp.game_ui.sangong.component.Ying_2UI;
		public view_type:ui.ajqp.game_ui.sangong.component.PaiXingUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":87,"var":"img_frame","runtime":"ui.ajqp.game_ui.sangong.component.Ying_2UI"}},{"type":"PaiXing","props":{"y":137,"x":181,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.sangong.component.PaiXingUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.sangong.component.Ying_2UI",ui.ajqp.game_ui.sangong.component.Ying_2UI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.PaiXingUI",ui.ajqp.game_ui.sangong.component.PaiXingUI);

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

        public static  uiView:any ={"type":"View","props":{"width":365,"height":178},"child":[{"type":"Image","props":{"y":69,"x":95,"width":350,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","height":163,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":69,"x":95,"width":350,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","height":163,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3},{"type":"Image","props":{"y":1,"x":77,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_win.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":6}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":6}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":4},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":6}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":4},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":6}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":4}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
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

        public static  uiView:any ={"type":"View","props":{"width":175,"height":140},"child":[{"type":"Image","props":{"width":175,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","height":125,"centerY":-2,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"width":175,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","height":125,"centerY":-2,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3},{"type":"Image","props":{"y":7,"x":44,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_win.png","scaleY":0.55,"scaleX":0.55,"anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":6}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":6}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}},{"target":4,"keyframes":{"scaleY":[{"value":0.55,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":0.55,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":7}],"scaleX":[{"value":0.55,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":0.55,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":7}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.component.Ying_2UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.sangong {
    export class SanGongUI extends View {
		public box_view:Laya.Box;
		public view_paixie:ui.ajqp.game_ui.tongyong.PaiXeiUI;
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
		public view_think4:ui.ajqp.game_ui.tongyong.effect.Effect_skzUI;
		public view_think3:ui.ajqp.game_ui.tongyong.effect.Effect_skzUI;
		public view_think2:ui.ajqp.game_ui.tongyong.effect.Effect_skzUI;
		public view_think1:ui.ajqp.game_ui.tongyong.effect.Effect_skzUI;
		public box_opt3:ui.ajqp.game_ui.sangong.component.Effect_zqpUI;
		public box_opt4:ui.ajqp.game_ui.sangong.component.Effect_zqpUI;
		public box_opt2:ui.ajqp.game_ui.sangong.component.Effect_yqpUI;
		public box_opt1:ui.ajqp.game_ui.sangong.component.Effect_yqpUI;
		public box_opt0:ui.ajqp.game_ui.sangong.component.Effect_yqpUI;
		public box_room_left:Laya.Image;
		public text_info:laya.display.Text;
		public box_top_left:Laya.Box;
		public btn_menu:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_set:Laya.Button;
		public btn_record:Laya.Button;
		public box_top_right:Laya.Box;
		public btn_qifu:Laya.Button;
		public btn_back:Laya.Button;
		public box_bottom_right:Laya.Box;
		public btn_chongzhi:ui.ajqp.game_ui.tongyong.effect.ChongzhiUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":186,"x":640,"width":174,"height":204,"centerX":0,"anchorY":1,"anchorX":0.5},"child":[{"type":"SkeletonPlayer","props":{"y":206,"x":82,"url":"tongyong_ui/game_ui/tongyong/sk/HeGuan.sk"}}]},{"type":"PaiXei","props":{"y":111,"x":798,"var":"view_paixie","runtime":"ui.ajqp.game_ui.tongyong.PaiXeiUI"}},{"type":"Text","props":{"y":391,"x":544,"width":212,"var":"text_roomtype","text":"底注：1","leading":6,"height":25,"fontSize":20,"color":"#dadada","align":"center"}},{"type":"TouXiangqz","props":{"y":569,"var":"view_head0","centerX":-240,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":340,"var":"view_head1","right":20,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":151,"var":"view_head2","right":20,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":151,"x":18,"var":"view_head3","runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":340,"x":18,"var":"view_head4","runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"WanJia_L","props":{"y":121,"x":17,"var":"view_player3","runtime":"ui.ajqp.game_ui.sangong.component.WanJia_LUI"}},{"type":"WanJia_L","props":{"y":309,"x":17,"var":"view_player4","runtime":"ui.ajqp.game_ui.sangong.component.WanJia_LUI"}},{"type":"WanJia_R","props":{"y":309,"var":"view_player1","right":25,"runtime":"ui.ajqp.game_ui.sangong.component.WanJia_RUI"}},{"type":"WanJia_R","props":{"y":121,"var":"view_player2","right":25,"runtime":"ui.ajqp.game_ui.sangong.component.WanJia_RUI"}},{"type":"Button","props":{"y":682,"var":"btn_show","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","centerX":269,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":64,"skin":"sangong_ui/game_ui/sangong/tu_tp.png"}}]},{"type":"Box","props":{"y":516,"width":877,"var":"box_bet","height":59,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"var":"btn_bet1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","left":0,"labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff","disabled":false},"child":[{"type":"Box","props":{"y":14,"x":18,"width":150,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei1","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"var":"btn_bet2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","left":175,"labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":14,"x":18,"width":150,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei2","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"var":"btn_bet3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","left":350,"labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":14,"x":18,"width":150,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei3","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"var":"btn_bet4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","left":525,"labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":14,"x":18,"width":150,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei4","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"var":"btn_bet5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","left":700,"labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":14,"x":18,"width":150,"height":41},"child":[{"type":"Clip","props":{"var":"clip_bei5","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]}]},{"type":"Box","props":{"y":628,"x":910,"width":172,"var":"box_banker","height":128,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":118,"var":"btn_qiang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":57,"skin":"sangong_ui/game_ui/sangong/tu_qz.png"}}]},{"type":"Button","props":{"y":42,"var":"btn_buqiang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","labelStrokeColor":"#007500","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","centerX":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":57,"skin":"sangong_ui/game_ui/sangong/tu_bq.png"}}]}]},{"type":"PaiXing","props":{"y":671,"x":635,"width":160,"var":"view_type","height":80,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.sangong.component.PaiXingUI"}},{"type":"DaoJiShi","props":{"y":239,"x":638,"var":"img_time","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"XiPai","props":{"y":290,"x":640,"var":"view_xipai","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.XiPaiUI"}},{"type":"Button","props":{"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":57,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png"}}]},{"type":"Effect_skz","props":{"y":488,"x":23,"var":"view_think4","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_skz","props":{"y":299,"x":22,"var":"view_think3","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_skz","props":{"y":300,"x":1163,"var":"view_think2","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_skz","props":{"y":492,"x":1162,"var":"view_think1","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_zqp","props":{"y":144,"x":288,"var":"box_opt3","runtime":"ui.ajqp.game_ui.sangong.component.Effect_zqpUI"}},{"type":"Effect_zqp","props":{"y":334,"x":288,"var":"box_opt4","runtime":"ui.ajqp.game_ui.sangong.component.Effect_zqpUI"}},{"type":"Effect_yqp","props":{"y":144,"x":879,"var":"box_opt2","runtime":"ui.ajqp.game_ui.sangong.component.Effect_yqpUI"}},{"type":"Effect_yqp","props":{"y":334,"x":879,"var":"box_opt1","runtime":"ui.ajqp.game_ui.sangong.component.Effect_yqpUI"}},{"type":"Effect_yqp","props":{"y":552,"x":249,"var":"box_opt0","runtime":"ui.ajqp.game_ui.sangong.component.Effect_yqpUI"}}]},{"type":"Image","props":{"width":336,"var":"box_room_left","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pjhd.png","sizeGrid":"0,10,0,10","left":105,"height":39},"child":[{"type":"Text","props":{"y":8,"x":17,"width":302,"var":"text_info","text":"牌局号：15323156415613212313","leading":6,"height":21,"fontSize":20,"color":"#dadada"}}]},{"type":"Box","props":{"width":112,"var":"box_top_left","top":0,"left":14,"height":337},"child":[{"type":"Button","props":{"y":53,"x":53,"var":"btn_menu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":56,"var":"img_menu","skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","anchorX":0.5},"child":[{"type":"Image","props":{"y":94,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":175,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":55,"x":56,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gz.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":217,"x":56,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_sz.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":136,"x":56,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_zj.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"width":178,"var":"box_top_right","top":16,"right":28,"height":76,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":35,"x":42.5,"var":"btn_qifu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":140.5,"var":"btn_back","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":121,"var":"box_bottom_right","right":12,"height":125,"bottom":0},"child":[{"type":"Chongzhi","props":{"y":63,"x":61,"var":"btn_chongzhi","scaleY":0.85,"scaleX":0.85,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.ChongzhiUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ChongzhiUI",ui.ajqp.game_ui.tongyong.effect.ChongzhiUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiangqzUI",ui.ajqp.game_ui.tongyong.TouXiangqzUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.WanJia_LUI",ui.ajqp.game_ui.sangong.component.WanJia_LUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.WanJia_RUI",ui.ajqp.game_ui.sangong.component.WanJia_RUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.PaiXeiUI",ui.ajqp.game_ui.tongyong.PaiXeiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.DaoJiShiUI",ui.ajqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.XiPaiUI",ui.ajqp.game_ui.tongyong.effect.XiPaiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_skzUI",ui.ajqp.game_ui.tongyong.effect.Effect_skzUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.Effect_zqpUI",ui.ajqp.game_ui.sangong.component.Effect_zqpUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.Effect_yqpUI",ui.ajqp.game_ui.sangong.component.Effect_yqpUI);
			View.regComponent("ui.ajqp.game_ui.sangong.component.PaiXingUI",ui.ajqp.game_ui.sangong.component.PaiXingUI);

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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":110,"x":232,"width":816,"height":504,"centerX":0},"child":[{"type":"ZhongKuang","props":{"y":-110,"x":-232,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI"}},{"type":"Image","props":{"y":26,"x":408,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":54,"x":0,"width":168,"var":"btn_tab","height":336},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":84,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxsm.png","name":"item1"}},{"type":"Button","props":{"y":168,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxdx.png","name":"item2"}},{"type":"Button","props":{"y":252,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxbs.png","name":"item3"}}]},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_rule","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"lab_wanfa","skin":"sangong_ui/game_ui/sangong/guize_1.png","height":1065}}]},{"type":"Image","props":{"y":54,"x":170,"var":"lab_type","skin":"sangong_ui/game_ui/sangong/guize_2.png"}},{"type":"Image","props":{"y":54,"x":170,"var":"lab_jiesuan","skin":"sangong_ui/game_ui/sangong/guize_4.png"}},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"lab_daxiao","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sangong_ui/game_ui/sangong/guize_3.png","height":485}}]},{"type":"Button","props":{"y":12,"x":803,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
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
		public txt_least0:Laya.Label;
		public txt_difen0:Laya.Label;
		public img_room1:Laya.Box;
		public txt_least1:Laya.Label;
		public txt_difen1:Laya.Label;
		public img_room2:Laya.Box;
		public txt_least2:Laya.Label;
		public txt_difen2:Laya.Label;
		public img_room3:Laya.Box;
		public txt_least3:Laya.Label;
		public txt_difen3:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.ajqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"y":206,"width":1233,"var":"box_right","height":300,"centerX":0},"child":[{"type":"Box","props":{"y":0,"x":0,"width":300,"var":"img_room0","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"sangong_ui/game_ui/sangong/btn_cjc.png"}},{"type":"Label","props":{"y":221,"x":158,"width":54,"var":"txt_least0","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":247,"x":158,"width":54,"var":"txt_difen0","text":"11","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":248,"x":106,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}},{"type":"Image","props":{"y":222,"x":107,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}}]},{"type":"Box","props":{"y":0,"x":311,"width":300,"var":"img_room1","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"sangong_ui/game_ui/sangong/btn_xzc.png"}},{"type":"Label","props":{"y":221,"x":158,"width":54,"var":"txt_least1","valign":"middle","text":"111","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":247,"x":158,"width":54,"var":"txt_difen1","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":248,"x":106,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}},{"type":"Image","props":{"y":222,"x":107,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}}]},{"type":"Box","props":{"y":0,"x":622,"width":300,"var":"img_room2","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"sangong_ui/game_ui/sangong/btn_lbc.png"}},{"type":"Label","props":{"y":221,"x":158,"width":54,"var":"txt_least2","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":247,"x":158,"width":54,"var":"txt_difen2","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":248,"x":106,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}},{"type":"Image","props":{"y":222,"x":107,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}}]},{"type":"Box","props":{"y":0,"x":933,"width":300,"var":"img_room3","height":300},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"sangong_ui/game_ui/sangong/btn_fhc.png"}},{"type":"Label","props":{"y":221,"x":158,"width":54,"var":"txt_least3","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":247,"x":158,"width":54,"var":"txt_difen3","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":248,"x":106,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}},{"type":"Image","props":{"y":222,"x":107,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}}]}]},{"type":"Box","props":{"y":642,"width":1280,"height":60,"centerX":0},"child":[{"type":"Image","props":{"y":13,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_wrzx.png","right":40}},{"type":"Image","props":{"y":30,"x":220,"skin":"sangong_ui/game_ui/sangong/zjh_title.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":104,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":-29,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.HudUI",ui.ajqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.sangong.SanGong_HUDUI.uiView);
        }
    }
}
