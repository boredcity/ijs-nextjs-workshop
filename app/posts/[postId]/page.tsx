'use client';
import { usePathname } from 'next/navigation';
import { PageHeader } from '../../../components/PageHeader';

export default function PostPage() {
    const id = usePathname().split('/').pop();
    return <PageHeader title={`Post ${id}`} description="Some posts here" />;
}
