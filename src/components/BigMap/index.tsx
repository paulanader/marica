/* eslint-disable @typescript-eslint/no-loss-of-precision */
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { ImLocation } from 'react-icons/im';
import { EventSpaceType } from '../../@types/EventSpaceType';
import { HotelType } from '../../@types/HotelType';
import { LocalMarketType } from '../../@types/LocalMarketType';
import { RestaurantType } from '../../@types/RestaurantType';
import { SpotType } from '../../@types/SpotType';
import { Card } from '../Card';
import { PageTitle } from '../PageTitle';
import {
    WrapperMarker,
    StylesMarker,
    CardStyles,
    PageTitleStyles,
} from './styles';

interface IMarkerProps {
    lat: number;
    lng: number;
    item:
        | SpotType
        | HotelType
        | RestaurantType
        | EventSpaceType
        | LocalMarketType;
    showCard: boolean;
    onPinClick: () => void;
    url: string;
}

export const Marker: React.FC<IMarkerProps> = ({
    item,
    showCard,
    onPinClick,
    url,
}) => {
    return (
        <WrapperMarker>
            {showCard && (
                <CardStyles>
                    <Card item={item} url={`/${url}/${item.id}`} />
                </CardStyles>
            )}
            <StylesMarker type="button" onClick={onPinClick}>
                <ImLocation color="red" className="fs-2" />
            </StylesMarker>
        </WrapperMarker>
    );
};

interface ILocationInBigMapProps {
    items:
        | SpotType[]
        | HotelType[]
        | RestaurantType[]
        | EventSpaceType[]
        | LocalMarketType[];
    title: string;
    url: string;
}

export const BigMap: React.FC<ILocationInBigMapProps> = ({
    items,
    title,
    url,
}) => {
    const [activeAddress, setActiveAddress] = useState<number | null>(null);

    return (
        <div>
            <PageTitleStyles className="align-items-center">
                <PageTitle title2={title} url={url} />
            </PageTitleStyles>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: `${process.env.REACT_APP_GOOGLE_KEY}`,
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    defaultZoom={13}
                    defaultCenter={{
                        lat: -22.92016437953923713166659581474959850311279296875,
                        lng: -42.81936358437220491168773151002824306488037109375,
                    }}
                    onClick={() => setActiveAddress(null)}
                >
                    {items?.map(item =>
                        item?.enderecos.map(address => (
                            <Marker
                                lat={address.lat}
                                lng={address.lng}
                                key={address.id}
                                item={item}
                                url={url}
                                showCard={address.id === activeAddress}
                                onPinClick={() =>
                                    setActiveAddress(
                                        address.id === activeAddress
                                            ? null
                                            : address.id
                                    )
                                }
                            />
                        ))
                    )}
                </GoogleMapReact>
            </div>
        </div>
    );
};
