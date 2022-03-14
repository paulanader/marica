import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Contant } from './styles';

interface IPageTitleProps {
    title?: string;
    category?: string;
    url: string;
    title2?: string;
}

export const PageTitle: React.FC<IPageTitleProps> = ({
    title,
    url,
    category,
    title2,
}) => (
    <Contant className="d-flex align-items-center justify-content-start">
        <Link
            className="fs-3 text-white me-2 d-flex align-items-center"
            to={url}
        >
            <MdArrowBack className="text-dark justify-content-start" />
        </Link>
        <div>
            <p className="fs-sm fw-light mt-0 mb-0">{category}</p>
            <h1 className="fs-lg fw-bold m-0">{title}</h1>
            <h2 className="fs-lg fw-bold m-0">{title2}</h2>
        </div>
    </Contant>
);
