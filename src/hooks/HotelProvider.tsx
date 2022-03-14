import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@types/CategoryType';
import { HotelType } from '../@types/HotelType';
import Api from '../services/Api';

// Aqui é definido a Interface com os tipos de dados de tudo oque seráq disponibilizado para fora do Provider

interface IHotelsContextProp {
    hotel: HotelType | null;
    hotels: HotelType[];
    isLoading: boolean;
    category: CategoryType | null;
    categories: CategoryType[];
    getHotels: (search: string) => Promise<void>;
    getHotel: (id: number) => Promise<void>;
    setHotel: (hotel: HotelType) => void;
    setCategory: (category: CategoryType) => void;
    getHotelsByCategory: (id: number) => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const HotelsContext = createContext<IHotelsContextProp>(
    {} as IHotelsContextProp
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useHotels = (): IHotelsContextProp => {
    const context = useContext(HotelsContext);

    if (!context) {
        throw new Error('useBanners must be within HotelsProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const HotelsProvider: React.FC = ({ children }) => {
    const [hotel, setHotel] = useState<HotelType | null>(null);
    const [hotels, setHotels] = useState<HotelType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getHotels = useCallback(async (searchText = ''): Promise<void> => {
        let url = `/hoteis-e-pousadas`;

        setIsLoading(true);

        if (searchText.length > 0) {
            url += `/busca?busca=${searchText}`;
        }
        Api.get(url)
            .then(response => {
                setHotels(response?.data?.collection);
                if (response.data.categorias) {
                    setCategories(response?.data?.categorias);
                }
            })
            .catch(() => {
                setHotels([]);
                setCategories([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getHotel = useCallback(async (id: number): Promise<void> => {
        Api.get(`/hoteis-e-pousadas/${id}`)
            .then(response => {
                setHotel(response?.data?.item);
            })
            .catch(() => {
                setHotels([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getHotelsByCategory = useCallback(
        async (id: number): Promise<void> => {
            Api.get(`/hoteis-e-pousadas/categorias/${id}`)
                .then(response => {
                    setHotels(response?.data?.collection);
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
            hotel,
            hotels,
            isLoading,
            category,
            categories,
            getHotels,
            getHotel,
            setHotel,
            setCategory,
            getHotelsByCategory,
        }),
        [
            hotel,
            hotels,
            isLoading,
            category,
            categories,
            getHotels,
            getHotel,
            setHotel,
            setCategory,
            getHotelsByCategory,
        ]
    );

    return (
        <HotelsContext.Provider value={providerValue}>
            {children}
        </HotelsContext.Provider>
    );
};

// Agora é só chamar esse provider em volta do Routes:

/*
    <BannersProvider>
        <Routes />
    </BannersProvider>
*/
