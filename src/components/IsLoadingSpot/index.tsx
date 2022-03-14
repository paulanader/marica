import ContentLoader from 'react-content-loader';

export const IsLoadingSpot: React.FC = () => (
    <ContentLoader
        speed={2}
        width="100%"
        height={300}
        viewBox="0 0 1200 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="33" y="24" rx="0" ry="0" width="251" height="9" />
        <rect x="33" y="38" rx="0" ry="0" width="399" height="17" />
        <rect x="13" y="67" rx="0" ry="0" width="41" height="13" />
        <rect x="12" y="26" rx="0" ry="0" width="12" height="23" />
        <rect x="12" y="94" rx="0" ry="0" width="575" height="229" />
        <rect x="65" y="67" rx="0" ry="0" width="41" height="13" />
    </ContentLoader>
);
