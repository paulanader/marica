import { useCallback, useEffect, useState } from 'react';
import { Categories } from '../../components/Categories';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Container } from '../../components/OffCanvas/styles';
import { PageTitle } from '../../components/PageTitle';
import { Search } from '../../components/Search';
import { SpotCard } from '../../components/SpotCard';
import { useSpots } from '../../hooks/SpotProvider';
import { Map } from '../../components/Map';

export const Spots: React.FC = () => {
    const { spots, categories, getSpots } = useSpots();

    const [inputSearch, setinputSearch] = useState('');

    useEffect(() => {
        getSpots('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearchByKeyPress = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) =>
            [event.code, event.key].includes('Enter')
                ? getSpots(inputSearch)
                : null,
        [getSpots, inputSearch]
    );

    return (
        <>
            <Header />
            <Main>
                <Container>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col">
                                <PageTitle item="Pontos Turísticos" url="/" />
                            </div>
                            <div className="col d-flex">
                                <Map />
                                <Search
                                    value={inputSearch}
                                    onKeyPressValue={handleSearchByKeyPress}
                                    onChangeValue={ev =>
                                        setinputSearch(ev.target.value)
                                    }
                                    onClickValue={() => getSpots(inputSearch)}
                                    placeHolderValue="Buscar pontos turísticos"
                                />
                            </div>
                        </div>
                        <Categories
                            categories={categories}
                            url="pontos-turisticos"
                            color="success"
                            text="white"
                        />
                        <div className="row row-cols-3">
                            {spots.map(spot => {
                                return (
                                    <div
                                        key={spot.id}
                                        className="col d-flex align-items-stretch"
                                    >
                                        <SpotCard
                                            item={spot}
                                            url={`/pontos-turisticos/${spot.id}`}
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
