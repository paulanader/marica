import {
    FaBed,
    FaBars,
    FaMotorcycle,
    FaRoute,
    FaStoreAlt,
    FaUmbrellaBeach,
    FaInfo,
    FaTicketAlt,
    FaHome,
    FaMicrophoneAlt,
    FaFan,
} from 'react-icons/fa';
import { BiRestaurant } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

export const OffCanvasComp: React.FC = () => {
    return (
        <Container>
            <a
                className="d-block mt-3 fs-5 text-white me-2 border-none"
                data-bs-toggle="offcanvas"
                href="#sidebar"
                role="button"
                aria-controls="sidebar"
            >
                <FaBars /> Menu
            </a>
            <Content
                className="offcanvas offcanvas-start justify-content-end"
                id="sidebar"
                aria-labelledby="sidebar-label"
            >
                <div className="offcanvas-header justify-content-end">
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <ul className="offcanvas-body">
                    <li>
                        <Link to="/" className="fs-5 text-white">
                            <FaHome className="me-3" />
                            <span>Inicial</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaInfo className="me-3" />
                            <span>Sobre a cidade</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/pontos-turisticos"
                            className="fs-5 text-white"
                        >
                            <FaUmbrellaBeach className="me-2" />
                            <span> Pontos Turísticos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaBed className="me-3" />
                            <span>Hotéis e pousadas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <BiRestaurant className="me-3" />
                            <span>Bares e restaurantes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaMotorcycle className="me-3" />
                            <span>Delivery</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaStoreAlt className="me-3" />
                            <span>Comércio Local</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaTicketAlt className="me-3" />
                            <span>Cupons de desconto</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaHome className="me-3" />
                            <span>Espaços para eventos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaMicrophoneAlt className="me-3" />
                            <span>Eventos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaRoute className="me-3" />
                            <span>Roteiros turísticos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaFan className="me-3" />
                            <span>Artesanato</span>
                        </Link>
                    </li>
                </ul>
            </Content>
        </Container>
    );
};
