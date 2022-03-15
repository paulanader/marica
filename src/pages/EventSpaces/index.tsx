import { useCallback, useEffect } from 'react';
import { CategoriesPill } from '../../components/CategoriesPill';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Container } from '../../components/OffCanvas/styles';
import { PageTitle } from '../../components/PageTitle';
import { Search } from '../../components/Search';
import { PillMap } from '../../components/PillMap';
import { Main } from '../../components/Main';
import { useEventSpaces } from '../../hooks/EventSpaceProvider';
import { Card } from '../../components/Card';
import { MainLoader } from '../../components/MainLoader';
import { setTitle } from '../../utils/title';

export const EventSpaces: React.FC = () => {
    const { eventSpaces, categories, isLoading, setCategory, getEventSpaces } =
        useEventSpaces();

    useEffect(() => {
        getEventSpaces('');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`Espaços para Eventos`);
    }, []);

    const handleSearch = useCallback((searchText: string): void => {
        getEventSpaces(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Main>
                <Container>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6">
                                <PageTitle
                                    title="Espaços para Eventos"
                                    url="/"
                                />
                            </div>
                            <div className="d-flex col-md-6">
                                <PillMap url="espacos-para-eventos" />
                                <Search
                                    placeHolderValue="Buscar Espaços para Eventos"
                                    onSearch={handleSearch}
                                />
                            </div>
                        </div>
                        {isLoading && <MainLoader />}
                        {!isLoading && (
                            <CategoriesPill
                                categories={categories}
                                url="espacos-para-eventos"
                                color="success"
                                text="white"
                                _setCategory={setCategory}
                                size={6}
                            />
                        )}
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                            {!isLoading &&
                                eventSpaces.map(eventSpace => {
                                    return (
                                        <div
                                            key={eventSpace.id}
                                            className="col d-flex align-items-stretch mb-3"
                                        >
                                            <Card
                                                item={eventSpace}
                                                url="espacos-para-eventos"
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
        </>
    );
};
