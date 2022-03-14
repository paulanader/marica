import { CategoryType } from '../../@types/CategoryType';
import { Pill } from '../Pill';

interface ICategoriesProps {
    categories?: CategoryType[];
    url?: string;
    color?: string;
    text?: string;
    size?: number;
    _setCategory: (category: CategoryType) => void;
}

export const CategoriesPill: React.FC<ICategoriesProps> = ({
    categories,
    url,
    color,
    text,
    size,
    _setCategory,
}) => {
    return (
        <ul className="d-flex flex-wrap m-0 mb-3 list-unstyled align-items-start">
            {Array.isArray(categories) &&
                categories.length > 0 &&
                categories.map(category => (
                    <li key={category.id} className="text-white">
                        <Pill
                            url={`/${url}/categorias/${category.id}`}
                            _onClick={() => _setCategory(category)}
                            color={color}
                            text={text}
                            size={size}
                        >
                            {category.label}
                        </Pill>
                    </li>
                ))}
        </ul>
    );
};
