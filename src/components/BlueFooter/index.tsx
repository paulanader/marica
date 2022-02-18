import { AllBlueFooter, BlueMainFooter } from './styles';

import cellImg from '../../assets/cel.png';
import appStoreImg from '../../assets/appstore.png';
import googlePlayImg from '../../assets/googleplay.png';

export const BlueFooter: React.FC = () => {
    return (
        <AllBlueFooter>
            <BlueMainFooter>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-column col-md-7 mb-4 mb-md-0">
                            <h2 className="fw-bold mt-0 mb-4">
                                Conheça nosso aplicativo
                            </h2>
                            <p className="mt-0 mb-4">
                                Tenha o Guia Oficial de Turismo de Maricá a
                                qualquer momento, na palma das suas mãos!
                            </p>
                            <div className="form-row mt-auto justify-content-around clearfix">
                                <div className="col-md-6 float-md-end mb-3 ms-md-3">
                                    <img
                                        className="img-fluid"
                                        src={googlePlayImg}
                                        alt="Google Play"
                                    />
                                </div>
                                <div className="col-6 col-md-5">
                                    <img
                                        className="img-fluid"
                                        src={appStoreImg}
                                        alt="App Store"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 text-center text-md-right">
                            <img
                                className="img-fluid"
                                src={cellImg}
                                alt="Cell Img"
                            />
                        </div>
                    </div>
                </div>
            </BlueMainFooter>
        </AllBlueFooter>
    );
};
