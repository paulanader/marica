import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { BannerType } from '../@types/BannerType';
import Api from '../services/Api';

// Aqui é definido a Interface com os tipos de dados de tudo oque seráq disponibilizado para fora do Provider

interface IBannersContextProp {
    banners: BannerType[];
    isLoading: boolean;
    getBanners: () => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const BannersContext = createContext<IBannersContextProp>(
    {} as IBannersContextProp
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useBanners = (): IBannersContextProp => {
    const context = useContext(BannersContext);

    if (!context) {
        throw new Error('useBanners must be within BannersProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const BannersProvider: React.FC = ({ children }) => {
    const [banners, setBanners] = useState<BannerType[]>([]);
    const [isLoading, setLoading] = useState(true);

    const getBanners = useCallback(async (): Promise<void> => {
        Api.get(`/banners`)
            .then(response => {
                setBanners(response.data);
            })
            .catch(() => {
                setBanners([]);
            })
            .finally(() => setLoading(false));
    }, []);

    // Aqui são definidas objeto quais informações estarão disponíveis "para fora" do Provider
    const providerValue = useMemo(
        () => ({
            banners,
            isLoading,
            getBanners,
        }),
        [banners, isLoading, getBanners]
    );

    return (
        <BannersContext.Provider value={providerValue}>
            {children}
        </BannersContext.Provider>
    );
};

// Agora é só chamar esse provider em volta do Routes:

/*
    <BannersProvider>
        <Routes />
    </BannersProvider>
*/
