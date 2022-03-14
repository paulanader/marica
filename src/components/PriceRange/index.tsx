/* eslint-disable react-hooks/exhaustive-deps */

import { FiDollarSign } from 'react-icons/fi';

interface IValueProps {
    value: number;
}

export const PriceRange: React.FC<IValueProps> = ({ value }) => {
    const valueArray = [false, false, false, false, false].map(
        (item, index) => value > index
    );

    return (
        <ul className="align-items-center p-0">
            <li className="d-flex align-items-center pb-4">
                {valueArray.map(item => (
                    <div className={`text-${item ? 'success' : 'muted'}`}>
                        <FiDollarSign size={22} />
                    </div>
                ))}
            </li>
        </ul>
    );
};
// <FiDollarSign key={i} size="22" color="#64BD00" />
// <FiDollarSign key={i + value} size="22" color="#6c757d" />
