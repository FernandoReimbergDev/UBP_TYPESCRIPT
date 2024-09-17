import {
	TShirt,
	Toolbox,
	Notepad,
	Coffee,
	Star,
	Tag,
} from "@phosphor-icons/react";

export const categorias = [
	{
		id: 1,
		text: "Camiseta",
		url: "/categorias/camisetas",
		icone: TShirt,
	},
	{
		id: 2,
		text: "Utilidades",
		url: "/",
		icone: Toolbox,
	},
	{
		id: 3,
		text: "Copos",
		url: "/",
		icone: Coffee,
	},
	{
		id: 4,
		text: "Gráficos",
		url: "/",
		icone: Notepad,
	},
	{
		id: 5,
		text: "+Vendidos",
		url: "/",
		icone: Star,
	},
	{
		id: 6,
		text: "Promoção",
		url: "/",
		icone: Tag,
	},
];
