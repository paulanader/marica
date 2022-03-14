/* eslint-disable camelcase */
import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/CategoryType';
import { EventType } from '../@types/EventType';
import Api from '../services/Api';

// Aqui é definido a Interface com os tipos de dados de tudo oque seráq disponibilizado para fora do Provider

interface IEventContextProp {
    event: EventType | null;
    events: EventType[];
    categories: CategoryType[];
    category: CategoryType | null;
    isLoading: boolean;
    setEvent: (event: EventType | null) => void;
    setCategory: (category: CategoryType) => void;
    getEvent: (id: number) => Promise<void>;
    getEvents: (search: string) => Promise<void>;
    getEventsByCategory: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const EventsContext = createContext<IEventContextProp>(
    {} as IEventContextProp
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useEvents = (): IEventContextProp => {
    const context = useContext(EventsContext);

    if (!context) {
        throw new Error('useEvents must be within EventProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const EventProvider: React.FC = ({ children }) => {
    const [event, setEvent] = useState<EventType | null>(null);
    const [events, setEvents] = useState<EventType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getEvents = useCallback(async (searchText = ''): Promise<void> => {
        let url = `/eventos`;

        setIsLoading(true);

        if (searchText.length > 0) {
            url += `/busca?busca=${searchText}`;
        }
        Api.get(url, {
            params: {
                fields: 'datahora_inicio',
                orderby: 'datahora_inicio',
                order: 'asc',
            },
        })
            .then(response => {
                setEvents(response?.data?.collection);
                if (response.data.categorias) {
                    setCategories(response?.data?.categorias);
                }
            })
            .catch(() => {
                setEvents([]);
                setCategories([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getEvent = useCallback(async (id: number): Promise<void> => {
        Api.get(`/eventos/${id}`)
            .then(response => {
                setEvent(response?.data?.item);
            })
            .catch(() => {
                setEvent(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getEventsByCategory = useCallback(
        async (id: number): Promise<void> => {
            Api.get(`/eventos/categorias/${id}`)
                .then(response => {
                    setEvents(response?.data?.collection);
                })
                .catch()
                .finally(() => {
                    setIsLoading(false);
                });
        },
        []
    );

    // Aqui são definidas objeto quais informações estarão disponíveis "para fora" do Provider
    const providerValue = useMemo(
        () => ({
            event,
            events,
            categories,
            category,
            isLoading,
            setEvent,
            setCategory,
            getEvent,
            getEvents,
            getEventsByCategory,
        }),
        [
            event,
            events,
            categories,
            category,
            isLoading,
            setEvent,
            setCategory,
            getEvent,
            getEvents,
            getEventsByCategory,
        ]
    );

    return (
        <EventsContext.Provider value={providerValue}>
            {children}
        </EventsContext.Provider>
    );
};

// Agora é só chamar esse provider em volta do Routes:

/*
    <BannersProvider>
        <Routes />
    </BannersProvider>
*/
