import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { CategoriesPill } from '../../components/CategoriesPill';
import { Description } from '../../components/Description';
import { Footer } from '../../components/Footer';
import { LocationInMap } from '../../components/LocationInMap';
import { Header } from '../../components/Header';
import { Information } from '../../components/Information';
import { MyApp } from '../../components/MyApp';
import { PageTitle } from '../../components/PageTitle';
import { SliderImage } from '../../components/SpotSlider';
import { IsLoadingSpot } from '../../components/IsLoadingSpot';
import { Main } from '../../components/Main';
import { Wrapper } from '../../components/Wrapper';
import { useEventSpaces } from '../../hooks/EventSpaceProvider';
import { UnitaryIsLoading } from '../../components/UnitaryIsLoading';

export const EventSpace: React.FC = () => {
    const { eventSpace, isLoading, setCategory, getEventSpace } =
        useEventSpaces();
    const { id } = useParams();

    useEffect(() => {
        getEventSpace(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {isLoading && <UnitaryIsLoading />}
            {!isLoading && eventSpace?.id && (
                <SliderImage images={eventSpace.images} />
            )}
            <Main>
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col-lg-8">
                            {isLoading && <IsLoadingSpot />}
                            {!isLoading && eventSpace?.id && (
                                <>
                                    <PageTitle
                                        title={eventSpace.nome}
                                        category="Espaços para Eventos"
                                        url="/espacos-para-eventos"
                                    />
                                    <div className="mb-4 mb-md-5">
                                        <CategoriesPill
                                            categories={eventSpace.categorias}
                                            url="espacos-para-eventos"
                                            color="success"
                                            _setCategory={setCategory}
                                            size={6}
                                        />
                                        <Description
                                            description={eventSpace.descricao_t}
                                        />
                                    </div>
                                    <Information
                                        title="Sobre"
                                        addresses={eventSpace.addresses}
                                        phone={eventSpace.phones}
                                        email={eventSpace.email}
                                        site={eventSpace.site}
                                        socialMedia={eventSpace.redes}
                                        openingHour={
                                            eventSpace.horario_funcionamento
                                        }
                                    />
                                    {Array.isArray(eventSpace.espacos) &&
                                        eventSpace.espacos.length > 0 && (
                                            <Information
                                                title="Espaços"
                                                space={eventSpace.espacos}
                                            />
                                        )}
                                    {Array.isArray(eventSpace.equipamentos) &&
                                        eventSpace.equipamentos.length > 0 && (
                                            <Information
                                                title="Equipamentos"
                                                equipaments={
                                                    eventSpace.equipamentos
                                                }
                                            />
                                        )}
                                    {Array.isArray(eventSpace.estruturas) &&
                                        eventSpace.estruturas.length > 0 && (
                                            <Information
                                                title="Estruturas"
                                                structure={
                                                    eventSpace.estruturas
                                                }
                                            />
                                        )}
                                    {Array.isArray(eventSpace.restricoes) &&
                                        eventSpace.restricoes.length > 0 && (
                                            <Information
                                                title="Restrições"
                                                restriction={
                                                    eventSpace.restricoes
                                                }
                                            />
                                        )}

                                    {Array.isArray(
                                        eventSpace.formas_pagamento
                                    ) &&
                                        eventSpace.formas_pagamento.length >
                                            0 && (
                                            <Information
                                                title="Formas de pagamento"
                                                payment={
                                                    eventSpace.formas_pagamento
                                                }
                                            />
                                        )}
                                </>
                            )}
                        </div>

                        <div className="col-lg-4 mb-5">
                            {isLoading && (
                                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                                    <TailSpin
                                        ariaLabel="loading-indicator"
                                        color="#6c757d"
                                    />
                                </div>
                            )}
                            {!isLoading && eventSpace && (
                                <>
                                    <LocationInMap
                                        addresses={eventSpace.addresses}
                                    />
                                    <MyApp />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Main>
            <Footer />
        </Wrapper>
    );
};
