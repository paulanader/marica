import {
    FaBed,
    FaMotorcycle,
    FaRoute,
    FaStoreAlt,
    FaUmbrellaBeach,
    FaTicketAlt,
    FaHome,
    FaMicrophoneAlt,
    FaInfo,
    FaGift,
} from 'react-icons/fa';
import { BiRestaurant } from 'react-icons/bi';

import { Header } from '../../components/Header';
import { HomeCard } from '../../components/HomeCard';
import { Footer } from '../../components/Footer';
import { Carousel } from '../../components/Carousel';
import { BlueFooter } from '../../components/BlueFooter';
import { Main } from '../../components/Main';
import { Container } from '../../components/Container';
import { HomeArtCard } from '../../components/HomeArtCard';

export const Home: React.FC = () => (
    <>
        <Header />
        <Carousel />
        <Main>
            <Container>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center gy-2 gx-2 pb-5 py-5">
                    <div className="col">
                        <HomeCard
                            image={<FaUmbrellaBeach />}
                            title="Pontos Turísticos"
                            description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
                            page="/pontos-turisticos"
                        />
                    </div>
                    <div className="col">
                        <HomeCard
                            image={<FaBed />}
                            title="Hotéis e Pousadas"
                            description="Saiba onde se hospedar em Maricá"
                            page="/hoteis-e-pousadas"
                        />
                    </div>
                    <div className="col">
                        <HomeCard
                            image={<BiRestaurant />}
                            title="Bares e Restaurantes"
                            description="Aprecie a gastronomia de Maricá"
                            page="/bares-e-restaurantes"
                        />
                    </div>
                    <div className="col">
                        <HomeCard
                            image={<FaMotorcycle />}
                            title="Delivery"
                            description="Receba o melhor de Maricá no conforto da sua casa"
                            page="/delivery"
                        />
                    </div>
                    <div className="col">
                        <HomeCard
                            image={<FaStoreAlt />}
                            title="Comércio Local"
                            description="Veja onde fazer as suas compras"
                            page="/comercio-local"
                        />
                    </div>
                    <div className="col">
                        <HomeCard
                            image={<FaTicketAlt />}
                            title="Cupons de desconto"
                            description="As melhores promoções para curtir a cidade"
                            page="/"
                        />
                    </div>
                    <div className="col">
                        <HomeCard
                            image={<FaHome />}
                            title="Espaços para eventos"
                            description="Locais para fazer suas festas ou reuniões"
                            page="/espacos-para-eventos"
                        />
                    </div>
                    <div className="col">
                        <HomeCard
                            image={<FaMicrophoneAlt />}
                            title="Eventos"
                            description="Confira o calendário de eventos da cidade"
                            page="/eventos"
                        />
                    </div>
                    <div className="col">
                        <HomeArtCard
                            image={<FaRoute />}
                            title="Roteiros Turísticos"
                            description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade."
                        />
                    </div>
                    <div className="col">
                        <HomeArtCard
                            image={<FaGift />}
                            title="Artesanato"
                            description="Conheça e compre as criações dos artesãos de Maricá/RJ"
                        />
                    </div>
                    <div className="col">
                        <HomeCard
                            image={<FaInfo />}
                            title="Sobre a cidade"
                            description="Conheça mais sobre Maricá"
                            page="/sobre"
                        />
                    </div>
                </div>
            </Container>
        </Main>
        <BlueFooter />
        <Footer />
    </>
);
