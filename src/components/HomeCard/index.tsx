import { Link } from 'react-router-dom';

import { Button, DescriptionStyles, ImageLink, LinkDecoration } from './styles';

interface IHomeCardProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div className="col d-flex h-100">
        <div className="card text-center border-0 align-self-stretch w-100">
            <DescriptionStyles className="card-body">
                <ImageLink to={page} className="fs-1 text-decoration-none">
                    {image}
                </ImageLink>
                <h1 className="card-title fs-sm mb-2 mt-0">
                    <LinkDecoration to={page} className="text-dark">
                        {title}
                    </LinkDecoration>
                </h1>
                <p className="card-text pb-4 text-muted">{description}</p>
                <Button type="button">
                    <Link to={page}>Acessar</Link>
                </Button>
            </DescriptionStyles>
        </div>
    </div>
);
