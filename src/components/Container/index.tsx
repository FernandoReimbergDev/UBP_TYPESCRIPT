import styles from "./styles.module.css";

interface Props {
	children: React.ReactNode;
}

export function Container({ children }: Props) {
	return <div className={styles.container}>{children}</div>;
}
