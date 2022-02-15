import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Categories } from '../../components/Categories';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { PageTitle } from '../../components/PageTitle';
import { useSpots } from '../../hooks/SpotProvider';

export const Spot: React.FC = () => {
    const { spot, getSpot } = useSpots();
    const { id } = useParams();

    useEffect(() => {
        getSpot(parseInt(id ?? '', 10));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {spot?.id && (
                                <>
                                    <PageTitle
                                        item={spot.nome}
                                        category="Pontos Turísticos"
                                        url={`/pontos-turisticos/${spot.id}`}
                                    />
                                    <div className="mb-4 mb-md-5">
                                        <Categories
                                            categories={spot.categorias}
                                            url={`${spot.id}`}
                                            color="success"
                                        />
                                        <p className="fs-md mb-5">
                                            {spot.descricao_t}
                                        </p>
                                    </div>
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
