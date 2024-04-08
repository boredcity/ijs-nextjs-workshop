import { type ReactNode } from 'react';

export default function RootLayout({
    children,
    left,
    right
}: Readonly<{ children: ReactNode; left: ReactNode; right: ReactNode }>) {
    return (
        <div className="flex flex-col grow">
            {children}
            <div className="flex flex-row grow gap-2">
                <div className="grow grid place-items-center p-4 ring-2 bg-black/20 ring-slate-200">
                    {left}
                </div>
                <div className="grow grid place-items-center p-4 ring-2 bg-black/20 ring-slate-200">
                    {right}
                </div>
            </div>
        </div>
    );
}
