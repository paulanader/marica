import { CategoryType } from '../../@types/CategoryType';
import { Pill } from './styles';

interface ICategoriesProps {
    categories: CategoryType[];
    url: string;
    color?: string;
    text?: string;
}

export const Categories: React.FC<ICategoriesProps> = ({
    categories,
    url,
    color = 'success',
    text = 'white',
}) => {
    return (
        <div>
            <ul className="d-flex flex-wrap m-0 list-unstyled align-items-start mb-4">
                {categories.map(category => (
                    <li key={category.id} className="text-white">
                        <Pill
                            className={`btn btn-${color} me-3 text-${text}`}
                            title={category.label}
                            to={`/${url}/categorias/${category.id}`}
                        >
                            {category.label}
                        </Pill>
                    </li>
                ))}
            </ul>
        </div>
    );
};
