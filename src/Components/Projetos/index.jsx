
import { useState } from 'react';

import { Container, Card, Capa } from "./styled";

import { FaHtml5 } from "react-icons/fa";
import { SiSass, SiTypescript, SiExpress, SiPrisma } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative, TbBrandNodejs  } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";


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

            <ModalBase
                id={1}
                openModal={openModal} 
                handleClosedModal={setOpenModal} 
                title="Projeto Pizza"
                linkVideo={Video_sujeitoPizza}
                linkGit="SujeitoPizza"
                >
                Projeto feito em uma aula no udemy.
            </ModalBase>

            <ModalBase
                id={2}
                openModal={openModal} 
                handleClosedModal={setOpenModal} 
                title="Projeto Radar"
                linkVideo={video_projetoRadar}
                linkGit=""
                >
                Projeto feito no meu estágio
            </ModalBase>
        </Container>
    )
}