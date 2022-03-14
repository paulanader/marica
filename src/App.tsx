import { AboutProvider } from './hooks/AboutProvider';
import { BannersProvider } from './hooks/BannersProvider';
import { EventProvider } from './hooks/EventProvider';
import { EventSpaceProvider } from './hooks/EventSpaceProvider';
import { HotelsProvider } from './hooks/HotelProvider';
import { LocalMarketsProvider } from './hooks/LocalMarketsProvider';
import { RestaurantProvider } from './hooks/RestaurantProvider';
import { SpotProvider } from './hooks/SpotProvider';
import { PagesRoutes } from './pagesRoutes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => (
    <>
        <BannersProvider>
            <SpotProvider>
                <AboutProvider>
                    <HotelsProvider>
                        <RestaurantProvider>
                            <LocalMarketsProvider>
                                <EventSpaceProvider>
                                    <EventProvider>
                                        <PagesRoutes />
                                    </EventProvider>
                                </EventSpaceProvider>
                            </LocalMarketsProvider>
                        </RestaurantProvider>
                    </HotelsProvider>
                </AboutProvider>
            </SpotProvider>
        </BannersProvider>
        <GlobalStyle />
    </>
);
export default App;
