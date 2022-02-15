import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import maricaLogo from '../../assets/logo_conheca_marica.png';
import { OffCanvasComp } from '../OffCanvas';
import { MainBlue, MainHeader } from './styles';

export const Header: React.FC = () => {
    return (
        <MainBlue>
            <MainHeader>
                <div>
                    <OffCanvasComp />
                </div>
                <img src={maricaLogo} alt="Conheça Maricá" />
                <div>
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
        </MainBlue>
    );
};
