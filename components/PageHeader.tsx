export const PageHeader = ({
    title,
    description
}: {
    title: string;
    description: string;
}) => {
    return (
        <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
            {description && <p className="text-slate-600">{description}</p>}
        </header>
    );
};
