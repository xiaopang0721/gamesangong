/**
* 三公 
*/
module gamesangong.page {
	export class SangongPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//三公场次界面
		static PAGE_SG: string = "1";
		//三公游戏界面
		static PAGE_SG_MAP: string = "2";
		//三公开始游戏
		static PAGE_SG_BEGIN: string = "3";
		//三公规则界面
		static PAGE_SG_RULE: string = "101";

		static myinit(str: string) {
			super.myinit(str);
			SangongClip.init();
			PageDef._pageClassMap[SangongPageDef.PAGE_SG] = SangongPage;
			PageDef._pageClassMap[SangongPageDef.PAGE_SG_MAP] = SangongMapPage;
			PageDef._pageClassMap[SangongPageDef.PAGE_SG_RULE] = SangongRulePage;
			PageDef._pageClassMap[SangongPageDef.PAGE_SG_BEGIN] = SangongBeginPage;


			this["__needLoadAsset"] = [
				DatingPath.atlas_dating_ui + "qifu.atlas",
				Path_game_sangong.atlas_game_ui + "sangong.atlas",
				Path_game_sangong.atlas_game_ui_sangong_effect + "nyl.atlas",
				Path_game_sangong.atlas_game_ui_sangong_effect + "qp.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qz.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "chongzhi.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "ksyx.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "zjts.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "zjtp.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "anniug.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "fapai_1.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "xipai.atlas",

				PathGameTongyong.ui_tongyong_sk + "HeGuan.sk",
				PathGameTongyong.ui_tongyong_sk + "HeGuan.png",
				Path.custom_atlas_scene + 'card.atlas',
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
					Path_game_sangong.music_sangong + "zjtongchi.mp3",
				])
			}
		}
	}
}