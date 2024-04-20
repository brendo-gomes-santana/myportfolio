import Header from "../Components/Header"
import { Banner, Escrita, ContainerImg, Sobre, Contatos } from "./styled";

import eu from '../Figure/eu.png';
import Habilidade from "../Components/Habilidade";

export default function Home() {
    return (
        <>
            <Header />
            <Banner>
                <Escrita>
                    <h2>Hello, i am
                        <br />
                        <span>Brendo Gomes</span>
                    </h2>
                    <p>Full stack developer</p>
                </Escrita>
                <ContainerImg>
                    <img src={eu} alt="minha-imagem" />
                </ContainerImg>
            </Banner>
            <Sobre id="about-me">
                <h3>About me</h3>
                <p>From an early age, I was attracted to technology and at the age of 14, I had my first contact with
                    schedule. Although uncertain about my future at the time, during college, I discovered
                    my passion for being a fullstack programmer. Starting from the front-end with HTML, CSS and
                    JavaScript, I expanded my knowledge in ReactJS and Sass. Currently, I am immersed in
                    back-end with Node.js, Express, Sequelize, PostgreSQL and others. My learning never stops,
                    dedicating at least two learning hours to improving my skills.</p>
            </Sobre>
            <Habilidade/>
            <Contatos>
                <h5>Contacts</h5>
            </Contatos>
        </>
    )
}