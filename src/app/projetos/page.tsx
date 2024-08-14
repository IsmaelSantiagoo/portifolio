"use client"

import Content from '../components/container/Content'
import BackgroundText from "../components/BackgroundText";
import NavBar from "../components/navbar/NavBar";
import PageTitle from '../components/title/PageTitle';
import BlurContainer from '../components/container/BlurContainer';
import styles from './styles.module.css'

export default function inicio() {

    return (
        <>  
            <NavBar/>
            <BackgroundText text="Desenvolvedor Web"/>
            <Content>
                <PageTitle>Meus projetos</PageTitle>
                <BlurContainer styles={{height: '500px',alignItems:'start',padding:'0px'}}>
                    <div className={styles.projects}>
                        <div className={styles.project}>
                            <img src="https://placehold.co/150x100"/>
                            <p>Calculadora</p>
                        </div>
                    </div>
                </BlurContainer>
            </Content>
        </>
    )
}