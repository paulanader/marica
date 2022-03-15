import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { BigMap } from '../../components/BigMap';
import { Wrapper } from '../../components/Wrapper';
import { useLocalMarkets } from '../../hooks/LocalMarketsProvider';

export const LocalMarketsMap: React.FC = () => {
    const { localMarkets, getLocalMarkets, setCategory } = useLocalMarkets();

    useEffect(() => {
        getLocalMarkets('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header fixed />
            <div className="d-flex flex-column position-relative flex-grow-1">
                <div>
                    {Array.isArray(localMarkets) && localMarkets.length > 0 && (
                        <BigMap
                            items={localMarkets}
                            title="Comércio Local"
                            url="comercio-local"
                            _setCategory={setCategory}
                        />
                    )}
                </div>
            </div>

            <Footer />
        </Wrapper>
    );
};
