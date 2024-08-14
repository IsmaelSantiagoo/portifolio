"use client"

import Content from '../components/container/Content'
import BackgroundText from "../components/BackgroundText";
import NavBar from "../components/navbar/NavBar";
import BlurContainer from '../components/container/BlurContainer';
import PageTitle from '../components/title/PageTitle';
import style from './styles.module.css';

// assets
import api_icon from '../assets/api.png'
import gears_icon from '../assets/engenharia.png'
import programs_icon from '../assets/programas.png'

export default function inicio() {

    return (
        <main>  
            <NavBar/>
            <BackgroundText text="Desenvolvedor Web"/>
            <Content>
                <PageTitle>O que eu faço</PageTitle>
                <BlurContainer>
                    <div className={style.services}>
                        <div className={style.service}>
                            <img src={api_icon.src}></img>
                            <p>Desenvolvimento de sistemas e sites responsios, utilizando as mais novas tecnologias do mercado.</p>
                        </div>
                        <hr className={style.line} />
                        <div className={style.service}>
                            <img src={gears_icon.src}></img>
                            <p>Criação de Rest Api’s trazendo eficiência para aplicações.</p>
                        </div>
                        <hr className={style.line} />
                        <div className={style.service}>
                            <img src={programs_icon.src} alt='serviço'></img>
                            <p>Automação web, descomplicando tarefas demoradas, com apenas alguns cliques.</p>
                        </div>
                    </div>
                </BlurContainer>
            </Content>
        </main>
    )
}