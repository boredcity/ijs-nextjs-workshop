'use client';
export default function Error({ error }: any) {
    return (
        <h1 className="grid h-full place-items-center text-xl">
            Error: {error}
        </h1>
    );
}
