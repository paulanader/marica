import ContentLoader from 'react-content-loader';

export const IsLoadingCard: React.FC = () => (
    <ContentLoader
        speed={2}
        width={300}
        height={400}
        viewBox="0 0 300 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="15" y="19" rx="0" ry="0" width="273" height="220" />
        <rect x="19" y="255" rx="0" ry="0" width="270" height="32" />
        <rect x="24" y="314" rx="0" ry="0" width="75" height="23" />
        <rect x="124" y="315" rx="0" ry="0" width="75" height="23" />
        <rect x="24" y="369" rx="0" ry="0" width="266" height="24" />
    </ContentLoader>
);
