import { type ReactNode } from 'react';
import { Navigation } from '../components/Navigation';
import './global.css';
import Background3D from '../components/Background3D/Background3D';

export default function RootLayout({
    children
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className="w-full min-h-full flex">
            <body className="flex flex-col w-full relative">
                <Background3D />
                <Navigation />
                <main className="grow m-2 flex flex-col">{children}</main>
            </body>
        </html>
    );
}
