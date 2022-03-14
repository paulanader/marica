import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import maricaLogo from '../../assets/logo_conheca_marica.png';
import maricaLogoResponsivo from '../../assets/logoMarica.png';
import { Container } from '../Container';
import { OffCanvasComp } from '../OffCanvas';
import { MainBlue, MainHeader } from './styles';

interface IHeaderProp {
    fixed?: boolean;
}

export const Header: React.FC<IHeaderProp> = ({ fixed = false }) => {
    return (
        <MainBlue className={fixed ? 'fixed' : undefined}>
            <Container>
                <MainHeader className="d-flex justify-content-between h-100 w-100 py-3 align-items-center">
                    <div className="d-flex align-items-center h-100">
                        <OffCanvasComp />
                    </div>
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <Link to="/">
                            <img
                                src={maricaLogoResponsivo}
                                alt="Conheça Maricá"
                                className="img-fluid d-md-none"
                            />
                            <img
                                src={maricaLogo}
                                alt="Conheça Maricá"
                                className="img-fluid d-none d-md-inline"
                            />
                        </Link>
                    </div>
                    <div className="d-none d-md-inline">
                        <a
                            href="https://web.facebook.com/prefeiturademarica"
                            rel="noreferrer"
                            target="_blank"
                            className="fs-5 text-white me-2"
                        >
                            <BsFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com/prefeiturademarica"
                            rel="noreferrer"
                            target="_blank"
                            className="fs-5 text-white me-2"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="https://twitter.com/MaricaRJ"
                            target="_blank"
                            rel="noreferrer"
                            className="fs-5 text-white me-2"
                        >
                            <BsTwitter />
                        </a>
                        <a
                            href="https://twitter.com/MaricaRJ"
                            target="_blank"
                            rel="noreferrer"
                            className="fs-5 text-white me-2"
                        >
                            <BsYoutube />
                        </a>
                    </div>
                </MainHeader>
            </Container>
        </MainBlue>
    );
};
