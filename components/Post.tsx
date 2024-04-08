export function Post({
    title,
    body
}: Readonly<{ id: number; title: string; body?: string }>) {
    return (
        <article className="p-2 ring-1 ring-slate-500">
            <h3>{title}</h3>
            <div>{body}</div>
        </article>
    );
}
