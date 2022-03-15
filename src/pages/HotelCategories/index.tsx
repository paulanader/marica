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
import { useHotels } from '../../hooks/HotelProvider';

export const HotelCategories: React.FC = () => {
    const { hotels, category, getHotelsByCategory, getHotels, setCategory } =
        useHotels();
    const { id } = useParams();

    useEffect(() => {
        getHotelsByCategory(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSearch = useCallback((searchText: string): void => {
        getHotels(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Main>
                <Container>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 justify-content-between align-items-center">
                            <div className="col">
                                <PageTitle
                                    title={category?.label}
                                    url="/hoteis-e-pousadas"
                                    category="Hotéis e Pousadas"
                                />
                            </div>
                            <div className="col d-flex">
                                <PillMap url="hoteis-e-pousadas" />
                                <Search
                                    placeHolderValue="Buscar Hotéis e Pousadas"
                                    onSearch={handleSearch}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        {hotels.map(hotel => {
                            return (
                                <div
                                    key={hotel.id}
                                    className="col d-flex align-items-stretch"
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
                </Container>
            </Main>
            <Footer />
        </>
    );
};
