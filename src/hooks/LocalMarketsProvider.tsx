/* eslint-disable camelcase */
import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/CategoryType';
import { LocalMarketType } from '../@types/LocalMarketType';
import Api from '../services/Api';

// Aqui é definido a Interface com os tipos de dados de tudo oque seráq disponibilizado para fora do Provider

interface ILocalMarketsContextProp {
    localMarket: LocalMarketType | null;
    localMarkets: LocalMarketType[];
    categories: CategoryType[];
    category: CategoryType | null;
    isLoading: boolean;
    setLocalMarket: (localMarket: LocalMarketType | null) => void;
    setCategory: (category: CategoryType) => void;
    getLocalMarket: (id: number) => Promise<void>;
    getLocalMarkets: (search: string) => Promise<void>;
    getLocalMarketsByCategory: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const LocalMarketsContext = createContext<ILocalMarketsContextProp>(
    {} as ILocalMarketsContextProp
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useLocalMarkets = (): ILocalMarketsContextProp => {
    const context = useContext(LocalMarketsContext);

    if (!context) {
        throw new Error('useLocalMarkets must be within LocalMarketsProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const LocalMarketsProvider: React.FC = ({ children }) => {
    const [localMarket, setLocalMarket] = useState<LocalMarketType | null>(
        null
    );
    const [localMarkets, setLocalMarkets] = useState<LocalMarketType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getLocalMarkets = useCallback(
        async (searchText = ''): Promise<void> => {
            let url = `/comercios`;

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
                    setLocalMarkets(response?.data?.collection);
                    if (response.data.categorias) {
                        setCategories(response?.data?.categorias);
                    }
                })
                .catch(() => {
                    setLocalMarkets([]);
                    setCategories([]);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        },
        []
    );

    const getLocalMarket = useCallback(async (id: number): Promise<void> => {
        Api.get(`/comercios/${id}`)
            .then(response => {
                setLocalMarket(response?.data?.item);
            })
            .catch(() => {
                setLocalMarket(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getLocalMarketsByCategory = useCallback(
        async (id: number): Promise<void> => {
            Api.get(`/comercios/categorias/${id}`)
                .then(response => {
                    setLocalMarkets(response?.data?.collection);
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
            localMarket,
            localMarkets,
            category,
            categories,
            isLoading,
            setLocalMarket,
            setCategory,
            getLocalMarket,
            getLocalMarkets,
            getLocalMarketsByCategory,
        }),
        [
            localMarket,
            localMarkets,
            category,
            categories,
            isLoading,
            setLocalMarket,
            setCategory,
            getLocalMarket,
            getLocalMarkets,
            getLocalMarketsByCategory,
        ]
    );

    return (
        <LocalMarketsContext.Provider value={providerValue}>
            {children}
        </LocalMarketsContext.Provider>
    );
};
