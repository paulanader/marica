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
                            <FaHome /> Inicial
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaInfo /> Sobre a cidade
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/pontos-turisticos"
                            className="fs-5 text-white me-2"
                        >
                            <FaUmbrellaBeach /> Pontos Turístico
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaBed /> Hotéis e pousadas
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <BiRestaurant /> Bares e restaurantes
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaMotorcycle /> Delivery
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaStoreAlt /> Comércio Local
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaTicketAlt /> Cupons de desconto
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaHome /> Espaços para eventos
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaMicrophoneAlt /> Eventos
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaRoute /> Roteiros turísticos
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="fs-5 text-white me-2">
                            <FaFan />
                            Artesanato
                        </Link>
                    </li>
                </ul>
            </Content>
        </Container>
    );
};
