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
import { useHotels } from '../../hooks/HotelProvider';
import { Information } from '../../components/Information';
import { Loader } from '../../components/IsLoading';
import { UnitaryIsLoading } from '../../components/UnitaryIsLoading';
import { setTitle } from '../../utils/title';

export const Hotel: React.FC = () => {
    const { hotel, isLoading, setCategory, getHotel } = useHotels();
    const { id } = useParams();

    useEffect(() => {
        getHotel(parseInt(id ?? '', 10));
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTitle(`${hotel?.nome ?? 'Loading...'} | Hotéis e Pousadas`);
    }, [hotel]);

    return (
        <>
            <Header />
            {isLoading && <UnitaryIsLoading />}
            {!isLoading && hotel?.id && <SliderImage images={hotel.images} />}
            <Main>
                {isLoading && <Loader />}
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col-lg-8">
                            {!isLoading && hotel?.id && (
                                <>
                                    <PageTitle
                                        title={hotel.nome}
                                        category="Hotéis e Pousadas"
                                        url="/hoteis-e-pousadas"
                                    />
                                    <div className="mb-4 mb-md-5">
                                        <CategoriesPill
                                            categories={hotel.categorias}
                                            url="hoteis-e-pousadas"
                                            color="success"
                                            _setCategory={setCategory}
                                            size={6}
                                        />
                                        <Description
                                            description={hotel.descricao_t}
                                        />
                                    </div>
                                    <Information
                                        title="Sobre"
                                        addresses={hotel.addresses}
                                        phone={hotel.phones}
                                        email={hotel.email}
                                        site={hotel.site}
                                        socialMedia={hotel.redes}
                                        openingHour={
                                            hotel.horario_funcionamento
                                        }
                                    />
                                    <Information
                                        title="Comodidades"
                                        rooms={hotel.quartos}
                                        beds={hotel.leitos}
                                        breakfast={hotel.cafe_manha}
                                        breakfast_guest={hotel.cafe_hospedes}
                                        lunch={hotel.almoco}
                                        lunch_guest={hotel.almoco_hospedes}
                                        dinner={hotel.jantar}
                                        dinner_guest={hotel.jantar_hospedes}
                                    />
                                    {Array.isArray(hotel.estruturas) &&
                                        hotel.estruturas.length > 0 && (
                                            <Information
                                                title="Estruturas"
                                                structure={hotel.estruturas}
                                            />
                                        )}
                                    {Array.isArray(hotel.restricoes) &&
                                        hotel.restricoes.length > 0 && (
                                            <Information
                                                title="Restrições"
                                                restriction={hotel.restricoes}
                                            />
                                        )}
                                    {Array.isArray(hotel.formas_pagamento) &&
                                        hotel.formas_pagamento.length > 0 && (
                                            <Information
                                                title="Formas de pagamento"
                                                payment={hotel.formas_pagamento}
                                            />
                                        )}
                                </>
                            )}
                        </div>

                        <div className="col-lg-4 mb-5">
                            {!isLoading && hotel && (
                                <>
                                    <LocationInMap
                                        addresses={hotel.addresses}
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
