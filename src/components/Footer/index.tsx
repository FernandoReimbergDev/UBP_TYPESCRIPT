import styles from "./styles.module.css";
import {
	FacebookLogo,
	InstagramLogo,
	LinkedinLogo,
	YoutubeLogo,
} from "@phosphor-icons/react";

export function Footer() {
	return (
		<div className={`${styles["container-footer"]} ${styles.footerContainer}`}>
			<footer>
				<div className={styles.waves}>
					<div className={styles.band}></div>
				</div>
				<ul className={styles["media-social"]}>
					<li>
						<a href="#">
							<FacebookLogo size={32} weight="fill" />
						</a>
					</li>
					<li>
						<a href="#">
							<InstagramLogo size={32} weight="fill" />
						</a>
					</li>
					<li>
						<a href="#">
							<LinkedinLogo size={32} weight="fill" />
						</a>
					</li>
					<li>
						<a href="#">
							<YoutubeLogo size={32} weight="fill" />
						</a>
					</li>
				</ul>
				<ul className={styles.menuFooter}>
					<li>
						<a href="#">Sobre Nós</a>
					</li>
					<li>
						<a href="#">SAC</a>
					</li>
					<li>
						<a href="#">Contato</a>
					</li>
					<li>
						<a href="#">Politica de uso</a>
					</li>
				</ul>
				<p className={styles.direitos}>
					© 2024 - Unity Brindes | Todos Direitos Reservados
				</p>
			</footer>
		</div>
	);
}
