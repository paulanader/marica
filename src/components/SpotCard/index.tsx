import { Link } from "react-router-dom";
import { SpotType } from "../../@types/SpotType";
import { Categories } from "../Categories";

interface ISpotCardProps {
    item: SpotType;
    url: string;
}

export const SpotCard: React.FC<ISpotCardProps> = ({ item, url }) => {
    return (
        <div className="card mb-3">
            <img className="img-responsive" src={item.capa} alt={item.nome} />
            <div className="card-body">
                <h2 className="card-title fs-6">
                    <Link to={url} className="text-decoration-none fw-bold">
                        {item.nome}
                    </Link>
                </h2>
                <Categories
                    categories={item.categorias}
                    url="pontos-turisticos"
                    color="light"
                    text="dark"
                />
                <div className="text-dark">
                    {item.enderecos.map((address) => (
                        <p>{address.label}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};
