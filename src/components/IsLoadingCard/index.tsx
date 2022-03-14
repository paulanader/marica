import { IsLoadingCard } from './isLoadingCard';

interface ILoadingCardsProps {
    show: boolean;
    numberOfCards?: number;
}

export const LoadingCards: React.FC<ILoadingCardsProps> = ({
    show,
    numberOfCards = 3,
}) =>
    show ? (
        <div className="row row-cols-3">
            {[...Array(numberOfCards)].map(() => (
                <div className="col">
                    <IsLoadingCard />
                </div>
            ))}
        </div>
    ) : null;
