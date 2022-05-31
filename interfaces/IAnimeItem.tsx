interface IEntry {
	mal_id: number;
	url: string;
	images: any;
	title: string;
	title_english: string;
	score: number;
	popularity: number;
}

export default interface IAnimeItem extends IEntry {
	trailer: []
}
