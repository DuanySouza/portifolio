import Head from 'next/head';
import { SiNextdotjs, SiCss3, SiHtml5, SiGithub, SiSass, SiLinkedin, SiTypescript, SiJavascript, SiStyledcomponents, SiGmail } from 'react-icons/si'

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.contentContainer}>

        <section className={styles.sectionBanner}>
          <div className={styles.presentation}>
            <p>Olá, eu sou </p>
            <h1>Duany Souza</h1>
            <h2>Desenvolvedora Frontend</h2>
            <div className={styles.icons}>
              <a href='https://github.com/DuanySouza' target='_blank' rel="noreferrer">
                <SiGithub  />
              </a>
              <a href='https://www.linkedin.com/in/duany/' target='_blank' rel="noreferrer">
                <SiLinkedin/>
              </a>
            </div>
          </div>

          <img src="/images/dev.gif" alt="woman coding computer" />

        </section>

        <section id='about' className={styles.section}>

          <img className={styles.image} src="/images/my.png" alt="woman coding computer" />

          <div className={styles.about}>

            <h2>Mas afinal, quem sou eu?</h2>
            <p>
              Me chamo Duany Candida de Souza, tenho 23 anos, atualmente resido em Campinas 
              e estou cursando o último período em Análise e desenvolvimento de sistemas. 
            </p>
            <p>
              Eu já decidi que vou seguir na área de frontend e desde então eu tenho me dedicado
              para ser uma excelente profissional da área.
            </p>
            <p>
              Estou em busca de uma oportunidade para evoluir profissionalmente, sou
              esforçada e sempre dou o meu melhor para poder atingir meus objetivos estou 
              pronta para encarrar esses novos desafios.   
            </p>
            <p>
              No meu tempo livre adoro ler livros ou mangás, as vezes curto desenhar, jogar online 
              e curtir com minha família.
            </p>
        
          </div>

        </section>

        <section id='skills' className={styles.skills}>
          <h2>Minhas Skills</h2>

          <div className={styles.section}>

            <div className={styles.hability}>
              <h3>Habilidades</h3>
              <div>
                <p>
                  Iniciei meus estudos com um curso da Udemy em desenvolvimento web onde aprendi 
                  sobre HTML, CSS, JS e Bootstrap para criar sites. Tive oportunidade de estagiar 
                  em duas empresas e trabalhar como frontend melhorando meus conhecimentos. 
                </p>
                <p>
                  No final do ano passado decidi elevar a minha carreira para poder entrar no mercado 
                  de trabalho como Junior tendo uma boa base de conhecimento, então eu assinei o Ignite 
                  da Rocketseat para evoluir profissionalmente, atualmente tenho estudado React, Next, Typescript
                  entre outras tecnologias.
                </p>
              </div>
            </div>

            <div className={styles.tecnology}>
              <h3>Tecnologias</h3>
              <div>
                <SiJavascript />
                <SiTypescript />
                <SiNextdotjs />
                <SiHtml5 />
                <SiCss3 />
                <SiGithub />
                <SiSass />
                <SiStyledcomponents className={styles.components} />
              </div>
            </div>

          </div>
        </section>

        <section id='projects' className={styles.Projects}>
          <h2>Projetos</h2>

          <div className={styles.sectionProjects}>
            <div>
              <img className={styles.image} src="/images/my.png" alt="woman coding computer" />
              <h3>Refúgio do Leitor</h3>
              <p>Site de Pesquisas de livros</p>
            </div>

            <div>
              <img className={styles.image} src="/images/my.png" alt="woman coding computer" />
              <h3>Em breve</h3>
              <p>descrição</p>
            </div>

            <div>
              <img className={styles.image} src="/images/my.png" alt="woman coding computer" />
              <h3>Em breve</h3>
              <p>descrição</p>
            </div>
          </div>

        </section>

        <section id='contact' className={styles.section}>
          <div className={styles.contact}>
            <h3>💬 Quer entrar em contato?</h3>
            <p>
              Estou a disposição para novas conexões, oferecer uma vaga de trabalho, 
              e também para troca de ideias.  
            </p>
            <p>
              Entre em contato caso queira saber mais sobre mim e miha carreira pelas 
              minhas redes sociais e também email pessoal.
            </p>
          </div>
          <div className={styles.myContact}>
            <a className={styles.dada} href='https://github.com/DuanySouza' target='_blank' rel="noreferrer">
              <SiGithub  />
              <div>
                <h4>GitHub</h4>
                <p>DuanySouza</p>
              </div>
            </a>
            <a className={styles.dada} href='https://www.linkedin.com/in/duany/' target='_blank' rel="noreferrer">
              <SiLinkedin/>
              <div>
                <h4>Linkedin</h4>
                <p>Duany Candida de Souza</p>
              </div>
            </a>
            <a className={styles.dada} href='' target='_blank' rel="noreferrer">
              <SiGmail />
              <div>
                <h4>Gmail</h4>
                <p>duanysouza01@gmail.com</p>
              </div>
            </a>  
          </div>
        </section>

      </main>

    </>
  )
}
