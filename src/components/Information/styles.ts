import styled from 'styled-components';

export const StylesInfo = styled.div`
    h2 {
        font-size: 22px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(204, 204, 204);
    }
`;

export const StylesList = styled.div`
    list-style-type: none;
    text-decoration: none;
    font-size: 18px;
    color: var(--success);
    --bs-gutter-x: 0;

    p {
        font-size: 18px;
        color: var(--dark);
    }
    h2 {
        font-size: 20px;
        font-weight: 700;
        color: var(--dark);
    }

    h3 {
        font-size: 16px;
        color: var(--dark);
    }

    SVG {
        color: var(--success);
    }
`;

export const TableStales = styled.ul`
    list-style-type: none;
    text-decoration: none;
    box-sizing: border-box;
    font-size: 18px;
    color: var(--success);

    p {
        font-size: 22px;
        font-size: 18px;
        color: var(--dark);
    }
`;
