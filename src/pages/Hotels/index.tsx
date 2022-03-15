import { useCallback, useEffect } from 'react';
import { Card } from '../../components/Card';
import { CategoriesPill } from '../../components/CategoriesPill';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { MainLoader } from '../../components/MainLoader';
import { PageTitle } from '../../components/PageTitle';
import { PillMap } from '../../components/PillMap';
import { Search } from '../../components/Search';
import { Wrapper } from '../../components/Wrapper';
import { useHotels } from '../../hooks/HotelProvider';

export const Hotels: React.FC = () => {
    const { hotels, categories, isLoading, setCategory, getHotels } =
        useHotels();

    useEffect(() => {
        getHotels('');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSearch = useCallback((searchText: string): void => {
        getHotels(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Wrapper>
            <Header />
            <Main>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <PageTitle title="Hotéis e Pousadas" url="/" />
                        </div>
                        <div className="d-flex col-md-6">
                            <PillMap url="hoteis-e-pousadas" />
                            <Search
                                placeHolderValue="Buscar Hotéis e Pousadas"
                                onSearch={handleSearch}
                            />
                        </div>
                    </div>
                    {isLoading && <MainLoader />}
                    {!isLoading && (
                        <>
                            <CategoriesPill
                                categories={categories}
                                url="hoteis-e-pousadas"
                                color="success"
                                text="white"
                                _setCategory={setCategory}
                                size={6}
                            />
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                                {hotels.map(hotel => {
                                    return (
                                        <div
                                            key={hotel.id}
                                            className="col d-flex align-items-stretch mb-3"
                                        >
                                            <Card
                                                item={hotel}
                                                url="hoteis-e-pousadas"
                                                _setCategory={setCategory}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </div>
            </Main>
            <Footer />
        </Wrapper>
    );
};
