import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { BigMap } from '../../components/BigMap';
import { Wrapper } from '../../components/Wrapper';
import { useEventSpaces } from '../../hooks/EventSpaceProvider';

export const EventSpacesMap: React.FC = () => {
    const { eventSpaces, getEventSpaces } = useEventSpaces();

    useEffect(() => {
        getEventSpaces('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header fixed />
            <div className="d-flex flex-column position-relative flex-grow-1">
                <div>
                    {Array.isArray(eventSpaces) && eventSpaces.length > 0 && (
                        <BigMap
                            items={eventSpaces}
                            title="Espaço para eventos"
                            url="/espaco-para-eventos"
                        />
                    )}
                </div>
            </div>

            <Footer />
        </Wrapper>
    );
};
