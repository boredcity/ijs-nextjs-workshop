import { type ReactNode } from 'react';

export default function PostsLayout({
    children
}: Readonly<{ children: ReactNode }>) {
    return (
        <div className="flex flex-row grow gap-2">
            <aside className="w-40 bg-slate-400 -m-2 mr-0 text-white ">
                <div className="text-lg p-2">Posts</div>
            </aside>
            {children}
        </div>
    );
}
