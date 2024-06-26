import { MdOutlineMail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { SlPhone } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

import { Container, Card } from "./styled";

export default function Contatos() {
    return (
        <Container id="contatos">
            <h5>Contatos</h5>
            <div>
                <Card>
                    <a href="mailto:brendogs2021@gmail.com" target="blank">
                        <MdOutlineMail />
                    </a>
                    <span>E-mail</span>
                    <p>brendogs2021@gmail.com</p>
                </Card>
                <Card>
                    <a href="https://www.linkedin.com/in/brendo-g-santana/" target="blank">
                        <FiLinkedin />
                    </a>
                    <span>Linkedin</span>
                    <p>@brendo-gomes-santana</p>
                </Card>
                <Card>
                    <a href="https://api.whatsapp.com/send?phone=5592992050852" target="blank">
                        <SlPhone />
                    </a>
                    <span>Contato</span>
                    <p>(92) 9299205-0852</p>
                </Card>
                <Card>
                    <a href="https://github.com/brendo-gomes-santana" target="blank">
                        <FiGithub />
                    </a>
                    <span>Github</span>
                    <p>@brendo-gomes-santana</p>
                </Card>
            </div>
        </Container>
    )
}