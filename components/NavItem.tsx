import Link from 'next/link';

export const NavItem: React.FC<{ href: string; label: string }> = ({
    href,
    label
}) => {
    return (
        <li>
            <Link
                className="hover:text-slate-300"
                href={href}
            >
                {label}
            </Link>
        </li>
    );
};
