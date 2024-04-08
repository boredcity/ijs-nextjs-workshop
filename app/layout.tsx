import { type ReactNode } from 'react';
import { Navigation } from '../components/Navigation';
import './global.css';

export default function RootLayout({
    children
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className="w-full min-h-full flex">
            <body className="flex flex-col w-full">
                <Navigation />
                <main className="grow m-2 flex flex-col">{children}</main>
            </body>
        </html>
    );
}
