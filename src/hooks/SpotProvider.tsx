import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/CategoryType';
import { SpotType } from '../@types/SpotType';
import Api from '../services/Api';

// Aqui é definido a Interface com os tipos de dados de tudo oque seráq disponibilizado para fora do Provider

interface ISpotContextProp {
    spot: SpotType | null;
    spots: SpotType[];
    categories: CategoryType[];
    category: CategoryType | null;
    isLoading: boolean;
    setSpot: (spot: SpotType | null) => void;
    setCategory: (category: CategoryType) => void;
    getSpot: (id: number) => Promise<void>;
    getSpots: (search: string) => Promise<void>;
    getSpotsByCategory: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const SpotsContext = createContext<ISpotContextProp>(
    {} as ISpotContextProp
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useSpots = (): ISpotContextProp => {
    const context = useContext(SpotsContext);

    if (!context) {
        throw new Error('useSpots must be within SpotsTuristicsProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const SpotProvider: React.FC = ({ children }) => {
    const [spot, setSpot] = useState<SpotType | null>(null);
    const [spots, setSpots] = useState<SpotType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getSpots = useCallback(async (searchText = ''): Promise<void> => {
        let url = `/pontos`;

        setIsLoading(true);

        if (searchText.length > 0) {
            url += `/busca?busca=${searchText}`;
        }
        Api.get(url)
            .then(response => {
                setSpots(response?.data?.collection);
                if (response.data.categorias) {
                    setCategories(response?.data?.categorias);
                }
            })
            .catch(() => {
                setSpots([]);
                setCategories([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getSpot = useCallback(async (id: number): Promise<void> => {
        Api.get(`/pontos/${id}`)
            .then(response => {
                setSpot(response?.data?.item);
            })
            .catch(() => {
                setSpot(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getSpotsByCategory = useCallback(
        async (id: number): Promise<void> => {
            Api.get(`/pontos/categorias/${id}`)
                .then(response => {
                    setSpots(response?.data?.collection);
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
            spot,
            spots,
            categories,
            category,
            isLoading,
            setSpot,
            setSpots,
            setCategory,
            getSpot,
            getSpots,
            getSpotsByCategory,
        }),
        [
            spot,
            spots,
            categories,
            category,
            isLoading,
            setSpot,
            setSpots,
            setCategory,
            getSpot,
            getSpots,
            getSpotsByCategory,
        ]
    );

    return (
        <SpotsContext.Provider value={providerValue}>
            {children}
        </SpotsContext.Provider>
    );
};

// Agora é só chamar esse provider em volta do Routes:

/*
    <BannersProvider>
        <Routes />
    </BannersProvider>
*/
