import styles from "../Header/styles.module.css";

interface ItemProps {
	id?: string;
	onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
	url?: string;
	icon?: React.ReactNode;
	children?: React.ReactNode;
	text: string;
}

export function ItemLista({
	id,
	onClick,
	url,
	icon,
	text,
	children,
}: ItemProps) {
	return (
		<li id={id} onClick={onClick}>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<span className={styles["item-icon"]}>{icon}</span>
				<span className={styles["item-text"]}>{text}</span>
			</a>
			{children}
		</li>
	);
}
