import styled from 'styled-components';

export const MainStyles = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-200px);

    @media (max-width: 767px) {
        transform: translateY(-100px);
    }
`;

export const Banner = styled.div`
    position: relative;
    height: 80vh;
    background-image: url('https://app-marica-fotos.s3-sa-east-1.amazonaws.com/marica-about.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center top;

    @media (max-width: 767px) {
        height: 0;
        padding-bottom: 100%;
        background-position: center center;
        background-attachment: unset;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100px;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgb(245, 245, 245);
        background: -moz-linear-gradient(
            180deg,
            rgba(245, 245, 245, 0) 0%,
            rgba(245, 245, 245, 1) 75%
        );
        background: -webkit-linear-gradient(
            180deg,
            rgba(245, 245, 245, 0) 0%,
            rgba(245, 245, 245, 1) 75%
        );
        background: linear-gradient(
            180deg,
            rgba(245, 245, 245, 0) 0%,
            rgba(245, 245, 245, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f5f5f5",endColorstr="#f5f5f5",GradientType=1);

        @media (max-width: 767px) {
            height: 50px;
        }
    }
`;
