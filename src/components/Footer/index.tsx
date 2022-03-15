import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Container } from 'reactstrap';
import { DarkFooter, DarkMainFooter } from './styles';
import MaricaProtegeLogoImg from '../../assets/marica-protege-logo.png';
import MaricaLogoImg from '../../assets/marica-turismo.png';

export const Footer: React.FC = () => {
    return (
        <DarkFooter className="mt-auto">
            <DarkMainFooter>
                <Container>
                    <div className="row row-cols-1 row-cols-md-2 align-items-center py-4">
                        <div className="col d-flex flex-column col-xl-6 mb-4 mb-xl-0 align-items-center ">
                            <div className="d-flex align-items-center justify-content-center justify-content-xl-start mb-2">
                                <a
                                    className="text-white mx-2"
                                    href="https://web.facebook.com/prefeiturademarica"
                                    title="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsFacebook />
                                    <span className="d-none d-lg-inline mx-1">
                                        Facebook
                                    </span>
                                </a>
                                <a
                                    className="text-white mx-2"
                                    href="https://web.facebook.com/prefeiturademarica"
                                    title="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsInstagram />
                                    <span className="d-none d-lg-inline mx-1">
                                        Instagram
                                    </span>
                                </a>
                                <a
                                    className="text-white mx-2"
                                    href="https://web.facebook.com/prefeiturademarica"
                                    title="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsTwitter />
                                    <span className="d-none d-lg-inline mx-1">
                                        Twitter
                                    </span>
                                </a>
                                <a
                                    className="text-white mx-2"
                                    href="https://web.facebook.com/prefeiturademarica"
                                    title="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsYoutube />
                                    <span className="d-none d-lg-inline mx-1">
                                        Youtube
                                    </span>
                                </a>
                            </div>
                            <div className="text-center text-xl-left">
                                <a
                                    className="text-white underline"
                                    href="https://app.marica2030.com.br/login"
                                    title="Área do comerciante"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Área do comerciante
                                </a>
                            </div>
                        </div>
                        <div className="col d-flex flex-column flex-md-row col-xl-6 justify-content-center justify-content-xl-end text-center text-md-left align-items-center ">
                            <div className="mb-md-0">
                                <img
                                    src={MaricaProtegeLogoImg}
                                    alt="Maricá Recebe, Maricá Protege"
                                    height="60"
                                />
                            </div>
                            <div className="mx-md-4 mt-3 mb-md-0">
                                <p className="text-white mb-1">
                                    Manual Gastronomia
                                </p>
                                <p className="text-white">Manual Hospedagem</p>
                            </div>
                            <div>
                                <img src={MaricaLogoImg} alt="Logo Maricá" />
                            </div>
                        </div>
                    </div>
                </Container>
            </DarkMainFooter>
        </DarkFooter>
    );
};
