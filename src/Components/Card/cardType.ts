export type CardType = {
	id: number;
	title?: string;
	price?: number;
	description?: string;
	category?: Category;
	images?: string[];
};

export type Category = {
	id: number;
	name: string;
	image: string;
};
