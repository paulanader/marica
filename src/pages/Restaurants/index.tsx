import { useCallback, useEffect } from 'react';
import { CategoriesPill } from '../../components/CategoriesPill';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { PageTitle } from '../../components/PageTitle';
import { PillMap } from '../../components/PillMap';
import { Search } from '../../components/Search';
import { useRestaurants } from '../../hooks/RestaurantProvider';
import { Card } from '../../components/Card';
import { MainLoader } from '../../components/MainLoader';
import { setTitle } from '../../utils/title';

export const Restaurants: React.FC = () => {
    const { restaurants, categories, isLoading, setCategory, getRestaurants } =
        useRestaurants();

    useEffect(() => {
        getRestaurants('');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`Comércio Local`);
    }, []);

    useEffect(() => {
        setTitle(`Restaurantes`);
    }, []);

    const handleSearch = useCallback((searchText: string): void => {
        getRestaurants(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Header />
            <Main>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <PageTitle title="Bares e Restaurantes" url="/" />
                        </div>
                        <div className="d-flex col-md-6">
                            <PillMap url="bares-e-restaurantes" />
                            <Search
                                placeHolderValue="Buscar Bares e Restaurantes"
                                onSearch={handleSearch}
                            />
                        </div>
                    </div>
                    {isLoading && <MainLoader />}
                    {!isLoading && (
                        <CategoriesPill
                            categories={categories}
                            url="bares-e-restaurantes"
                            color="success"
                            text="white"
                            _setCategory={setCategory}
                            size={6}
                        />
                    )}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        {!isLoading &&
                            restaurants.map(restaurant => {
                                return (
                                    <div
                                        key={restaurant.id}
                                        className="col d-flex align-items-stretch mb-3"
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
                </div>
            </Main>
            <Footer />
        </>
    );
};
