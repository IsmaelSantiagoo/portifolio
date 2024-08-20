"use client"

// importando componentes
import Content from '../components/container/Content'
import BackgroundText from "../components/BackgroundText";
import NavBar from "../components/navbar/NavBar";
import PageTitle from '../components/title/PageTitle';
import BlurContainer from '../components/container/BlurContainer';

// importando estilização
import styles from './styles.module.css'
import Footer from '../components/footer/Footer';

export default function inicio() {

    return (
        <>  
            <NavBar/>
            <BackgroundText text="Desenvolvedor Web"/>
            <Content>
                <PageTitle>Meus projetos</PageTitle>
                <BlurContainer>
                    <div className={styles.projects}>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                    </div>
                </BlurContainer>
                <Footer/>
            </Content>
        </>
    )
}