import { FaMotorcycle } from 'react-icons/fa';
import { Radius } from './styles';

interface IDeliveryPillProp {
    size?: number;
}

export const DeliveryPill: React.FC<IDeliveryPillProp> = ({ size }) => {
    return (
        <Radius className={`me-3 mb-1 text-white fs-${size} m-0`}>
            <FaMotorcycle className="me-2" />
            <span>Delivery</span>
        </Radius>
    );
};
