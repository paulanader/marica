import { Button, DescriptionStyles, ImageLink } from './styles';

interface IHomeCardProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any;
    title: string;
    description: string;
}

export const HomeArtCard: React.FC<IHomeCardProps> = ({
    image,
    title,
    description,
}) => (
    <div className="col d-flex h-100">
        <div className="card text-center border-0 align-self-stretch w-100">
            <ImageLink className="fs-1 text-decoration-none text-dark">
                <a
                    href="https://www.feirartemarica.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-dark"
                >
                    {image}
                </a>
            </ImageLink>
            <DescriptionStyles className="card-body">
                <h1 className="card-title fs-5">
                    <a
                        href="https://www.feirartemarica.com.br/"
                        className="text-dark text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {title}
                    </a>
                </h1>
                <p className="card-text pb-4 text-muted">{description}</p>
                <Button type="button">
                    <a
                        href="https://www.feirartemarica.com.br/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Acessar
                    </a>
                </Button>
            </DescriptionStyles>
        </div>
    </div>
);
