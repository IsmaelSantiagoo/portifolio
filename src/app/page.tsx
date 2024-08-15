"use client"

import BackgroundText from "./components/BackgroundText";
import NavBar from "./components/navbar/NavBar";
import BlurContainer from "./components/container/BlurContainer";
import Link from "next/link";
import profile_img from '../../public/profile.png'
import Content from "./components/container/Content";
import Title from "./components/title/Title";
import Footer from "./components/footer/Footer";

export default function Home() {

  return (
    <main>
      <NavBar/>
      <BackgroundText text='Desenvolvedor Web'/>
      <Content>
        <Title>
          <p>Bem Vindo!</p>
          <h2>
            <span className="span1">Eu sou, </span><span className="span2">Ismael Santiago</span>
          </h2>
          <hr />
          <p>Desenvolvedor Web</p>
        </Title>
        <BlurContainer styles={{alignItems: 'center'}}>
          <img src={profile_img.src}/>
          <p>Tenho 20 anos, estou atualmente cursando <span>Gestão da Tecnologia da Informação </span>
          na Faculdade de Pará de Minas, fique a vontade para explorar minhas <span className="underline"><Link href={'/habilidades'}>habilidades</Link></span> e <span className="underline"><Link href={'/habilidades'}>projetos</Link></span> desenvolvidos 😎.</p>
        </BlurContainer>
      </Content>
      <Footer/>
    </main>
  );
}
