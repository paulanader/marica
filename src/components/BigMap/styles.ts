import styled from 'styled-components';

export const CardStyles = styled.div`
    width: 400px;
    position: absolute;
    bottom: 75px;
    transform: translateX(-50%);
    z-index: 1;

    &:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 20px 20px 0;
        border-color: #ffffff transparent;
        display: block;
        width: 0;
        z-index: 1;
        bottom: -20px;
        left: 51%;
        transform: translateX(-50%);
    }
`;

export const WrapperMarker = styled.div`
    position: relative;
`;

export const StylesMarker = styled.button`
    transform: translate(-50%, -20px);
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
`;

export const PageTitleStyles = styled.div`
    position: absolute;
    top: 130px;
    left: 30px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    z-index: 1;

    @media (max-width: 767px) {
        top: 100px;
        right: 15px;
    }
`;
