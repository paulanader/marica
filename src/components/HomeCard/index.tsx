import { Link } from 'react-router-dom';

import { Button, ImageLink } from './styles';

interface IHomeCardProps {
    image: any;
    title: string;
    description: string;
    page: string;
}

export const HomeCard: React.FC<IHomeCardProps> = ({
    image,
    title,
    description,
    page,
}) => (
    <div className="col d-flex">
        <div className="card text-center border-0 align-self-stretch w-100">
            <ImageLink to={page} className="fs-1 text-decoration-none">
                {' '}
                {image}
            </ImageLink>
            <div className="card-body">
                <h1 className="card-title fs-5">
                    <Link to={page} className="text-dark text-decoration-none">
                        {title}
                    </Link>
                </h1>
                <p className="card-text pb-4 text-muted">{description}</p>
                <Button type="button">Acessar</Button>
            </div>
        </div>
    </div>
);
