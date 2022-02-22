import { Fragment } from 'react';
import { BsCheckCircle, BsTelephone } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import {
    FaWhatsapp,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLocationArrow,
    FaSitemap,
    FaMoneyBillAlt,
} from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { AddressType } from '../../@types/AddressType';
import { PhoneType } from '../../@types/PhoneType';
import { StylesInfo, StylesList } from './styles';
import { MediaType } from '../../@types/MediaType';
import { OpeningHourType } from '../../@types/OpeningHourType';
import { TravalerType } from '../../@types/TravalerType';
import { BenefitType } from '../../@types/BenefitType';

const icons = {
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    Twitter: FaTwitter,
    Youtube: FaYoutube,
};

interface IInformationProps {
    title: string;
    addresses?: AddressType[];
    phone?: PhoneType[];
    email?: string;
    socialMedia?: MediaType[];
    openingHour?: OpeningHourType[];
    tips?: string;
    site?: string;
    price?: string;
    travaler?: TravalerType[];
    benefit?: BenefitType[];
}

export const Information: React.FC<IInformationProps> = ({
    title,
    addresses,
    phone,
    email,
    socialMedia,
    openingHour,
    tips,
    site,
    price,
    travaler,
    benefit,
}) => {
    return (
        <>
            <StylesInfo>
                <h2>{title}</h2>
            </StylesInfo>
            {addresses && (
                <StylesList className="d-flex align-items-center">
                    {addresses.map(address => (
                        <Fragment key={address.id}>
                            <div className="d-flex">
                                <FaLocationArrow size="18" className="me-3" />
                            </div>
                            <div className="m-0">
                                <p className="mt-0 mb-0"> {address.label}</p>
                            </div>
                        </Fragment>
                    ))}
                </StylesList>
            )}
            {phone && (
                <StylesList>
                    {phone.map(info => (
                        <div key={info.id}>
                            <div className="d-flex align-items-center">
                                {info.whatsapp ? (
                                    <FaWhatsapp size="18" className="me-3" />
                                ) : (
                                    <BsTelephone size="18" className="me-3" />
                                )}
                                <div className="m-0">
                                    <p className="fs-sm mt-0 mb-0">
                                        {info.nome}
                                    </p>
                                    <p className="fs-lg m-0">{info.number}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </StylesList>
            )}
            {email && (
                <StylesList className="d-flex">
                    <div className="align-items-center">
                        <AiOutlineMail className="me-3" />
                    </div>
                    <div className="m-0">
                        <p className="d-flex">{email}</p>
                    </div>
                </StylesList>
            )}
            {socialMedia && (
                <StylesList className="d-flex">
                    {socialMedia.map(info => {
                        const Icon = icons[info.nome];
                        return (
                            <>
                                <div>
                                    <Icon className="me-3" />
                                </div>
                                <p>{info.user}</p>
                            </>
                        );
                    })}
                </StylesList>
            )}
            {Array.isArray(openingHour) && openingHour.length > 0 && (
                <StylesList className="d-flex fs-md mb-3">
                    <div className="align-items-center">
                        <BiTimeFive className="me-3" />
                    </div>
                    {openingHour.map(info => (
                        <div>
                            <table className="m-0">
                                <tbody>
                                    <tr>
                                        <td className="fs-sm mt-0 mb-0">
                                            {info.label}
                                            {info.horario.abre} às
                                            {info.horario.fecha}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </StylesList>
            )}
            {tips && (
                <StylesList>
                    <p>{tips}</p>
                </StylesList>
            )}
            {site && (
                <StylesList className="d-flex fs-md mb-3">
                    <div className="align-items-center">
                        <FaSitemap className="me-3" />
                    </div>
                    <div className="m-0">
                        <p className="fs-lg m-0">{site}</p>
                    </div>
                </StylesList>
            )}
            {price && (
                <StylesList className="d-flex fs-md mb-3">
                    <div className="align-items-center">
                        <FaMoneyBillAlt className="me-3" />
                    </div>
                    <div className="m-0">
                        <p className="fs-lg m-0">{price}</p>
                    </div>
                </StylesList>
            )}
            {travaler && (
                <StylesList className="container d-flex fs-md mb-3">
                    <div className="row row-cols-3">
                        {travaler.map(trav => (
                            <div className="col">
                                <div className="d-flex align-items-center">
                                    <BsCheckCircle className="me-3" />
                                    <p className="fs-lg m-0">{trav.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </StylesList>
            )}
            {benefit && (
                <StylesList className="container d-flex fs-md mb-3">
                    <div className="row row-cols-3">
                        {benefit.map(ben => (
                            <div className="col">
                                <div className="d-flex align-items-center">
                                    <p>{ben.icone}</p>
                                    <p className="fs-lg m-0">{ben.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </StylesList>
            )}
        </>
    );
};
