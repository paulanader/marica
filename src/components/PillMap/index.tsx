import { FaMapMarkedAlt } from 'react-icons/fa';
import { Radius } from './styles';

interface ICategoriesProps {
    url: string;
}

export const PillMap: React.FC<ICategoriesProps> = ({ url }) => {
    return (
        <div className="d-flex flex-wrap m-0 list-unstyled align-items-center">
            <div className="text-white">
                <Radius
                    to={`/${url}/mapa`}
                    className="btn btn-primary me-3 mb-1 text-white"
                >
                    <FaMapMarkedAlt className="me-2" />
                    <span className="fs-5">Mapa</span>
                </Radius>
            </div>
        </div>
    );
};
