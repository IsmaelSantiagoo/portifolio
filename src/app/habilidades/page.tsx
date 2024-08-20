"use client"

// importando componentes
import Content from '../components/container/Content'
import BackgroundText from "../components/BackgroundText";
import NavBar from "../components/navbar/NavBar";
import BlurContainer from '../components/container/BlurContainer';
import PageTitle from '../components/title/PageTitle';

// importando estilização
import style from './styles.module.css';

// assets
import htmlIcon from '../assets/html5.png'
import cssIcon from '../assets/css3.png'
import jsIcon from '../assets/js.png'
import pythonIcon from '../assets/python.png'
import nodejsIcon from '../assets/nodejs.png'
import gitIcon from '../assets/git.png'
import seleniumIcon from '../assets/selenium.png'
import reactIcon from '../assets/react.png'
import mysqlIcon from '../assets/mysql.png'
import postgresIcon from '../assets/postgresql.png'
import Footer from '../components/footer/Footer';

export default function inicio() {

    return (
        <>  
            <NavBar/>
            <BackgroundText text="Desenvolvedor Web"/>
            <Content>
                <PageTitle>Minhas habilidades</PageTitle>
                <BlurContainer>
                    <div className={style.Skills}>
                        <div className={style.Skill}>
                            <img src={htmlIcon.src}></img>
                        </div>
                        <div className={style.Skill}>
                            <img src={cssIcon.src}></img>
                        </div>
                        <div className={style.Skill}>
                            <img src={jsIcon.src}></img>
                        </div>
                        <div className={style.Skill}>
                            <img src={pythonIcon.src}></img>
                        </div>
                        <div className={style.Skill}>
                            <img src={nodejsIcon.src}></img>
                        </div>
                        <div className={style.Skill}>
                            <img src={gitIcon.src}></img>
                        </div>
                        <div className={style.Skill}>
                            <img src={seleniumIcon.src}></img>
                        </div>
                        <div className={style.Skill}>
                            <img src={reactIcon.src}></img>
                        </div>
                        <div className={style.Skill}>
                            <img src={mysqlIcon.src}></img>
                        </div>
                        <div className={style.Skill}>
                            <img src={postgresIcon.src}></img>
                        </div>
                    </div>
                </BlurContainer>
                <Footer/>
            </Content>
        </>
    )
}