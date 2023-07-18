import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <main className="flex flex-col w-full justify-center h-screen items-center">
            <p className="text-2xl font-bold">Oops!</p>
            <p className="text-lg py-2">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error.message}</i>
            </p>
        </main>
    );
}