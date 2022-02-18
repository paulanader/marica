import styled from 'styled-components';

export const Container = styled.div`
    text-decoration: none;
    font-size: 18px;
    list-style-type: none;
    text-decoration: none;
    color: var(--white);

    a,
    button {
        list-style-type: none;
        text-decoration: none;
        font-size: 13px;
        color: var(--white);
        border: none;
    }
`;

export const Content = styled.div`
    text-decoration: none;
    background: rgb(51, 51, 51, 0.9);
    list-style-type: none;

    a {
        list-style-type: none;
        text-decoration: none;
        font-size: 13px;
        color: var(--white);
    }

    li {
        border-bottom: 0.5px solid rgb(255, 255, 255, 0.3);
        list-style-type: none;
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 5px;
        margin-top: 15px;
    }
`;
