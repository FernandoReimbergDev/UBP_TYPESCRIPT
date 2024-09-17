import styles from "./styles.module.css";

interface CardProdutoProps {
	srcFront: string;
	srcBack: string;
	alt: string;
	nameProduct: string;
	priceProduct: number;
	Button: React.ReactNode;
}

export function CardProduto({
	srcFront,
	srcBack,
	alt,
	nameProduct,
	priceProduct,
	Button,
}: CardProdutoProps) {
	return (
		<div className={styles.cardProduto}>
			<div className={styles.containerCard3d}>
				<div className={styles.frontCard}>
					<img src={srcFront} alt={alt} />
				</div>
				<div className={styles.backCard}>
					<img src={srcBack} alt={alt} />
				</div>
			</div>
			<p className={styles.codigoProdutoCard}>{nameProduct}</p>
			<p className={styles.PrecoProdutoCard}>R${priceProduct}</p>
			<p className={styles.nota}>*frete não incluso</p>
			{Button}
		</div>
	);
}
