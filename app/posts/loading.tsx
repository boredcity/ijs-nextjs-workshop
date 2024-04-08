export default function Loading() {
    return (
        <div className="w-full h-full flex justify-center items-center transition-opacity animate-bounce">
            <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">Loading...</div>
                <div className="text-xl">Please wait</div>
            </div>
        </div>
    );
}
