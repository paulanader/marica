import styled from 'styled-components';

export const MainBlue = styled.header`
    background: var(--primary);
    width: 100%;
    &.fixed {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 2;
    }
`;

export const MainHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        font-size: 13px;
    }
`;
