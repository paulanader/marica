import { useCallback, useEffect } from 'react';
import { CategoriesPill } from '../../components/CategoriesPill';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { PageTitle } from '../../components/PageTitle';
import { PillMap } from '../../components/PillMap';
import { Search } from '../../components/Search';
import { useLocalMarkets } from '../../hooks/LocalMarketsProvider';
import { MainLoader } from '../../components/MainLoader';

export const LocalMarkets: React.FC = () => {
    const {
        localMarkets,
        categories,
        isLoading,
        setCategory,
        getLocalMarkets,
    } = useLocalMarkets();

    useEffect(() => {
        getLocalMarkets('');
        window.scrollTo(0, 0);
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
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <PageTitle title="Comércio Local" url="/" />
                        </div>
                        <div className="d-flex col-md-6">
                            <PillMap url="comercio-local" />
                            <Search
                                placeHolderValue="Buscar Comércio Local"
                                onSearch={handleSearch}
                            />
                        </div>
                    </div>
                    {isLoading && <MainLoader />}
                    {!isLoading && (
                        <CategoriesPill
                            categories={categories}
                            url="comercio-local"
                            color="success"
                            text="white"
                            _setCategory={setCategory}
                            size={6}
                        />
                    )}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        {!isLoading &&
                            localMarkets.map(market => {
                                return (
                                    <div
                                        key={market.id}
                                        className="col d-flex align-items-stretch mb-3"
                                    >
                                        <Card
                                            item={market}
                                            url="comercio-local"
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
