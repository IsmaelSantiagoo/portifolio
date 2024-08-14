"use client"

import Content from '../components/container/Content'
import BackgroundText from "../components/BackgroundText";
import NavBar from "../components/navbar/NavBar";
import PageTitle from '../components/title/PageTitle';
import BlurContainer from '../components/container/BlurContainer';
import style from './styles.module.css';
import Input from '../components/inputs/Input';
import Btn from '../components/Btn/Btn';

// assets
import githubIcon from '../assets/github.png'
import linkedinIcon from '../assets/linkedin.png'
import instagramIcon from '../assets/instagram.png'
import whatsappIcon from '../assets/whatsapp.png'

export default function inicio() {

    return (
        <>  
            <NavBar/>
            <BackgroundText text="Desenvolvedor Web"/>
            <Content styles={{justifyContent: 'center', alignItems: 'center'}}>
                <PageTitle styles={{height: '150px'}}>Entre em contato comigo</PageTitle>
                <BlurContainer styles={{alignItems: 'center',justifyContent: 'center',height: '400px'}}>
                    <div className={style.contactContainer}>
                        <div className={style.contacts}>
                            <div className={style.contact}>
                                <img src={githubIcon.src} alt="ícone de contato"/>
                                <p><a href="https://github.com/IsmaelSantiagoo" target='blank'>IsmaelSantiagoo</a></p>
                            </div>
                            <div className={style.contact}>
                                <img src={linkedinIcon.src} alt="ícone de contato"/>
                                <p><a href="https://www.linkedin.com/in/ismael-santiago-6b26b5265/" target='blank'>Ismael Santiago</a></p>
                            </div>
                            <div className={style.contact}>
                                <img src={instagramIcon.src} alt="ícone de contato"/>
                                <p><a href="https://www.instagram.com/ismaellsantiagoo_/" target='blank'>@ismaellsantiagoo_</a></p>
                            </div>
                            <div className={style.contact}>
                                <img src={whatsappIcon.src} alt="ícone de contato"/>
                                <p><a href="https://wa.link/66s8hw" target='blank'>(37) 99824-7669</a></p>
                            </div>
                        </div>
                        <hr className={style.line} />
                        <div className={style.emailMessage}>
                            <p>Envie uma mensagem 🙂</p>
                            <Input type='email' placeholder='E-mail'/>
                            <Input type='text' placeholder='Digite sua mensagem'/>
                            <Btn value='ENVIAR'/>
                        </div>
                    </div>
                </BlurContainer>
            </Content>
        </>
    )
}