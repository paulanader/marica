import { IsLoadingPill } from './isLoadingPill';

interface ILoadingCardsProps {
    show: boolean;
    numberOfCards?: number;
}

export const LoadingPills: React.FC<ILoadingCardsProps> = ({
    show,
    numberOfCards = 4,
}) =>
    show ? (
        <div className="row row-cols-4 mb-0 justify-content-evenly">
            {[...Array(numberOfCards)].map(() => (
                <div className="col">
                    <IsLoadingPill />
                </div>
            ))}
        </div>
    ) : null;
