import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { BigMap } from '../../components/BigMap';
import { Wrapper } from '../../components/Wrapper';
import { useSpots } from '../../hooks/SpotProvider';

export const SpotsMap: React.FC = () => {
    const { spots, getSpots, setCategory } = useSpots();

    useEffect(() => {
        getSpots('');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header fixed />
            <div className="d-flex flex-column position-relative flex-grow-1">
                <div>
                    {Array.isArray(spots) && spots.length > 0 && (
                        <BigMap
                            items={spots}
                            title="Pontos Turísticos"
                            url="pontos-turisticos"
                            _setCategory={setCategory}
                        />
                    )}
                </div>
            </div>

            <Footer />
        </Wrapper>
    );
};
