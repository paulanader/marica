import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesPill } from '../../components/CategoriesPill';
import { Description } from '../../components/Description';
import { Footer } from '../../components/Footer';
import { LocationInMap } from '../../components/LocationInMap';
import { Header } from '../../components/Header';
import { MyApp } from '../../components/MyApp';
import { PageTitle } from '../../components/PageTitle';
import { SliderImage } from '../../components/SpotSlider';
import { Main } from '../../components/Main';
import { Loader } from '../../components/IsLoading';
import { Information } from '../../components/Information';
import { DeliveryPill } from '../../components/DeliveryPill';
import { useLocalMarkets } from '../../hooks/LocalMarketsProvider';
import { UnitaryIsLoading } from '../../components/UnitaryIsLoading';

export const LocalMarket: React.FC = () => {
    const { localMarket, isLoading, setCategory, getLocalMarket } =
        useLocalMarkets();

    const { id } = useParams();

    useEffect(() => {
        getLocalMarket(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            {isLoading && <UnitaryIsLoading />}
            {!isLoading && localMarket?.id && (
                <SliderImage images={localMarket.images} />
            )}
            <Main>
                {isLoading && <Loader />}
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col-lg-8">
                            {!isLoading && localMarket?.id && (
                                <>
                                    <PageTitle
                                        title={localMarket.nome}
                                        category="Comércio Local"
                                        url="/comercio-local"
                                    />
                                    {!!localMarket.is_delivery && (
                                        <DeliveryPill />
                                    )}
                                    <div className="mb-4 mb-md-5">
                                        <CategoriesPill
                                            categories={localMarket.categorias}
                                            url="comercio-local"
                                            color="success"
                                            _setCategory={setCategory}
                                            size={6}
                                        />
                                        <Description
                                            description={
                                                localMarket.descricao_t
                                            }
                                        />
                                    </div>
                                    <Information
                                        title="Sobre"
                                        addresses={localMarket.addresses}
                                        phone={localMarket.phones}
                                        email={localMarket.email}
                                        site={localMarket.site}
                                        socialMedia={localMarket.redes}
                                        openingHour={
                                            localMarket.horario_funcionamento
                                        }
                                    />

                                    {Array.isArray(localMarket.estruturas) &&
                                        localMarket.estruturas.length > 0 && (
                                            <Information
                                                title="Estruturas"
                                                structure={
                                                    localMarket.estruturas
                                                }
                                            />
                                        )}
                                    {Array.isArray(localMarket.restricoes) &&
                                        localMarket.restricoes.length > 0 && (
                                            <Information
                                                title="Restrições"
                                                restriction={
                                                    localMarket.restricoes
                                                }
                                            />
                                        )}
                                    {Array.isArray(
                                        localMarket.formas_pagamento
                                    ) &&
                                        localMarket.formas_pagamento.length >
                                            0 && (
                                            <Information
                                                title="Formas de pagamento"
                                                payment={
                                                    localMarket.formas_pagamento
                                                }
                                            />
                                        )}
                                </>
                            )}
                        </div>

                        <div className="col-lg-4 mb-5">
                            {!isLoading && localMarket && (
                                <>
                                    <LocationInMap
                                        addresses={localMarket.addresses}
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
