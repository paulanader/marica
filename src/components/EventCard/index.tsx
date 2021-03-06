/* eslint-disable camelcase */

import { EventType } from '../../@types/EventType';
import { useEvents } from '../../hooks/EventProvider';
import { CategoriesPill } from '../CategoriesPill';
import {
    FontSizePillDecoration,
    ImgageCardLink,
    LinkDecoration,
    Margin,
    StylesCard,
} from './styles';

interface IEventCardProps {
    item: EventType;
}

export const EventCard: React.FC<IEventCardProps> = ({ item }) => {
    const { setCategory } = useEvents();

    const datahora_inicio_original = item.datahora_inicio.split(' ');
    const data = datahora_inicio_original[0].split('-');
    const arrayMonth = [
        'JAN',
        'FEV',
        'MAR',
        'ABR',
        'MAI',
        'JUN',
        'JUL',
        'AGO',
        'SET',
        'OUT',
        'NOV',
        'DEZ',
    ];

    return (
        <StylesCard className="card rounded rounded-top w-100 h-100">
            <ImgageCardLink to={`${item.id}`}>
                <img
                    className="img-responsive"
                    src={item.capa}
                    alt={item.nome}
                />
            </ImgageCardLink>
            <div className="card-body d-flex">
                <div className="mr-3">
                    <div className="text-center">
                        <p className="text-danger text-uppercase">
                            {arrayMonth[parseInt(data[1], 10) - 1]}
                        </p>
                        <p className="text-dark mb-0">
                            {parseInt(data[2], 10)}
                        </p>
                    </div>
                </div>
                <Margin className="px-3">
                    <h2 className="card-title fs-md fw-bold mt-0 mb-2">
                        <LinkDecoration to={`/eventos/${item.id}`}>
                            {item.nome}
                        </LinkDecoration>
                    </h2>
                    <FontSizePillDecoration>
                        <CategoriesPill
                            categories={item.categorias}
                            url="eventos"
                            color="light"
                            text="dark"
                            _setCategory={setCategory}
                        />
                    </FontSizePillDecoration>
                </Margin>
            </div>
            {item.enderecos.map(address => (
                <p className="text-break fs-6 text-muted mt-0 mb-3 p-3">
                    {address.label}
                </p>
            ))}
        </StylesCard>
    );
};
