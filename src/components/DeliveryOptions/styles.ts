import styled from 'styled-components';

export const DeliveryOptionsStyles = styled.div`
    list-style-type: none;
    box-sizing: border-box;
    font-size: 18px;
    color: var(--success);
    --bs-gutter-x: 0;
    background-color: rgb(255, 255, 255);
    border-radius: 0.5rem;

    h2 {
        font-size: 18px;
        color: var(--dark);
        padding-bottom: 5px;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    a {
        text-decoration: none;
        color: var(--dark);

        &:hover {
            text-decoration: underline;
        }
    }
`;
