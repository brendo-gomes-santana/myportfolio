import { useContext } from "react";
import { BaseContext } from '../../Contexts';

import { Container, Navegacao } from "./styled";
import { MdSunny, MdDarkMode } from "react-icons/md";
export default function Header() {

    const { color, ChangeColor } = useContext(BaseContext)

    return (
        <Container>
            <h1>Portfólio</h1>
            <Navegacao>
                <a href="#########">Sobre mim</a>
                <a href="#########">Habilidade</a>
                <a href="#########">Projetos</a>
                <a href="#########">Contato</a>
                
                <button onClick={() => ChangeColor()}>
                    {color ? (
                        <MdDarkMode size={35}/>
                    ) : (
                        <MdSunny size={35}/>
                    )}
                </button>
            </Navegacao>
        </Container>
    )
}