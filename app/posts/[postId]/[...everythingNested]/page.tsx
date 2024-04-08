import { PageHeader } from '../../../../components/PageHeader';

interface PostPageProps {
    params: {
        everythingNested: string[];
    };
}

export default function EverythingNestedPage({
    params: { everythingNested }
}: PostPageProps) {
    return (
        <PageHeader
            title={`Every path segment`}
            description={everythingNested.join(' / ')}
        />
    );
}
