import styled from 'styled-components';

export const MainBlue = styled.header`
    background: var(--primary);
`;

export const MainHeader = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        font-size: 13px;
    }
`;
