import { useState } from "react";
import { Funnel, ShoppingBag, ShoppingCart } from "@phosphor-icons/react";
import "../styles/home.css";

//LOGO PRINCIPAL DO CLIENTE
import logo from "../assets/logo-colorido.png";

//ARRAYS DE DADOS
import { categorias } from "../data/categoriasLoja";
import { produtosGrid } from "../data/produtosGrid";

// import { productsInCart } from '../data/produtosCarrinho';

//COMPONENTES
import { Header } from "../components/Header";
import { BannerSlider } from "../components/BannerSlider";
import { Categoria } from "../components/Categorias";
import { Banner } from "../components/Banner";
import { TitleSection } from "../components/TitleSection";
import { Container } from "../components/Container";
import { CardProduto } from "../components/CardProduto";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
// import { ModalProduto } from '../components/ModalProduto';
// import { ModalShopCart } from '../components/ModalShopCart';

export function Home() {
	const [selectedProduct, setSelectedProduct] = useState(null);
	// const [isModalOpen, setIsModalOpen] = useState(false);

	const handleBuyClick = (productIndex: number) => {
		console.log(productIndex, selectedProduct, setSelectedProduct);
		// setSelectedProduct(produtosGrid[productIndex]);
		// setIsModalOpen(true);
	};

	// const closeModal = () => {
	//   console.log(selectedProduct, setSelectedProduct)
	//   // setIsModalOpen(false);
	//   // setSelectedProduct(null);
	// };

	return (
		<>
			<Header />
			<BannerSlider />

			<Container>
				<TitleSection
					className="titleContainer"
					text="Busque por Categoria"
					icon={<Funnel size={28} weight="fill" />}
				/>
				<div className="Categorias">
					{categorias.map((categoria) => {
						const IconComponent = categoria.icone;
						return (
							<Categoria
								key={categoria.id}
								text={categoria.text}
								icon={<IconComponent size={32} />}
								href={categoria.url}
							/>
						);
					})}
				</div>
			</Container>

			<Container>
				<Banner imgSrc={logo} alt="logo principal" />
			</Container>

			<Container>
				<TitleSection
					className="titleContainer"
					text="Explore os Produtos"
					icon={<ShoppingBag size={28} weight="fill" />}
				/>
				<div className="containerProdutos">
					{produtosGrid.map((produto) => {
						return (
							<CardProduto
								key={produto.id}
								srcFront={produto.srcFrontImage}
								srcBack={produto.srcBackImage}
								alt={produto.alt}
								nameProduct={produto.product}
								priceProduct={produto.price}
								Button={
									<Button
										className={"adicionarCompra"}
										name={"buttonBuy"}
										icon={<ShoppingCart weight="fill" />}
										text="Adicionar"
									/>
								}
							/>
						);
					})}
				</div>
			</Container>

			{/*
      <Container>

        <div className="containerProdutos">
          {produtosGrid.map((produto, index) => {
            return (
              <CardProduto
                key={index + produto.codePro}
                srcFront={produto.srcFrontImage}
                srcBack={produto.srcBackImage}
                alt={produto.alt}
                nameProduct={produto.product}
                priceProduct={produto.price}
                onBuyClick={() => handleBuyClick(index)}

              />
            )
          })}

        </div>
      </Container>

      {isModalOpen && (
        <ModalProduto ProductData={selectedProduct} onClose={closeModal} />
      )} */}

			<Footer />

			{/* <ModalShopCart productsInCart={productsInCart}/> */}
		</>
	);
}
