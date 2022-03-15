import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { BigMap } from '../../components/BigMap';
import { Wrapper } from '../../components/Wrapper';
import { useRestaurants } from '../../hooks/RestaurantProvider';

export const RestaurantsMap: React.FC = () => {
    const { restaurants, getRestaurants, setCategory } = useRestaurants();

    useEffect(() => {
        getRestaurants('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header fixed />
            <div className="d-flex flex-column position-relative flex-grow-1">
                <div>
                    {Array.isArray(restaurants) && restaurants.length > 0 && (
                        <BigMap
                            items={restaurants}
                            title="Bares e Restaurantes"
                            url="bares-e-restaurantes"
                            _setCategory={setCategory}
                        />
                    )}
                </div>
            </div>

            <Footer />
        </Wrapper>
    );
};
