import { type ReactNode } from 'react';

export default function PostTemplate({
    // Template gets re-rendered, layout doesn't
    children
}: Readonly<{ children: ReactNode }>) {
    return <>{children}</>;
}
