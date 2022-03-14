import ContentLoader from 'react-content-loader';

export const Loader: React.FC = () => (
    <ContentLoader
        speed={2}
        width={1200}
        height={300}
        viewBox="0 0 1200 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="375" y="23" rx="0" ry="0" width="213" height="153" />
        <rect x="6" y="18" rx="0" ry="0" width="147" height="34" />
        <rect x="8" y="65" rx="0" ry="0" width="60" height="14" />
        <rect x="9" y="95" rx="0" ry="0" width="312" height="51" />
        <rect x="10" y="164" rx="0" ry="0" width="100" height="22" />
        <rect x="10" y="199" rx="0" ry="0" width="251" height="22" />
        <rect x="10" y="231" rx="0" ry="0" width="251" height="22" />
        <rect x="11" y="264" rx="0" ry="0" width="251" height="22" />
        <rect x="80" y="65" rx="0" ry="0" width="60" height="14" />
    </ContentLoader>
);
