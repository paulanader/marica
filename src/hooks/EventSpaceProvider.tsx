import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/CategoryType';
import { EventSpaceType } from '../@types/EventSpaceType';
import Api from '../services/Api';

// Aqui é definido a Interface com os tipos de dados de tudo oque seráq disponibilizado para fora do Provider

interface IEventSpaceContextProp {
    eventSpace: EventSpaceType | null;
    eventSpaces: EventSpaceType[];
    categories: CategoryType[];
    category: CategoryType | null;
    isLoading: boolean;
    setEventSpace: (eventSpace: EventSpaceType | null) => void;
    setCategory: (category: CategoryType) => void;
    getEventSpace: (id: number) => Promise<void>;
    getEventSpaces: (search: string) => Promise<void>;
    getEventSpacesByCategory: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const EventSpacesContext = createContext<IEventSpaceContextProp>(
    {} as IEventSpaceContextProp
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useEventSpaces = (): IEventSpaceContextProp => {
    const context = useContext(EventSpacesContext);

    if (!context) {
        throw new Error('useSpots must be within SpotsTuristicsProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const EventSpaceProvider: React.FC = ({ children }) => {
    const [eventSpace, setEventSpace] = useState<EventSpaceType | null>(null);
    const [eventSpaces, setEventSpaces] = useState<EventSpaceType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getEventSpaces = useCallback(
        async (searchText = ''): Promise<void> => {
            let url = `/espacos`;

            setIsLoading(true);

            if (searchText.length > 0) {
                url += `/busca?busca=${searchText}`;
            }
            Api.get(url)
                .then(response => {
                    setEventSpaces(response?.data?.collection);
                    if (response.data.categorias) {
                        setCategories(response?.data?.categorias);
                    }
                })
                .catch(() => {
                    setEventSpaces([]);
                    setCategories([]);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        },
        []
    );

    const getEventSpace = useCallback(async (id: number): Promise<void> => {
        Api.get(`/espacos/${id}`)
            .then(response => {
                setEventSpace(response?.data?.item);
            })
            .catch(() => {
                setEventSpace(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getEventSpacesByCategory = useCallback(
        async (id: number): Promise<void> => {
            Api.get(`/espacos/categorias/${id}`)
                .then(response => {
                    setEventSpaces(response?.data?.collection);
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
            eventSpace,
            eventSpaces,
            categories,
            category,
            isLoading,
            setEventSpace,
            setCategory,
            getEventSpace,
            getEventSpaces,
            getEventSpacesByCategory,
        }),
        [
            eventSpace,
            eventSpaces,
            categories,
            category,
            isLoading,
            setEventSpace,
            setCategory,
            getEventSpace,
            getEventSpaces,
            getEventSpacesByCategory,
        ]
    );

    return (
        <EventSpacesContext.Provider value={providerValue}>
            {children}
        </EventSpacesContext.Provider>
    );
};

// Agora é só chamar esse provider em volta do Routes:

/*
    <BannersProvider>
        <Routes />
    </BannersProvider>
*/
