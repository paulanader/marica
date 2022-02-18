import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
    border: 1px solid var(--success);
    background: var(--light);
    border-radius: 20px;
    padding: 0px 20px 0px 20px;

    &:hover {
        color: var(--success);
        background: var(--light);
        border: 1px solid var(--success);
    }

    a {
        text-decoration: none;
        color: var(--success);
    }
`;

export const ImageLink = styled(Link)`
    color: var(--dark);

    &:hover {
        color: var(--dark);
    }
`;

export const DescriptionStyles = styled.div`
    h1 {
        font-size: 16px;
    }
    p {
        font-size: 13px;
    }
`;
