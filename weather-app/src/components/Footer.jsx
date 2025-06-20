export default function Footer() {
    return (
        <footer className="bg-blue-500 p-4 mt-8 fixed bottom-0 w-full left-0">
        <div className="container mx-auto text-center">
            <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Weather App. All rights reserved.
            </p>
        </div>
        </footer>
    );
}