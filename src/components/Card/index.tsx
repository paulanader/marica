import { CategoryType } from '../../@types/CategoryType';
import { EventSpaceType } from '../../@types/EventSpaceType';
import { HotelType } from '../../@types/HotelType';
import { LocalMarketType } from '../../@types/LocalMarketType';
import { RestaurantType } from '../../@types/RestaurantType';
import { SpotType } from '../../@types/SpotType';
import { CategoriesPill } from '../CategoriesPill';
import { DeliveryPill } from '../DeliveryPill';
import {
    FontSizePillDecoration,
    ImgageCardLink,
    LinkDecoration,
    Margin,
    StylesCard,
} from './styles';

interface IDeliveryCardProps {
    item:
        | SpotType
        | HotelType
        | RestaurantType
        | LocalMarketType
        | EventSpaceType;
    url: string;
    _setCategory: (category: CategoryType) => void;
}

export const Card: React.FC<IDeliveryCardProps> = ({
    item,
    url,
    _setCategory,
}) => {
    return (
        <StylesCard className="card rounded rounded-top w-100">
            <ImgageCardLink to={`${item.id}`}>
                <img
                    className="img-responsive"
                    src={item.capa}
                    alt={item.nome}
                />
            </ImgageCardLink>
            <Margin className="card-body">
                <h2 className="card-title fs-md mb-2 mt-0">
                    <LinkDecoration to={`${item.id}`} className="fs-5">
                        {item.nome}
                    </LinkDecoration>
                </h2>
                {!!item.is_delivery && <DeliveryPill />}
                <FontSizePillDecoration>
                    <CategoriesPill
                        categories={item.categorias}
                        url={url}
                        color="light"
                        text="secondary"
                        _setCategory={_setCategory}
                    />
                </FontSizePillDecoration>
            </Margin>
            {item.enderecos.map(address => (
                <p className="text-break fs-6 text-muted mt-0 mb-3 p-3">
                    {address.label}
                </p>
            ))}
        </StylesCard>
    );
};
