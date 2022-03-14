import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesPill } from '../../components/CategoriesPill';
import { Description } from '../../components/Description';
import { Footer } from '../../components/Footer';
import { LocationInMap } from '../../components/LocationInMap';
import { Header } from '../../components/Header';
import { Information } from '../../components/Information';
import { MyApp } from '../../components/MyApp';
import { PageTitle } from '../../components/PageTitle';
import { SliderImage } from '../../components/SpotSlider';
import { useSpots } from '../../hooks/SpotProvider';
import { Main } from '../../components/Main';
import { UnitaryIsLoading } from '../../components/UnitaryIsLoading';

export const Spot: React.FC = () => {
    const { spot, isLoading, setCategory, getSpot } = useSpots();
    const { id } = useParams();

    useEffect(() => {
        getSpot(parseInt(id ?? '', 10));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            {isLoading && <UnitaryIsLoading />}
            {!isLoading && spot?.id && <SliderImage images={spot.images} />}
            <Main>
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col-lg-8">
                            {!isLoading && spot?.id && (
                                <>
                                    <PageTitle
                                        title={spot.nome}
                                        category="Pontos Turísticos"
                                        url="/pontos-turisticos"
                                    />
                                    <div className="mb-4 mb-md-5">
                                        <CategoriesPill
                                            categories={spot.categorias}
                                            url="pontos-turisticos"
                                            color="success"
                                            _setCategory={setCategory}
                                            size={6}
                                        />
                                        <Description
                                            description={spot.descricao_t}
                                        />
                                    </div>
                                    <Information
                                        title="Sobre"
                                        addresses={spot.addresses}
                                        phone={spot.phones}
                                        email={spot.email}
                                        site={spot.site}
                                        socialMedia={spot.redes}
                                        openingHour={spot.horario_funcionamento}
                                    />
                                    {Array.isArray(spot.dicas_t) &&
                                        spot.dicas_t.length > 0 && (
                                            <Information
                                                title="Dicas"
                                                tips={spot.dicas_t}
                                            />
                                        )}
                                    {Array.isArray(spot.preco_t) &&
                                        spot.preco_t.length > 0 && (
                                            <Information
                                                title="Valor de entrada"
                                                price={spot.preco_t}
                                            />
                                        )}
                                    {Array.isArray(spot.viajantes) &&
                                        spot.viajantes.length > 0 && (
                                            <Information
                                                title="Tipos de Viajantes"
                                                travaler={spot.viajantes}
                                            />
                                        )}
                                    {Array.isArray(spot.estruturas) &&
                                        spot.estruturas.length > 0 && (
                                            <Information
                                                title="Estruturas"
                                                structure={spot.estruturas}
                                            />
                                        )}
                                    {Array.isArray(spot.restricoes) &&
                                        spot.restricoes.length > 0 && (
                                            <Information
                                                title="Restrições"
                                                restriction={spot.restricoes}
                                            />
                                        )}

                                    {Array.isArray(spot.formas_pagamento) &&
                                        spot.formas_pagamento.length > 0 && (
                                            <Information
                                                title="Formas de pagamento"
                                                payment={spot.formas_pagamento}
                                            />
                                        )}
                                </>
                            )}
                        </div>

                        <div className="col-lg-4 mb-5">
                            {!isLoading && spot && (
                                <>
                                    <LocationInMap addresses={spot.addresses} />
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
