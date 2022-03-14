import { StylesPill } from './styles';

interface IPillProps {
    url: string;
    color?: string;
    text?: string;
    size?: number;
    _onClick: () => void;
}

export const Pill: React.FC<IPillProps> = ({
    url,
    color = 'success',
    text = 'white',
    children,
    size,
    _onClick,
}) => {
    return (
        <StylesPill
            className={`btn btn-${color} me-3 mb-1 text-${text} fs-${size}`}
            to={url}
            onClick={_onClick}
            font-size="18"
        >
            {children}
        </StylesPill>
    );
};
