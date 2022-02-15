import { Link } from "react-router-dom";
import styled from "styled-components"


export const Button = styled.button`
    border: 1px solid var(--success);
    background: var(--light);
    border-radius: 20px;
    padding: 0px 20px 0px 20px;
    color: var(--success);

    &:hover {
        color: var(--success);
        background: var(--light);
        border: 1px solid var(--success);
        
    }

    
`;

export const ImageLink = styled(Link)`
    color: var(--dark);

    &:hover {
        color: var(--dark);
    }
`;


