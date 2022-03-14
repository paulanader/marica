import { StylesPreWrapper } from './styles';

interface IDescriptionProps {
    description?: string;
}

export const Description: React.FC<IDescriptionProps> = ({ description }) => {
    return (
        <StylesPreWrapper>
            <p className="fs-md mb-5">{description}</p>
        </StylesPreWrapper>
    );
};
