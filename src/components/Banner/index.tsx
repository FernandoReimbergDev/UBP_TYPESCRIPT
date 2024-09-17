import styles from "./styles.module.css";

interface BannerProps {
	imgSrc: string;
	alt: string;
}

export function Banner({ imgSrc, alt }: BannerProps) {
	return (
		<div className={`${styles.Banner} ${styles.revelScroll}`}>
			<img src={imgSrc} alt={alt} />
		</div>
	);
}
