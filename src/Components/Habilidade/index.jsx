import { Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaHtml5, FaCss3Alt, FaDatabase  } from "react-icons/fa";
import { SiSass, SiStyledcomponents, SiTypescript, SiExpress, SiPrisma, SiSequelize } from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase  } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative, TbBrandNodejs  } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Card, Container } from './styled';
 
const habilidades = [
    {nome: 'Html', icon: <FaHtml5/> },
    {nome: 'Css', icon: <FaCss3Alt/> },
    {nome: 'Sass', icon: <SiSass/> },
    {nome: 'CSS-in-JS', icon: <SiStyledcomponents/> },
    {nome: 'Javascript', icon: <IoLogoJavascript/>},
    {nome: 'Reactjs', icon: <RiReactjsLine/> },
    {nome: 'React Native', icon: <TbBrandReactNative/> },
    {nome: 'Nodejs', icon: <TbBrandNodejs/> },
    {nome: 'Typescript', icon: <SiTypescript/> },
    {nome: 'Express', icon: <SiExpress/>},
    {nome: 'Prisma', icon: <SiPrisma/> },
    {nome: 'Sequelize', icon: <SiSequelize/> },
    {nome: 'MongooDB', icon: <FaDatabase/> },
    {nome: 'PostgreSQL', icon: <BiLogoPostgresql/> },
    {nome: 'Firebase', icon: <IoLogoFirebase/> },
]

export default function Habilidade() {

    const [slideView, setSlideView] = useState(8)


    useEffect(() => {
        function alterarSlide(){

            const width = window.innerWidth;

            if (width < 720) {
                // Tamanho de tela pequeno
                setSlideView(3);
            } else if (width >= 720 && width < 1024) {
                // Tamanho de tela médio
                setSlideView(4);
            } else if (width >= 1024 && width < 1440) {
                // Tamanho de tela grande
                setSlideView(5);
            } else {
                // Tamanho de tela extra-grande
                setSlideView(8);
            }
        }

        alterarSlide()

        window.addEventListener('resize', alterarSlide)

        return () => {
            window.addEventListener('resize', alterarSlide)
        }
    },[])

    return (
        <Container id='skills'>
        <h3>Skills</h3>
            <Swiper
                
                modules={[Autoplay]}
                slidesPerView={slideView}
                autoplay= {{ delay: 750 }}
            >
            {habilidades.map((item, index) => {
                return(
                    <SwiperSlide key={index}>
                    <Card>
                        <p><strong>{item.nome}</strong></p>
                        {item.icon}
                    </Card>
                </SwiperSlide>  
                )
            })}
            </Swiper>
        </Container>
    )
}