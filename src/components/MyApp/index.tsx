import appStoreImg from '../../assets/appstore.png';
import googlePlayImg from '../../assets/googleplay.png';
import { AppStyles } from './styles';

export const MyApp: React.FC = () => {
    return (
        <AppStyles className="form-row">
            <h2 className="col-12 fs-md fs-5 fw-bold mt-0 mb-3">
                Conheça nosso app
            </h2>
            <div className="col-6">
                <a
                    href="https://play.google.com/store/apps/details?id=com.marica2030.app"
                    title="Google Play"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="img-fluid p-1"
                        src={googlePlayImg}
                        alt="Google Play"
                    />
                </a>
            </div>
            <div className="col-6">
                <a
                    href="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199"
                    title="App Store"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="img-fluid p-1"
                        src={appStoreImg}
                        alt="App Store"
                    />
                </a>
            </div>
        </AppStyles>
    );
};
