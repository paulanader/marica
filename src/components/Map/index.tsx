import { FaMapMarkedAlt } from 'react-icons/fa';
import { Radius } from './styles';

export const Map: React.FC = () => {
    return (
        <div className="d-flex flex-wrap m-0 list-unstyled align-items-center">
            <div className="text-white">
                <Radius>
                    <FaMapMarkedAlt />
                    <span>Mapa</span>
                </Radius>
            </div>
        </div>
    );
};
