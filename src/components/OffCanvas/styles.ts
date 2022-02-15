import styled from "styled-components";

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

    li {
        list-style-type: none;
        text-decoration: none;

        & + li {
            margin-top: 20px;
        }
    }
`;

export const Content = styled.div`
    text-decoration: none;
    background: rgb(51, 51, 51, 0.7);
    list-style-type: none;

    a {
        list-style-type: none;
        text-decoration: none;
        font-size: 13px;
        color: var(--white);
    }
`;
