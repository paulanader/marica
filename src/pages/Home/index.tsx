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
import { Main } from '../../components/Main';
import { Footer } from '../../components/Footer';
import { Carousel } from '../../components/Carousel';
import { BlueFooter } from '../../components/BlueFooter';

export const Home: React.FC = () => (
    <>
        <Header />
        <Carousel />
        <Main>
            <div className="pb-5">
                <div className="row row-cols-3 justify-content-center gy-4">
                    <HomeCard
                        image={<FaUmbrellaBeach />}
                        title="Pontos Turísticos"
                        description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
                        page="/pontos-turisticos"
                    />
                    <HomeCard
                        image={<FaBed />}
                        title="Hotéis e Pousadas"
                        description="Saiba onde se hospedar em Maricá"
                        page="/pontos-turisticos"
                    />
                    <HomeCard
                        image={<BiRestaurant />}
                        title="Bares e Restaurantes"
                        description="Aprecie a gastronomia de Maricá"
                        page="/"
                    />
                    <HomeCard
                        image={<FaMotorcycle />}
                        title="Delivery"
                        description="Receba o melhor de Maricá no conforto da sua casa"
                        page="/"
                    />
                    <HomeCard
                        image={<FaStoreAlt />}
                        title="Comércio Local"
                        description="Veja onde fazer as suas compras"
                        page="/"
                    />
                    <HomeCard
                        image={<FaTicketAlt />}
                        title="Cupons de desconto"
                        description="As melhores promoções para curtir a cidade"
                        page="/"
                    />
                    <HomeCard
                        image={<FaHome />}
                        title="Espaço para eventos"
                        description="Locais para fazer suas festas ou reuniões"
                        page="/"
                    />
                    <HomeCard
                        image={<FaMicrophoneAlt />}
                        title="Eventos"
                        description="Confira o calendário de eventos da cidade"
                        page="/"
                    />
                    <HomeCard
                        image={<FaRoute />}
                        title="Roteiros"
                        description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade."
                        page="/"
                    />
                    <HomeCard
                        image={<FaGift />}
                        title="Artesanato"
                        description="Conheça e compre as criações dos artesãos de Maricá/RJ"
                        page="/"
                    />
                    <HomeCard
                        image={<FaInfo />}
                        title="Sobre a cidade"
                        description="Conheça mais sobre Maricá"
                        page="/"
                    />
                </div>
            </div>
        </Main>
        <BlueFooter />
        <Footer />
    </>
);
