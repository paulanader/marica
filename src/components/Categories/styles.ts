import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Pill = styled(Link)`
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 30px;
    padding: 0px 20px;
    font-family: Roboto, sans-serif;
    font-size: 18px;
`;
