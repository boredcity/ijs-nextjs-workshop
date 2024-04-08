import { ReactNode } from 'react';

export const Button = ({
    children,
    onClick
}: {
    children: ReactNode;
    onClick: () => void;
}) => {
    return (
        <button
            onClick={onClick}
            className="p-2 bg-slate-600 text-white hover:bg-slate-700 rounded"
        >
            {children}
        </button>
    );
};
