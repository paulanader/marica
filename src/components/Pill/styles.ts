import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StylesPill = styled(Link)`
    border-radius: 20px;
    font-size: 12px;
    box-sizing: border-box;
    display: flex;
    margin-block-start: 0.7em;
    justify-content: center;
    align-items: center;
    height: 30px;
    white-space: nowrap;

    &:hover {
        filter: brightness(1.3);
    }
`;
