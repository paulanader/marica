import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { EventBigMap } from '../../components/EventBigMap';
import { Wrapper } from '../../components/Wrapper';
import { useEvents } from '../../hooks/EventProvider';

export const EventsMap: React.FC = () => {
    const { events, getEvents, setCategory } = useEvents();

    useEffect(() => {
        getEvents('');
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header fixed />
            <div className="d-flex flex-column position-relative flex-grow-1">
                <div>
                    {Array.isArray(events) && events.length > 0 && (
                        <EventBigMap
                            items={events}
                            title="Eventos"
                            url="eventos"
                            _setCategory={setCategory}
                        />
                    )}
                </div>
            </div>

            <Footer />
        </Wrapper>
    );
};
