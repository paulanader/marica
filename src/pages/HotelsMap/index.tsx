import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { BigMap } from '../../components/BigMap';
import { Wrapper } from '../../components/Wrapper';
import { useHotels } from '../../hooks/HotelProvider';

export const HotelsMap: React.FC = () => {
    const { hotels, getHotels } = useHotels();

    useEffect(() => {
        getHotels('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header fixed />
            <div className="d-flex flex-column position-relative flex-grow-1">
                <div>
                    {Array.isArray(hotels) && hotels.length > 0 && (
                        <BigMap
                            items={hotels}
                            title="Hotéis e Pousadas"
                            url="/hoteis-e-pousadas"
                        />
                    )}
                </div>
            </div>

            <Footer />
        </Wrapper>
    );
};
