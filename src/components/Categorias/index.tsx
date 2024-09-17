import styles from "./styles.module.css";

interface CategoriasProps {
	icon: React.ReactNode;
	text: string;
	href: string;
}

export function Categoria({ icon, text, href }: CategoriasProps) {
	return (
		<a href={href} className={styles.BoxCategoria}>
			<i>{icon}</i>
			<p>{text}</p>
		</a>
	);
}
