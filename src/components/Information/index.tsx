/* eslint-disable camelcase */
import { Fragment } from 'react';
import { BsCheckCircle, BsGlobe, BsTelephone } from 'react-icons/bs';
import { AiFillHome, AiOutlineMail } from 'react-icons/ai';
import { GiKnifeFork, GiHotMeal } from 'react-icons/gi';
import {
    FaWhatsapp,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLocationArrow,
    FaMoneyBillAlt,
    FaBed,
    FaRegMoneyBillAlt,
} from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import SVG from 'react-inlinesvg';
import { MdFreeBreakfast, MdVpnKey } from 'react-icons/md';
import { AddressType } from '../../@types/AddressType';
import { PhoneType } from '../../@types/PhoneType';
import { StylesInfo, StylesList } from './styles';
import { MediaType } from '../../@types/MediaType';
import { OpeningHourType } from '../../@types/OpeningHourType';
import { TravalerType } from '../../@types/TravalerType';
import { StructureType } from '../../@types/StructureType';
import { PaymentType } from '../../@types/PaymentType';
import { RestrictionType } from '../../@types/RestrictionType';
import { PriceRange } from '../PriceRange';
import { LabelType } from '../../@types/LabelType';
import { SpaceType } from '../../@types/SpaceType';
import { EquipamentType } from '../../@types/EquipamentType';

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
    structure?: StructureType[];
    payment?: PaymentType[];
    restriction?: RestrictionType[];
    rooms?: number;
    beds?: number;
    breakfast?: boolean;
    breakfast_guest?: boolean;
    lunch?: boolean;
    lunch_guest?: boolean;
    dinner?: boolean;
    dinner_guest?: boolean;
    price_range?: number | null;
    cookery?: LabelType[];
    space?: SpaceType[];
    equipaments?: EquipamentType[];
    ticket?: boolean;
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
    structure,
    payment,
    restriction,
    rooms,
    beds,
    breakfast,
    breakfast_guest,
    lunch,
    lunch_guest,
    dinner,
    dinner_guest,
    price_range,
    cookery,
    space,
    equipaments,
    ticket,
}) => {
    return (
        <>
            <StylesInfo className="mb-4 mt-3">
                <h2>{title}</h2>
            </StylesInfo>
            {Array.isArray(addresses) && addresses.length > 0 && (
                <StylesList className="d-flex align-items-center mb-3 ">
                    {addresses.map(address => (
                        <Fragment key={address.id}>
                            <div className="d-flex">
                                <FaLocationArrow size="22" className="me-3" />
                            </div>
                            <div className="m-0">
                                <p className="mt-0 mb-0"> {address.label}</p>
                            </div>
                        </Fragment>
                    ))}
                </StylesList>
            )}
            {Array.isArray(phone) && phone.length > 0 && (
                <StylesList className="mb-3">
                    {phone.map(info => (
                        <Fragment key={info.id}>
                            <div className="d-flex align-items-center">
                                {info.whatsapp ? (
                                    <FaWhatsapp size="22" className="me-3" />
                                ) : (
                                    <BsTelephone size="22" className="me-3" />
                                )}
                                <div className="m-0 mt-3">
                                    <p className="fs-sm">{info.nome}</p>
                                    <p className="fs-lg">{info.number}</p>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </StylesList>
            )}
            {email && (
                <StylesList className="d-flex mb-3">
                    <div className="align-items-center">
                        <AiOutlineMail className="me-3" size="22" />
                    </div>
                    <div className="m-0">
                        <p className="d-flex">{email}</p>
                    </div>
                </StylesList>
            )}
            {site && (
                <StylesList className="d-flex fs-md mb-3">
                    <div className="align-items-center">
                        <BsGlobe className="me-3" size="22" />
                    </div>
                    <div className="m-0">
                        <p className="fs-lg m-0">{site}</p>
                    </div>
                </StylesList>
            )}
            {Array.isArray(socialMedia) && socialMedia.length > 0 && (
                <StylesList className="mb-3">
                    {socialMedia.map(info => {
                        const Icon = icons[info.nome];
                        return (
                            <Fragment key={info.user}>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <Icon className="me-3" size="22" />
                                    </div>
                                    <div className="m-0 mt-3">
                                        <p>{info.user}</p>
                                    </div>
                                </div>
                            </Fragment>
                        );
                    })}
                </StylesList>
            )}
            {Array.isArray(openingHour) && openingHour.length > 0 && (
                <StylesList className="d-flex fs-md mb-3">
                    <div>
                        <BiTimeFive className="me-3" size="22" />
                    </div>

                    <div className="m-0">
                        <table>
                            {openingHour.map(info => (
                                <tbody key={info.label}>
                                    <tr>
                                        <td>
                                            <p className="fw-bold w-120 me-2">
                                                {info.label}
                                            </p>
                                        </td>
                                        <td>
                                            <p>
                                                {`${info.horario.abre} às ${info.horario.fecha}`}
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </StylesList>
            )}
            {tips && (
                <StylesList className="mb-3">
                    <p>{tips}</p>
                </StylesList>
            )}
            {price && (
                <StylesList className="d-flex fs-md mb-3">
                    <div className="align-items-center">
                        <FaMoneyBillAlt size="22" className="me-3" />
                    </div>
                    <div className="m-0">
                        <p className="fs-lg m-0">{price}</p>
                    </div>
                </StylesList>
            )}
            {Array.isArray(travaler) && travaler.length > 0 && (
                <StylesList className="fs-md mb-3">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-3">
                        {travaler.map(trav => (
                            <Fragment key={trav.label}>
                                <div className="col">
                                    <div className="d-flex fs-md mb-3">
                                        <BsCheckCircle
                                            className="me-3"
                                            size="22"
                                        />
                                        <p className="fs-lg m-0">
                                            {trav.label}
                                        </p>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </StylesList>
            )}
            {Array.isArray(structure) && structure.length > 0 && (
                <StylesList className="container fs-md mb-3">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-3 align-items-center">
                        {structure.map(ben => (
                            <Fragment key={ben.label}>
                                <div className="col">
                                    <div className="d-flex fs-md mb-3">
                                        <SVG
                                            src={`${ben.icone}/menu.svg`}
                                            width={22}
                                            height="auto"
                                            title="Menu"
                                            className="me-3"
                                            fill="#6ebd00"
                                        />
                                        <p className="fs-lg m-0">{ben.label}</p>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </StylesList>
            )}
            {Array.isArray(payment) && payment.length > 0 && (
                <StylesList className="container d-flex fs-md mb-5">
                    <div className="row row-cols-1 row-cols-lg-3">
                        {payment.map(pay => (
                            <div className="col" key={pay.label}>
                                <div className="d-flex align-items-center mt-3">
                                    <SVG
                                        src={`${pay.icone}/menu.svg`}
                                        width={22}
                                        title="Menu"
                                        className="me-3"
                                        fill="#6ebd00"
                                    />
                                    <p className="fs-lg m-0">{pay.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </StylesList>
            )}
            {Array.isArray(restriction) && restriction.length > 0 && (
                <StylesList className="container d-flex fs-md mb-3">
                    <div className="row row-cols-1">
                        {restriction.map(restrict => (
                            <div className="col" key={restrict.label}>
                                <div className="d-flex align-items-center mt-3">
                                    <SVG
                                        src={`${restrict.icone}/menu.svg`}
                                        width={22}
                                        title="Menu"
                                        className="me-3"
                                        fill="#6ebd00"
                                    />
                                    <p className="fs-lg m-0">
                                        {restrict.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </StylesList>
            )}
            <div className="row row-cols-1 row-cols-lg-2 m-0">
                {rooms && (
                    <StylesList className="col d-flex mb-3">
                        <div className="align-items-center">
                            <MdVpnKey className="me-3" size="22" />
                        </div>
                        <div className="m-0">
                            {rooms > 1 ? (
                                <p className="d-flex">{`${rooms} quartos`}</p>
                            ) : (
                                <p className="d-flex">{`${rooms} quarto`}</p>
                            )}
                        </div>
                    </StylesList>
                )}
                {beds && (
                    <StylesList className="col d-flex mb-3">
                        <div className="align-items-center">
                            <FaBed className="me-3" size="22" />
                        </div>
                        <div className="m-0">
                            <p className="d-flex">{`${beds} quartos`}</p>
                        </div>
                    </StylesList>
                )}
            </div>
            <div className="row row-cols-1 row-cols-lg-2 m-0">
                {breakfast && (
                    <StylesList className="col d-flex mb-3">
                        <div className="align-items-center">
                            <MdFreeBreakfast className="me-3" size="22" />
                        </div>
                        <div className="m-0">
                            <h3>Café da manhã</h3>
                            {breakfast_guest ? (
                                <p className="d-flex">Aceita não-hóspedes</p>
                            ) : (
                                <p className="d-flex">Apenas hóspedes</p>
                            )}
                        </div>
                    </StylesList>
                )}
                {lunch && (
                    <StylesList className="col d-flex mb-3">
                        <div className="align-items-center">
                            <GiKnifeFork className="me-3" size="22" />
                        </div>
                        <div className="m-0">
                            <h3>Almoço</h3>
                            {lunch_guest ? (
                                <p className="d-flex">Aceita não-hóspedes</p>
                            ) : (
                                <p className="d-flex">Apenas hóspedes</p>
                            )}
                        </div>
                    </StylesList>
                )}
                {dinner && (
                    <StylesList className="col d-flex mb-3">
                        <div className="align-items-center">
                            <GiHotMeal className="me-3" size="22" />
                        </div>
                        <div className="m-0">
                            <h3>Jantar</h3>
                            {dinner_guest ? (
                                <p className="d-flex">Aceita não-hóspedes</p>
                            ) : (
                                <p className="d-flex">Apenas hóspedes</p>
                            )}
                        </div>
                    </StylesList>
                )}
                {price_range && <PriceRange value={price_range} />}
                {Array.isArray(cookery) && cookery.length > 0 && (
                    <StylesList className="fs-md mb-3">
                        <div className="row row-cols-1 row-cols-lg-3">
                            {cookery.map(cook => (
                                <Fragment key={cook.label}>
                                    <div className="col">
                                        <div className="d-flex fs-md mb-3">
                                            <BsCheckCircle
                                                className="me-3"
                                                size="22"
                                            />
                                            <p className="fs-lg m-0">
                                                {cook.label}
                                            </p>
                                        </div>
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </StylesList>
                )}
                {Array.isArray(space) && space.length > 0 && (
                    <StylesList>
                        <div className="m-0 container">
                            <div className="row row-cols-1">
                                {space.map(info => (
                                    <div
                                        key={info.id}
                                        className="d-flex fs-md mb-3"
                                    >
                                        <div>
                                            <AiFillHome
                                                className="me-3"
                                                size="22"
                                            />
                                        </div>
                                        <div className="col">
                                            <p className="fw-bold w-120 me-2 mb-0">
                                                {info.nome}
                                            </p>
                                            <p className="fs-sm text-muted mb-2 fst-italic">
                                                {info.descricao}
                                            </p>
                                            <p className="fs-sm text-muted mb-2">
                                                {`Área: ${info.area}m²`}
                                            </p>
                                            <p className="fs-sm text-muted mb-2">
                                                {`Pé direito: ${info.pe_direito}m`}
                                            </p>
                                            <p className="fs-sm text-muted mb-2">
                                                {`Medidas: ${info.medidas}`}
                                            </p>
                                            <p className="fs-sm text-muted mb-2">
                                                {`Capacidade: ${info.capacidade} pessoas`}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </StylesList>
                )}
                {Array.isArray(equipaments) && equipaments.length > 0 && (
                    <StylesList className="fs-md mb-3">
                        <div className="row row-cols-1 row-cols-lg-3">
                            {equipaments.map(equipament => (
                                <div
                                    key={equipament.id}
                                    className="d-flex fs-md mb-3"
                                >
                                    <div>
                                        <BsCheckCircle
                                            className="me-3"
                                            size="22"
                                        />
                                    </div>
                                    <div className="col">
                                        <p className="fs-lg m-0">
                                            {`${equipament.total}x ${equipament.label}`}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </StylesList>
                )}
                {ticket && (
                    <StylesList className="fs-md mb-3">
                        <div className="row row-cols-1 row-cols-lg-3">
                            <div className="d-flex fs-md mb-3">
                                <div>
                                    <FaRegMoneyBillAlt
                                        className="me-3"
                                        size="22"
                                    />
                                </div>
                                <div className="col">
                                    {ticket ? (
                                        <p className="fs-lg m-0">Gratuita</p>
                                    ) : (
                                        <p className="fs-lg m-0">Pago</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </StylesList>
                )}
            </div>
        </>
    );
};
