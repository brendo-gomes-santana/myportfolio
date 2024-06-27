
import { useState } from 'react';

import { Container, Card, Capa } from "./styled";

import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSass, SiTypescript, SiExpress, SiPrisma } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative, TbBrandNodejs  } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

//CAPAS DOS PROJETOS
import capa_sujeitoPizza from '../../Figure/capa_sujeitoPizza.png';
import capa_projeto_radar from '../../Figure/capa_projeto_radar.png';

// VIDEOS DOS PROJETOS
import Video_sujeitoPizza from '../../Figure/video_sujeitoPizza.mp4';
import video_projetoRadar from '../../Figure/video_projeto_radar.mp4';

import ModalBase from '../Modal';

export default function Projetos(){

    const [openModal, setOpenModal] = useState(0);

    return(
        <Container id="projetos">
            <h5>Projetos</h5>

            <article>
                <Card onClick={() => setOpenModal(1)}>
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
                <Card onClick={() => setOpenModal(2)}>
                    <img src={capa_projeto_radar} alt="Capa Projeto Radar" />
                    <Capa>
                        Projeto Radar
                        <span>
                            <FaHtml5/>
                            <FaCss3Alt/>
                            <IoLogoJavascript/>
                            <TbBrandNodejs/>
                            <SiExpress/>
                        </span>
                    </Capa>
                </Card>
            </article>

            <ModalBase
                id={1}
                openModal={openModal} 
                handleClosedModal={setOpenModal} 
                title="Projeto Pizza"
                linkVideo={Video_sujeitoPizza}
                linkGit="SujeitoPizza"
                >
                O "Projeto Pizza" foi desenvolvido durante uma aula com o objetivo de proporcionar um 
                aprofundamento no ensino. Este curso foi realizado através da plataforma Udemy.
            </ModalBase>

            <ModalBase
                id={2}
                openModal={openModal} 
                handleClosedModal={setOpenModal} 
                title="Projeto Radar"
                linkVideo={video_projetoRadar}
                linkGit=""
                >
                O "Projeto Radar" é uma iniciativa destinada a monitorar os radares nas cidades de Manaus e Santarém. 
                As imagens capturadas são armazenadas em uma pasta denominada "figure", e essas imagens são acessadas 
                através do Node.js. Para a visualização dos dados de localização, utilizei a biblioteca Leaflet, que 
                permite a criação de mapas interativos.
                <br/>
                Devido ao fato de este ser um projeto governamental, estou impedido de divulgar os códigos desenvolvidos.
            </ModalBase>
        </Container>
    )
}