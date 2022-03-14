import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Spot } from '../pages/Spot';
import { Spots } from '../pages/Spots';
import { SpotsMap } from '../pages/SpotsMap';
import { About } from '../pages/About';
import { SpotCategories } from '../pages/SpotCategories/index.tsx';
import { Hotels } from '../pages/Hotels';
import { HotelCategories } from '../pages/HotelCategories';
import { Hotel } from '../pages/Hotel';
import { Restaurants } from '../pages/Restaurants';
import { Delivery } from '../pages/Delivery';
import { RestaurantsCategories } from '../pages/RestaurantsCategories';
import { Restaurant } from '../pages/Restaurant';
import { LocalMarkets } from '../pages/LocalMarkets';
import { LocalMarket } from '../pages/LocalMarket';
import { EventSpaces } from '../pages/EventSpaces';
import { EventSpace } from '../pages/EventSpace';
import { Events } from '../pages/Events';
import { Event } from '../pages/Event';
import { LocalMarketsCategories } from '../pages/LocalMarketsCategories/index.tsx';
import { EventSpacesCategories } from '../pages/EventSpacesCategories/index.tsx';
import { EventsCategories } from '../pages/EventsCategories/index.tsx';
import { HotelsMap } from '../pages/HotelsMap';
import { EventSpacesMap } from '../pages/EventSpacesMap';
import { RestaurantsMap } from '../pages/RestaurantsMap';
import { LocalMarketsMap } from '../pages/LocalMarketsMap';
import { EventsMap } from '../pages/EventsMap';

export const PagesRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pontos-turisticos" element={<Spots />} />
            <Route path="/hoteis-e-pousadas" element={<Hotels />} />
            <Route path="/bares-e-restaurantes" element={<Restaurants />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/comercio-local" element={<LocalMarkets />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/espacos-para-eventos" element={<EventSpaces />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/pontos-turisticos/:id" element={<Spot />} />
            <Route path="/hoteis-e-pousadas/:id" element={<Hotel />} />
            <Route path="/bares-e-restaurantes/:id" element={<Restaurant />} />
            <Route path="/comercio-local/:id" element={<LocalMarket />} />
            <Route path="/espacos-para-eventos/:id" element={<EventSpace />} />
            <Route path="/eventos/:id" element={<Event />} />
            <Route
                path="/pontos-turisticos/categorias/:id"
                element={<SpotCategories />}
            />
            <Route
                path="/hoteis-e-pousadas/categorias/:id"
                element={<HotelCategories />}
            />
            <Route
                path="/bares-e-restaurantes/categorias/:id"
                element={<RestaurantsCategories />}
            />
            <Route
                path="/comercio-local/categorias/:id"
                element={<LocalMarketsCategories />}
            />
            <Route
                path="/espacos-para-eventos/categorias/:id"
                element={<EventSpacesCategories />}
            />
            <Route
                path="/eventos/categorias/:id"
                element={<EventsCategories />}
            />

            <Route path="/pontos-turisticos/mapa" element={<SpotsMap />} />
            <Route path="/hoteis-e-pousadas/mapa" element={<HotelsMap />} />
            <Route
                path="/espacos-para-eventos/mapa"
                element={<EventSpacesMap />}
            />
            <Route
                path="/bares-e-restaurantes/mapa"
                element={<RestaurantsMap />}
            />
            <Route path="/comercio-local/mapa" element={<LocalMarketsMap />} />
            <Route path="/eventos/mapa" element={<EventsMap />} />
        </Routes>
    </BrowserRouter>
);
