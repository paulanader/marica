import ContentLoader from 'react-content-loader';

export const IsLoadingPill: React.FC = () => (
    <ContentLoader
        speed={2}
        width={200}
        height={160}
        viewBox="0 0 200 160"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        className="me-3 mb-1"
    >
        <rect x="0" y="0" rx="15" ry="15" width="200" height="30" />
    </ContentLoader>
);
