import type React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
	className: string;
	name: string;
	icon: React.ReactNode;
	text: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Se quiser adicionar um evento onClick opcional
}

export function Button({ className, icon, text, name, onClick }: ButtonProps) {
	return (
		<button className={styles[className]} name={name} onClick={onClick}>
			{icon}
			<span className={styles["button-text"]}>{text}</span>
		</button>
	);
}
