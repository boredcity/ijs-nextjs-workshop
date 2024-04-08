'use client';
import { SignInButton } from './SignInButton';
import { NavItem } from './NavItem';

export const Navigation = () => {
    return (
        <nav className="bg-slate-500 p-2">
            <ul className="flex flex-row gap-2 text-md text-slate-200 items-center">
                <NavItem href="/" label="Home" />
                <NavItem href="/posts" label="Posts" />
                <NavItem href="/posts/1" label="Post #1" />
                <li className="ml-auto">
                    <SignInButton />
                </li>
            </ul>
        </nav>
    );
};
