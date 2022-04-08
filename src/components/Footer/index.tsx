import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

import styles from './styles.module.scss'; 

export function Footer(){
    return(
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <p>Desenvolvido por Duany Souza | © 2022</p>
            </div>
        </footer>
    )
}