import { CategoryType } from '../../@types/CategoryType';
import { Pill } from './styles';

interface ICategoryProps {
    categories: CategoryType[];
    url: string;
}

export const CategoriesCategory: React.FC<ICategoryProps> = ({
    categories,
    url,
}) => {
    return (
        <div>
            <ul className="d-flex flex-wrap m-0 list-unstyled align-items-start mb-4">
                {categories.map(category => (
                    <li key={category.id} className="text-white">
                        <Pill
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
