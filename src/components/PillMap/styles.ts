import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Radius = styled(Link)`
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 20px;
    height: 40px;
    font-family: Roboto, sans-serif;
    color: var(--light);

    &:hover {
        background-color: var(--primary);
        filter: brightness(1.1);
    }
`;
