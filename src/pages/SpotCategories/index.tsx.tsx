import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { PageTitle } from '../../components/PageTitle';
import { Search } from '../../components/Search';
import { Card } from '../../components/Card';

import { PillMap } from '../../components/PillMap';
import { useSpots } from '../../hooks/SpotProvider';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';

export const SpotCategories: React.FC = () => {
    const { spots, category, getSpotsByCategory, getSpots, setCategory } =
        useSpots();
    const { id } = useParams();

    useEffect(() => {
        getSpotsByCategory(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = useCallback((searchText: string): void => {
        getSpots(searchText);
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
                                    url="/pontos-turisticos"
                                    category="Pontos Turísticos"
                                />
                            </div>
                            <div className="col d-flex">
                                <PillMap url="pontos-turisticos" />
                                <Search
                                    placeHolderValue="Buscar pontos turísticos"
                                    onSearch={handleSearch}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        {spots.map(spot => {
                            return (
                                <div
                                    key={spot.id}
                                    className="col d-flex align-items-stretch"
                                >
                                    <Card
                                        item={spot}
                                        url="pontos-turisticos"
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
