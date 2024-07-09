import { MdOutlineMail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

import { Container, Card, ContainerCards, Form, ContainerContatos } from "./styled";

export default function Contatos() {


    return (
        <Container id="contatos">
            <h5>Contatos</h5>
            <ContainerContatos>
                <ContainerCards>
                    <Card>
                        <a href="mailto:brendogs2021@gmail.com" target="blank">
                            <MdOutlineMail />
                        </a>
                        <div>
                            <span>E-mail</span>
                            <p>brendogs2021@gmail.com</p>
                        </div>
                    </Card>
                    <Card>
                        <a href="https://www.linkedin.com/in/brendo-g-santana/" target="blank">
                            <FiLinkedin />
                        </a>
                        <div>
                            <span>Linkedin</span>
                            <p>@brendo-gomes-santana</p>
                        </div>
                    </Card>
                    <Card>
                        <a href="https://github.com/brendo-gomes-santana" target="blank">
                            <FiGithub />
                        </a>
                        <div>
                            <span>Github</span>
                            <p>@brendo-gomes-santana</p>
                        </div>
                    </Card>
                </ContainerCards>
                <Form>
                    <h1>Proposta</h1>
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="text" placeholder="Digite seu e-mail" />
                    <label>
                        <input type="checkbox" /> Proposta de vaga de trabalho
                    </label>
                    <textarea placeholder="Digite a descriçao de serviço" />
                    <button>Enviar</button>
                </Form>

            </ContainerContatos>
        </Container>
    )
}