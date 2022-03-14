import { TailSpin } from 'react-loader-spinner';
import { IsLoadingCarousel } from './styles';

export const UnitaryIsLoading: React.FC = () => {
    return (
        <IsLoadingCarousel className="d-flex justify-content-center align-items-center w-100">
            <TailSpin ariaLabel="loading-indicator" color="#6c757d" />
        </IsLoadingCarousel>
    );
};
