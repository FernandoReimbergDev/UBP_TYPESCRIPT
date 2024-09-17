import { useState, useEffect, useRef } from "react";
import {
	CaretRight,
	CaretLeft,
	Heart,
	ShoppingCart,
} from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { Button } from "../Button";

import { produtosListData } from "../../data/produtosSlider";

export function BannerSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	const produtoInfoRef = useRef<HTMLDivElement | null>(null);
	const produtoImgRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime((prevTime) => {
				if (prevTime >= 8) {
					handleNext();
					return 0;
				}
				return prevTime + 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [currentIndex, currentTime]);

	const handleNext = () => {
		animateSlider("sumirParaEsquerda", "sumirParaDireita");
		setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % produtosListData.length);
			setCurrentTime(0);
		}, 800);
	};

	const handleBack = () => {
		animateSlider("sumirParaEsquerda", "sumirParaDireita");
		setTimeout(() => {
			setCurrentIndex(
				(prevIndex) =>
					(prevIndex - 1 + produtosListData.length) % produtosListData.length,
			);
			setCurrentTime(0);
		}, 800);
	};

	const animateSlider = (infoClass: string, imgClass: string) => {
		if (produtoInfoRef.current) {
			produtoInfoRef.current.classList.add(styles[infoClass]);
		}
		if (produtoImgRef.current) {
			produtoImgRef.current.classList.add(styles[imgClass]);
		}

		setTimeout(() => {
			if (produtoInfoRef.current) {
				produtoInfoRef.current.classList.remove(styles[infoClass]);
			}
			if (produtoImgRef.current) {
				produtoImgRef.current.classList.remove(styles[imgClass]);
			}
		}, 800);
	};

	const currentProduct = produtosListData[currentIndex];

	return (
		<div className={styles["container-slider"]}>
			<CaretLeft
				size={32}
				weight="bold"
				className={styles.backSlider}
				onClick={handleBack}
			/>
			<CaretRight
				size={32}
				weight="bold"
				className={styles.nextSlider}
				onClick={handleNext}
			/>
			<div className={styles["box-info-produto"]}>
				<div className={styles["produto-info"]} ref={produtoInfoRef}>
					<p className={styles.detalhe}>
						<Heart weight="fill" size={20} className={styles.iconeButton} />
						Recomendados
					</p>
					<p className={styles.codigoProduto}>{currentProduct.PRODUTO}</p>
					<Button
						className={"vejaMaisBtn"}
						name={String(currentProduct.POSITION)}
						icon={<ShoppingCart weight="fill" />}
						text="Veja Mais"
					/>
				</div>
			</div>
			<div className={styles["box-imagem-produto"]}>
				<div className={styles.degradeBanner}></div>
				<div className={styles["imagens-produto-slider"]} ref={produtoImgRef}>
					<img
						src={currentProduct.IMAGEM}
						className={styles["img-produto-slider"]}
						alt={currentProduct.PRODUTO}
					/>
					<img
						src={currentProduct.IMAGEMBACK}
						className={styles["subi-img-produto"]}
						alt={currentProduct.PRODUTO}
					/>
				</div>
			</div>
		</div>
	);
}
