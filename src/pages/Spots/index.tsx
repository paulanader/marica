import { useCallback, useEffect } from 'react';
import { CategoriesPill } from '../../components/CategoriesPill';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from '../../components/OffCanvas/styles';
import { PageTitle } from '../../components/PageTitle';
import { Search } from '../../components/Search';
import { useSpots } from '../../hooks/SpotProvider';
import { PillMap } from '../../components/PillMap';
import { Main } from '../../components/Main';
import { Card } from '../../components/Card';
import { MainLoader } from '../../components/MainLoader';
import { Wrapper } from '../../components/Wrapper';
import { setTitle } from '../../utils/title';

export const Spots: React.FC = () => {
    const { spots, categories, isLoading, setCategory, getSpots } = useSpots();

    useEffect(() => {
        getSpots('');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`Pontos Turísticos`);
    }, []);

    const handleSearch = useCallback((searchText: string): void => {
        getSpots(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            <Main>
                <Container>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6">
                                <PageTitle title="Pontos Turísticos" url="/" />
                            </div>
                            <div className="d-flex col-md-6">
                                <PillMap url="pontos-turisticos" />
                                <Search
                                    placeHolderValue="Buscar pontos turísticos"
                                    onSearch={handleSearch}
                                />
                            </div>
                        </div>
                        {isLoading && <MainLoader />}
                        {!isLoading && (
                            <CategoriesPill
                                categories={categories}
                                url="pontos-turisticos"
                                color="success"
                                text="white"
                                _setCategory={setCategory}
                                size={6}
                            />
                        )}
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                            {!isLoading &&
                                spots.map(spot => {
                                    return (
                                        <div
                                            key={spot.id}
                                            className="col d-flex align-items-stretch mb-3"
                                        >
                                            <Card
                                                item={spot}
                                                url="hoteis-e-pousadas"
                                                _setCategory={setCategory}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </Container>
            </Main>
            <Footer />
        </Wrapper>
    );
};
