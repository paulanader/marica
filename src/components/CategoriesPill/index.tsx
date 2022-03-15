import { CategoryType } from '../../@types/CategoryType';
import { Pill } from '../Pill';
import { OverFlow } from './styles';

interface ICategoriesProps {
    categories?: CategoryType[];
    url?: string;
    page?: string;
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
        <OverFlow className="d-flex m-0 mb-3 list-unstyled align-items-start">
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
        </OverFlow>
    );
};
