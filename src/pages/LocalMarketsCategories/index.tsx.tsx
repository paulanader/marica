import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { PageTitle } from '../../components/PageTitle';
import { Search } from '../../components/Search';
import { PillMap } from '../../components/PillMap';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';
import { useLocalMarkets } from '../../hooks/LocalMarketsProvider';
import { Card } from '../../components/Card';

export const LocalMarketsCategories: React.FC = () => {
    const {
        localMarkets,
        category,
        getLocalMarketsByCategory,
        getLocalMarkets,
    } = useLocalMarkets();
    const { id } = useParams();

    useEffect(() => {
        getLocalMarketsByCategory(parseInt(id ?? '', 10));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSearch = useCallback((searchText: string): void => {
        getLocalMarkets(searchText);
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
                                    url="/comercio-local"
                                    category="Comercio Local"
                                />
                            </div>
                            <div className="col d-flex">
                                <PillMap url={`comercio-local/${id}`} />
                                <Search
                                    placeHolderValue="Buscar Comércio Local"
                                    onSearch={handleSearch}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        {localMarkets.map(localMarket => {
                            return (
                                <div
                                    key={localMarket.id}
                                    className="col d-flex align-items-stretch"
                                >
                                    <Card
                                        item={localMarket}
                                        url={`/comercio-local/${localMarket.id}`}
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
