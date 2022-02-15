import styled from 'styled-components';

export const AllBlueFooter = styled.footer`
    background: var(--primary);
`;

export const BlueMainFooter = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        color: var(--light);
        font-weight: 700 bold;
        font-size: 60px;
        margin-bottom: 1.5rem!important;
        box-sizing: border-box;
        display: block;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    p {
        color: var(--light);
        font-size: 22px;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }    

    a {
        text-decoration: none;
    }
`;