import { FaMotorcycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DeliveryOptionsStyles } from './styles';

interface IDeliveryOptionsProp {
    description: string;
}
export const DeliveryOptions: React.FC<IDeliveryOptionsProp> = ({
    description,
}) => {
    return (
        <DeliveryOptionsStyles className="d-flex align-items-center mb-3 p-3">
            <div className="align-items-center">
                <FaMotorcycle className="me-3" size="22" />
            </div>
            <h2 className="fs-sm m-0">
                <Link to="/">{description}</Link>
            </h2>
        </DeliveryOptionsStyles>
    );
};
