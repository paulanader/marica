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
import { useRestaurants } from '../../hooks/RestaurantProvider';
import { Information } from '../../components/Information';
import { DeliveryPill } from '../../components/DeliveryPill';
import { UnitaryIsLoading } from '../../components/UnitaryIsLoading';

export const Restaurant: React.FC = () => {
    const { restaurant, isLoading, setCategory, getRestaurant } =
        useRestaurants();

    const { id } = useParams();

    useEffect(() => {
        getRestaurant(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            {isLoading && <UnitaryIsLoading />}
            {!isLoading && restaurant?.id && (
                <SliderImage images={restaurant.images} />
            )}
            <Main>
                {isLoading && <Loader />}
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col-lg-8">
                            {!isLoading && restaurant?.id && (
                                <>
                                    <PageTitle
                                        title={restaurant.nome}
                                        category="Bares e Restaurantes"
                                        url="/bares-e-restaurantes"
                                    />
                                    {!!restaurant.is_delivery && (
                                        <DeliveryPill />
                                    )}
                                    <div className="mb-4 mb-md-5">
                                        <CategoriesPill
                                            categories={restaurant.categorias}
                                            url="bares-e-restaurantes"
                                            color="success"
                                            _setCategory={setCategory}
                                            size={6}
                                        />
                                        <Description
                                            description={restaurant.descricao_t}
                                        />
                                    </div>
                                    <Information
                                        title="Sobre"
                                        addresses={restaurant.addresses}
                                        phone={restaurant.phones}
                                        email={restaurant.email}
                                        site={restaurant.site}
                                        socialMedia={restaurant.redes}
                                        openingHour={
                                            restaurant.horario_funcionamento
                                        }
                                    />
                                    <Information
                                        title="Faixa de preço"
                                        price_range={restaurant.faixa_preco}
                                    />
                                    <Information
                                        title="Cozinhas"
                                        cookery={restaurant.cozinhas}
                                    />
                                    {Array.isArray(restaurant.estruturas) &&
                                        restaurant.estruturas.length > 0 && (
                                            <Information
                                                title="Estruturas"
                                                structure={
                                                    restaurant.estruturas
                                                }
                                            />
                                        )}
                                    {Array.isArray(restaurant.restricoes) &&
                                        restaurant.restricoes.length > 0 && (
                                            <Information
                                                title="Restrições"
                                                restriction={
                                                    restaurant.restricoes
                                                }
                                            />
                                        )}
                                    {Array.isArray(
                                        restaurant.formas_pagamento
                                    ) &&
                                        restaurant.formas_pagamento.length >
                                            0 && (
                                            <Information
                                                title="Formas de pagamento"
                                                payment={
                                                    restaurant.formas_pagamento
                                                }
                                            />
                                        )}
                                </>
                            )}
                        </div>

                        <div className="col-lg-4 mb-5">
                            {!isLoading && restaurant && (
                                <>
                                    <LocationInMap
                                        addresses={restaurant.addresses}
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
