import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'reactstrap';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { PageTitle } from '../../components/PageTitle';
import { Search } from '../../components/Search';
import { PillMap } from '../../components/PillMap';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';
import { useEventSpaces } from '../../hooks/EventSpaceProvider';

export const EventSpacesCategories: React.FC = () => {
    const {
        eventSpaces,
        category,
        getEventSpacesByCategory,
        getEventSpaces,
        setCategory,
    } = useEventSpaces();
    const { id } = useParams();

    useEffect(() => {
        getEventSpacesByCategory(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <div className="row row-cols-1 row-cols-md-2 justify-content-between align-items-center">
                            <div className="col">
                                <PageTitle
                                    title={category?.label}
                                    url="/espacos-para-eventos"
                                    category="Espaços para Eventos"
                                />
                            </div>
                            <div className="col d-flex">
                                <PillMap url="espacos-para-eventos" />
                                <Search
                                    placeHolderValue="Buscar Espaço para Eventos"
                                    onSearch={handleSearch}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        {eventSpaces.map(eventSpace => {
                            return (
                                <div
                                    key={eventSpace.id}
                                    className="col d-flex align-items-stretch"
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
                </Container>
            </Main>
            <Footer />
        </>
    );
};
