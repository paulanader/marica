import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesPill } from '../../components/CategoriesPill';
import { Description } from '../../components/Description';
import { Footer } from '../../components/Footer';
import { LocationInMap } from '../../components/LocationInMap';
import { Header } from '../../components/Header';
import { MyApp } from '../../components/MyApp';
import { PageTitle } from '../../components/PageTitle';
import { Main } from '../../components/Main';
import { Loader } from '../../components/IsLoading';
import { Information } from '../../components/Information';
import { useEvents } from '../../hooks/EventProvider';
import { EventSlider } from '../../components/EventSlider';
import { DateEvent } from '../../components/DateEvent';
import { UnitaryIsLoading } from '../../components/UnitaryIsLoading';

export const Event: React.FC = () => {
    const { event, isLoading, setCategory, getEvent } = useEvents();

    const { id } = useParams();

    useEffect(() => {
        getEvent(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            {isLoading && <UnitaryIsLoading />}
            {!isLoading && event?.id && <EventSlider images={event.images} />}
            <Main>
                {isLoading && <Loader />}
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col-lg-8">
                            {!isLoading && event?.id && (
                                <>
                                    <PageTitle
                                        title={event.nome}
                                        category="Eventos"
                                        url="/eventos"
                                    />
                                    <div className="mb-4 mb-md-5">
                                        <CategoriesPill
                                            categories={event.categorias}
                                            url="eventos"
                                            color="success"
                                            _setCategory={setCategory}
                                        />
                                        <DateEvent event={event} />
                                        <Description
                                            description={event.descricao_t}
                                        />
                                    </div>
                                    <Information
                                        title="Sobre"
                                        addresses={event.addresses}
                                        phone={event.phones}
                                        email={event.email}
                                        site={event.site}
                                        socialMedia={event.redes}
                                    />
                                    <Information
                                        title="Valor de Entrada"
                                        ticket={event.gratuito}
                                    />
                                </>
                            )}
                        </div>

                        <div className="col-lg-4 mb-5">
                            {!isLoading && event && (
                                <>
                                    <LocationInMap
                                        addresses={event.addresses}
                                    />
                                    <MyApp />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Main>
            <Footer />
        </>
    );
};
