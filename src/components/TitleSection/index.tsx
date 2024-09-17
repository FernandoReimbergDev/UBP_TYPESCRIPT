import styles from "./styles.module.css";

interface TitleProps {
	icon: React.ReactNode;
	text: string;
	className: string;
}

export function TitleSection({ icon, text, className }: TitleProps) {
	return (
		<div className={styles[className]}>
			{icon}
			<p>{text}</p>
		</div>
	);
}
