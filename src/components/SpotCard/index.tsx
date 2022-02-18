import { Link } from 'react-router-dom';
import { SpotType } from '../../@types/SpotType';
import { Categories } from '../Categories';
import { StylesLink } from './styles';

interface ISpotCardProps {
    item: SpotType;
    url: string;
}

export const SpotCard: React.FC<ISpotCardProps> = ({ item, url }) => {
    return (
        <StylesLink className="card mb-3">
            <img className="img-responsive" src={item.capa} alt={item.nome} />
            <div className="card-body">
                <Link to={url}>
                    <h2 className="card-title">{item.nome}</h2>
                </Link>

                <Categories
                    categories={item.categorias}
                    url="pontos-turisticos"
                    color="light"
                    text="dark"
                />
                <div className="text-dark">
                    {item.enderecos.map(address => (
                        <p>{address.label}</p>
                    ))}
                </div>
            </div>
        </StylesLink>
    );
};
