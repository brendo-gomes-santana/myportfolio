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

        </>
    )
}