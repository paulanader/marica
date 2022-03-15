import { useCallback, useEffect } from 'react';
import { CategoriesPill } from '../../components/CategoriesPill';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { PageTitle } from '../../components/PageTitle';
import { PillMap } from '../../components/PillMap';
import { Search } from '../../components/Search';
import { useEvents } from '../../hooks/EventProvider';
import { EventCard } from '../../components/EventCard';
import { MainLoader } from '../../components/MainLoader';

export const Events: React.FC = () => {
    const { events, categories, isLoading, setCategory, getEvents } =
        useEvents();

    useEffect(() => {
        getEvents('');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = useCallback((searchText: string): void => {
        getEvents(searchText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Header />
            <Main>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <PageTitle title="Eventos" url="/" />
                        </div>
                        <div className="d-flex col-md-6">
                            <PillMap url="eventos" />
                            <Search
                                placeHolderValue="Buscar Eventos"
                                onSearch={handleSearch}
                            />
                        </div>
                    </div>
                    {isLoading && <MainLoader />}
                    {!isLoading && (
                        <CategoriesPill
                            categories={categories}
                            url="eventos"
                            color="success"
                            text="white"
                            _setCategory={setCategory}
                            size={6}
                        />
                    )}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {!isLoading &&
                            events.map(event => {
                                return (
                                    <div
                                        key={event.id}
                                        className="col d-flex align-items-stretch mb-3"
                                    >
                                        <EventCard
                                            item={event}
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
