/* eslint-disable camelcase */
import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/CategoryType';
import { RestaurantType } from '../@types/RestaurantType';
import Api from '../services/Api';

// Aqui é definido a Interface com os tipos de dados de tudo oque seráq disponibilizado para fora do Provider

interface IRestaurantContextProp {
    restaurant: RestaurantType | null;
    restaurants: RestaurantType[];
    categories: CategoryType[];
    category: CategoryType | null;
    isLoading: boolean;
    setRestaurant: (restaurant: RestaurantType | null) => void;
    setCategory: (category: CategoryType) => void;
    getRestaurant: (id: number) => Promise<void>;
    getRestaurants: (search: string) => Promise<void>;
    getRestaurantsByCategory: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const RestaurantsContext = createContext<IRestaurantContextProp>(
    {} as IRestaurantContextProp
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useRestaurants = (): IRestaurantContextProp => {
    const context = useContext(RestaurantsContext);

    if (!context) {
        throw new Error('useSpots must be within SpotsTuristicsProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const RestaurantProvider: React.FC = ({ children }) => {
    const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getRestaurants = useCallback(
        async (searchText = ''): Promise<void> => {
            let url = `/restaurantes`;

            setIsLoading(true);

            if (searchText.length > 0) {
                url += `/busca?busca=${searchText}`;
            }
            Api.get(url, {
                params: {
                    fields: 'is_delivery',
                },
            })
                .then(response => {
                    setRestaurants(response?.data?.collection);
                    if (response.data.categorias) {
                        setCategories(response?.data?.categorias);
                    }
                })
                .catch(() => {
                    setRestaurants([]);
                    setCategories([]);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        },
        []
    );

    const getRestaurant = useCallback(async (id: number): Promise<void> => {
        Api.get(`/restaurantes/${id}`)
            .then(response => {
                setRestaurant(response?.data?.item);
            })
            .catch(() => {
                setRestaurant(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getRestaurantsByCategory = useCallback(
        async (id: number): Promise<void> => {
            Api.get(`/restaurantes/categorias/${id}`)
                .then(response => {
                    setRestaurants(response?.data?.collection);
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
            restaurant,
            restaurants,
            categories,
            category,
            isLoading,
            setRestaurant,
            setRestaurants,
            setCategory,
            getRestaurant,
            getRestaurants,
            getRestaurantsByCategory,
        }),
        [
            restaurant,
            restaurants,
            categories,
            category,
            isLoading,
            setRestaurant,
            setRestaurants,
            setCategory,
            getRestaurant,
            getRestaurants,
            getRestaurantsByCategory,
        ]
    );

    return (
        <RestaurantsContext.Provider value={providerValue}>
            {children}
        </RestaurantsContext.Provider>
    );
};

// Agora é só chamar esse provider em volta do Routes:

/*
    <BannersProvider>
        <Routes />
    </BannersProvider>
*/
