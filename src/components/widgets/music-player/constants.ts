import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [

	{
		id: 1,
		title: "Enchanted love",
		artist: "linear ring",
		cover: "assets/music/cover/Enchanted_love.png",
		url: "assets/music/url/Enchanted_love.mp3",
		duration: 0,
	},
	{
		id: 2,
		title: "Featherfall (Hyper Potions Remix)",
		artist: "Minecraft",
		cover: "assets/music/cover/Minecraft.jpg",
		url: "assets/music/url/Featherfall.mp3",
		duration: 0,
	},
	{
		id: 3,
		title: "Watcher (Synthion Remix)",
		artist: "Synthion",
		cover: "assets/music/cover/Minecraft.jpg",
		url: "assets/music/url/Synthion.mp3",
		duration: 0,
	},

];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
