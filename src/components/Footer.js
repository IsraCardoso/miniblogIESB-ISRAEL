import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h3>Escreva sobre o que você tem interesse!</h3>
			<p>
				Este site foi criado por Israel entre 13/09/2022 e 24/09/2022 com o
				intuito de ser um site simples porém com navegação e elementos CRUD como
				Atividade Ativa da matéria Linguagens de Programação Web, com o
				professor William
			</p>
			<p>
				Favor não usar esse site para fins comerciais pois o mesmo não está
				otimizado para produção e ainda requer desenvolvimento
			</p>
		</footer>
	);
};

export default Footer;
