import { Fragment } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { FaLocationArrow, FaWhatsapp } from 'react-icons/fa';
import { AddressType } from '../../@types/AddressType';
import { PhoneType } from '../../@types/PhoneType';
import { StylesInfo, StylesList } from './styles';

interface IInformationProps {
    title: string;
    item: AddressType[];
    phone: PhoneType[];
}

export const Information: React.FC<IInformationProps> = ({
    title,
    item,
    phone,
}) => {
    return (
        <>
            <StylesInfo>
                <h2>{title}</h2>
            </StylesInfo>
            {item && (
                <StylesList className="d-flex fs-md mb-3">
                    {item.map(info => (
                        <Fragment key={info.id}>
                            <div className="d-flex flex-stretch justify-content-around me-3 ">
                                <GrLocation size="18" />
                            </div>
                            <div className="m-0">
                                <p className="d-flex"> {info.label}</p>
                            </div>
                        </Fragment>
                    ))}
                </StylesList>
            )}
            {phone && (
                <StylesList className="d-flex fs-md mb-3">
                    {phone.map(info => (
                        <Fragment key={info.id}>
                            <div className="d-flex flex-stretch justify-content-around me-3 ">
                                {info.whatsapp ? (
                                    <FaWhatsapp size="18" />
                                ) : (
                                    <BsTelephone size="18" />
                                )}
                            </div>
                            <div className="m-0">
                                <p className="d-flex"> {info.number}</p>
                            </div>
                        </Fragment>
                    ))}
                </StylesList>
            )}
        </>
    );
};
