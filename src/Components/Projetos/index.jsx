import { Container, Card, Capa } from "./styled";


import { FaHtml5 } from "react-icons/fa";
import { SiSass, SiTypescript, SiExpress, SiPrisma } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative, TbBrandNodejs  } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

import capa_sujeitoPizza from '../../Figure/capa_sujeitoPizza.png';

export default function Projetos(){
    return(
        <Container>
            <h5>Projects</h5>

            <article>
                <Card>
                    <img src={capa_sujeitoPizza} alt="Capa sujeito pizza" />
                    <Capa>
                        Sujeito Pizza
                        <span>
                            <FaHtml5/>
                            <SiSass/>
                            <SiPrisma/>
                            <SiExpress/>
                            <SiTypescript/>
                            <RiReactjsLine/>
                            <TbBrandNodejs/>
                            <BiLogoPostgresql/>
                            <TbBrandReactNative/>
                        </span>
                    </Capa>
                </Card>
                <Card>
                    <img src={capa_sujeitoPizza} alt="Capa sujeito pizza" />
                    <Capa>
                        Sujeito Pizza
                        <span>
                            <FaHtml5/>
                            <SiSass/>
                            <SiPrisma/>
                            <SiExpress/>
                            <SiTypescript/>
                            <RiReactjsLine/>
                            <TbBrandNodejs/>
                            <BiLogoPostgresql/>
                            <TbBrandReactNative/>
                        </span>
                    </Capa>
                </Card>
            </article>
        </Container>
    )
}