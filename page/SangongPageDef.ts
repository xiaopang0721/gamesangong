/**
* 三公 
*/
module gamesangong.page {
	export class SangongPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//21点界面
		static PAGE_SG: string = "1";
		static PAGE_SG_MAP: string = "2";
		static PAGE_SG_RULE: string = "101";
		static PAGE_SG_LOSE: string = "8";
		static PAGE_SG_WIN: string = "9";

		static myinit(str: string) {
			super.myinit(str);
			SangongClip.init();
			if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
				PageDef._pageClassMap[SangongPageDef.PAGE_SG] = SangongPage;
			} else {
				PageDef._pageClassMap[SangongPageDef.PAGE_SG] = SangongPageOld;
			}
			PageDef._pageClassMap[SangongPageDef.PAGE_SG_MAP] = SangongMapPage;
			PageDef._pageClassMap[SangongPageDef.PAGE_SG_RULE] = SangongRulePage;
			PageDef._pageClassMap[SangongPageDef.PAGE_SG_LOSE] = SangongLosePage;
			PageDef._pageClassMap[SangongPageDef.PAGE_SG_WIN] = SangongWinPage;


			this["__needLoadAsset"] = [
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				Path_game_sangong.atlas_game_ui + "sangong.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				Path_game_sangong.atlas_game_ui + "sangong/effect/yanhua.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_2.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
				Path.custom_atlas_scene + 'card.atlas',
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
				PathGameTongyong.ui_tongyong_sk + "HeGuan.sk",
				PathGameTongyong.ui_tongyong_sk + "HeGuan.png",


				Path.map + 'pz_sangong.png',
				Path.map_far + 'bg_sangong.jpg'
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_sangong.music_sangong + "sg_bgm.mp3",
					Path_game_sangong.music_sangong + "dingzhuang.mp3",
					Path_game_sangong.music_sangong + "sg_female_0.mp3",
					Path_game_sangong.music_sangong + "sg_female_1.mp3",
					Path_game_sangong.music_sangong + "sg_female_2.mp3",
					Path_game_sangong.music_sangong + "sg_female_3.mp3",
					Path_game_sangong.music_sangong + "sg_female_4.mp3",
					Path_game_sangong.music_sangong + "sg_female_5.mp3",
					Path_game_sangong.music_sangong + "sg_female_6.mp3",
					Path_game_sangong.music_sangong + "sg_female_7.mp3",
					Path_game_sangong.music_sangong + "sg_female_8.mp3",
					Path_game_sangong.music_sangong + "sg_female_9.mp3",
					Path_game_sangong.music_sangong + "sg_female_10.mp3",
					Path_game_sangong.music_sangong + "sg_female_11.mp3",
					Path_game_sangong.music_sangong + "sg_female_12.mp3",
					Path_game_sangong.music_sangong + "sg_male_0.mp3",
					Path_game_sangong.music_sangong + "sg_male_1.mp3",
					Path_game_sangong.music_sangong + "sg_male_2.mp3",
					Path_game_sangong.music_sangong + "sg_male_3.mp3",
					Path_game_sangong.music_sangong + "sg_male_4.mp3",
					Path_game_sangong.music_sangong + "sg_male_5.mp3",
					Path_game_sangong.music_sangong + "sg_male_6.mp3",
					Path_game_sangong.music_sangong + "sg_male_7.mp3",
					Path_game_sangong.music_sangong + "sg_male_8.mp3",
					Path_game_sangong.music_sangong + "sg_male_9.mp3",
					Path_game_sangong.music_sangong + "sg_male_10.mp3",
					Path_game_sangong.music_sangong + "sg_male_11.mp3",
					Path_game_sangong.music_sangong + "sg_male_12.mp3",
					Path_game_sangong.music_sangong + "suijizhuangjia.mp3",
				])
			}
		}
	}
}