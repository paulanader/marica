import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { PageTitle } from '../../components/PageTitle';
import { Search } from '../../components/Search';
import { Card } from '../../components/Card';
import { PillMap } from '../../components/PillMap';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';
import { useRestaurants } from '../../hooks/RestaurantProvider';

export const RestaurantsCategories: React.FC = () => {
    const {
        restaurants,
        category,
        getRestaurantsByCategory,
        getRestaurants,
        setCategory,
    } = useRestaurants();
    const { id } = useParams();

    useEffect(() => {
        getRestaurantsByCategory(parseInt(id ?? '', 10));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSearch = useCallback((searchText: string): void => {
        getRestaurants(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Main>
                <Container>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col">
                                <PageTitle
                                    title={category?.label}
                                    url="/bares-e-restaurantes"
                                    category="Bares e Restaurantes"
                                />
                            </div>
                            <div className="col d-flex">
                                <PillMap url="bares-e-restaurantes" />
                                <Search
                                    placeHolderValue="Buscar Bares e Restaurantes"
                                    onSearch={handleSearch}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        {restaurants.map(restaurant => {
                            return (
                                <div
                                    key={restaurant.id}
                                    className="col d-flex align-items-stretch"
                                >
                                    <Card
                                        item={restaurant}
                                        url="bares-e-restaurantes"
                                        _setCategory={setCategory}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </Main>
            <Footer />
        </>
    );
};
