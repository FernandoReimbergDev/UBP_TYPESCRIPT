import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import {
	List,
	MagnifyingGlass,
	UserCirclePlus,
	ListChecks,
	Headset,
	Lock,
	Bag,
} from "@phosphor-icons/react";
import logo from "../../assets/logo-colorido.png";

import { ItemLista } from "../ItemLista";

export function Header() {
	const [fixNavbar, setFixNavbar] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
			scrollPosition;
			if (scrollY > 50) {
				setFixNavbar(!fixNavbar);
			}

			if (scrollY < 50) {
				setFixNavbar(fixNavbar);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const [menuOpen, setMenuOpen] = useState(false);
	const [admDropdownOpen, setAdmDropdownOpen] = useState(false);
	const [maisDropdownOpen, setMaisDropdownOpen] = useState(false);

	const handleMenuOpen = () => {
		setMenuOpen(!menuOpen);
	};

	const handleAdmDropdownOpen = () => {
		setAdmDropdownOpen(!admDropdownOpen);
	};

	const handleMaisDropdownOpen = () => {
		setMaisDropdownOpen(!maisDropdownOpen);
	};

	return (
		<div
			className={`${styles.containerNavbar} ${fixNavbar ? styles.fixed : ""}`}
		>
			<header>
				<List
					size={32}
					className={styles["icone-menu-mobile"]}
					id="icone-menu-mobile"
					onClick={handleMenuOpen}
				/>

				<a href="/">
					<img src={logo} className={styles.logoHeader} alt="Logo" />
				</a>

				<nav
					className={`${styles["menu-nav"]} ${menuOpen ? styles["menu-open"] : ""}`}
				>
					<div className={styles["box-caixa-pesquisa"]}>
						<form action="/search" method="get">
							<input type="text" name="term" placeholder="Faça sua pesquisa" />
							<button type="submit">
								<MagnifyingGlass size={20} />
							</button>
						</form>
					</div>
					<ul className={styles.menuNav} id="menuNav">
						<ItemLista text="Produtos" />
						<ItemLista
							text="Administração"
							id="menu-adm"
							onClick={handleAdmDropdownOpen}
						>
							<div
								className={`${styles["dropdown-adm"]} ${admDropdownOpen ? "admDropdownOpen" : ""}`}
							>
								<ul>
									<ItemLista url="#" text="Estoque Consulta" />
									<ItemLista url="#" text="Estoque Registro" />
									<ItemLista url="#" text="Vendas Consulta" />
									<ItemLista url="#" text="Pedidos" />
								</ul>
							</div>
						</ItemLista>
						<ItemLista
							text="Mais Opções"
							id="menu-mais"
							onClick={handleMaisDropdownOpen}
						>
							<div
								className={`${styles["dropdown-mais"]} ${maisDropdownOpen ? styles["dropdown-mais"] : ""}`}
							>
								<ul>
									<ItemLista
										id="item1"
										url="#"
										icon={<UserCirclePlus size={24} />}
										text="Meus Dados"
									/>
									<ItemLista
										id="item2"
										url="#"
										icon={<ListChecks size={24} />}
										text="Meus Pedidos"
									/>
									<ItemLista
										url="#"
										text="Fale Conosco"
										icon={<Headset size={24} />}
									/>
									<ItemLista url="#" text="Sair" icon={<Lock size={24} />} />
								</ul>
							</div>
						</ItemLista>
					</ul>
				</nav>
				<Bag size={32} className={styles.iconeSacola} id="iconeSacola" />
			</header>
		</div>
	);
}
