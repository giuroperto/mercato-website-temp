import React from 'react';
import './Home.css';

import { RiWhatsappLine } from "react-icons/ri";
import { SiIfood } from "react-icons/si";
import Carousel from 'react-bootstrap/Carousel';

// import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <div className="home">
            <div className="description">
                <p>Somos o empório virtual do grupo <a href="http://www.emporioroperto.com.br" target="_blank"><span>Roperto</span></a>.</p>
                <p>Nosso site está em construção, mas você pode saber mais sobre nossos produtos e entregas pelos contatos abaixo.</p>
            </div>
            <div className="product-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dpvoeecza/image/upload/v1610200325/Mercato/137505857_1305913216411404_635029814067806372_n_dmybcg.jpg"
                        alt="Produtos Vecchia Emilia" />
                        <Carousel.Caption>
                        <h3>Produtos Vecchia Emilia</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dpvoeecza/image/upload/v1610200328/Mercato/137271688_401953934364563_666162764696523227_n_kt40db.jpg"
                        alt="Produtos Raiola"
                        />

                        <Carousel.Caption>
                        <h3>Produtos Raiola</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dpvoeecza/image/upload/v1610200330/Mercato/137511298_2642834706009222_5336613123527637624_n_m5mhsj.jpg"
                        alt="Produtos La Pastina"
                        />

                        <Carousel.Caption>
                        <h3>Produtos La Pastina</h3>
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>

            <div className="contact">
                <div className="whats">
                    <RiWhatsappLine className="icon" />
                    <a href="https://wa.me/5511910505047?text=Olá!%20Estava%20no%20site%20de%20vocês%20e%20gostaria%20de%20uma%20informação..." target="_blank" rel="noopener noreferrer">(11) 91050-5047</a>
                </div>
                <div className="email">
                    <a href="mailto:mercatobixiga@gmail.com">mercatobixiga@gmail.com</a>
                </div>
            </div>
    </div>
    )
}

export default Home;


        {/* <Link to="/"><img className="logo" src="https://res.cloudinary.com/dxatyucj2/image/upload/v1599791648/Cantina/Logo_ER_bbhkcq.png" alt="Logo Empório Roperto"/></Link>
        <Link to='/destaques' className="links-style"><button className="btn-style"><FaStar className="icon"/><span>DESTAQUES</span></button></Link>
        <Link to='/cardapio' className="links-style"><button className="btn-style"><MdRestaurantMenu className="icon"/><span>CARDÁPIO</span></button></Link>
        <Link to='/bebidas' className="links-style"><button className="btn-style"><GiBeerBottle className="icon" /><span>BEBIDAS</span></button></Link>
        <Link to='/vinhos' className="links-style"><button className="btn-style"><FaWineGlassAlt className="icon" /><span>CARTA DE VINHO</span></button></Link> */}