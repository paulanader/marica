import { BannersProvider } from './hooks/BannersProvider';
import { SpotProvider } from './hooks/SpotProvider';
import { PagesRoutes } from './pagesRoutes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => (
    <>
        <BannersProvider>
            <SpotProvider>
                <PagesRoutes />
            </SpotProvider>
        </BannersProvider>
        <GlobalStyle />
    </>
);
export default App;
