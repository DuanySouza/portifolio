import styles from './styles.module.scss';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="logo tag duany souza" />
                <nav>
                    <a className={styles.active} href="#about">Sobre Mim</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contact">Contato</a>
                </nav>
            </div>
        </header>
    )
}