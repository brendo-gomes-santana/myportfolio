import Header from "../Components/Header"
import { Banner, Escrita, ContainerImg, Sobre } from "./styled";

import eu from '../Figure/eu.png';

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
            <Sobre>
                <h3>Sobre mim</h3>
                <p>Desde cedo, fui atraído pela tecnologia e aos 14 anos, tive meu primeiro contato com 
                    programação. Embora incerto sobre meu futuro na época, durante a faculdade, descobri 
                    minha paixão por ser um programador fullstack. Começando pelo front-end com HTML, CSS e 
                    JavaScript, expandi meus conhecimentos em ReactJS e Sass. Atualmente, estou mergulhado no 
                    back-end com Node.js, Express, Sequelize, PostgreSQL e outros. Meu aprendizado nunca para, 
                    dedicando pelo menos duas horas aprendidas para aprimorar minhas habilidades.</p>
            </Sobre>
        </>
    )
}