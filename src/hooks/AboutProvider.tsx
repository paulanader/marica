import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import Api from '../services/Api';

// Aqui é definido a Interface com os tipos de dados de tudo oque seráq disponibilizado para fora do Provider

interface IAboutContextProp {
    about: string;
    isLoading: boolean;
    getAbout: () => Promise<void>;
}

// Aqui é definido o Context (não precisa entender, é sempre exatamente assim)
export const AboutContext = createContext<IAboutContextProp>(
    {} as IAboutContextProp
);

// O useBanners() é o que você vai chamar dentro dos componentes pra acessar o conteúdo interno do Provider. Exemplo:
/*
    const { banners, getBanners } = useBanners();
*/
export const useAbout = (): IAboutContextProp => {
    const context = useContext(AboutContext);

    if (!context) {
        throw new Error('useBanners must be within BannersProvider');
    }

    return context;
};

// Aqui são definidas as variáveis de State e as funções do Provider
export const AboutProvider: React.FC = ({ children }) => {
    const [about, setAbout] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getAbout = useCallback(async (): Promise<void> => {
        Api.get('/apps/get')
            .then(response => {
                setAbout(response?.data?.sobre?.content);
            })
            .catch()
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    // Aqui são definidas objeto quais informações estarão disponíveis "para fora" do Provider
    const providerValue = useMemo(
        () => ({
            about,
            isLoading,
            getAbout,
        }),
        [about, isLoading, getAbout]
    );

    return (
        <AboutContext.Provider value={providerValue}>
            {children}
        </AboutContext.Provider>
    );
};

// Agora é só chamar esse provider em volta do Routes:

/*
    <BannersProvider>
        <Routes />
    </BannersProvider>
*/
