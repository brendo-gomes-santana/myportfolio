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
                <a href="#about-me">Sobre me</a>
                <a href="#skills">Skills</a>
                <a href="#projetos">Projetos</a>
                <a href="#contatos">Contatos</a>
                
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