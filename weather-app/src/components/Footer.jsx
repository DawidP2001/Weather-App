export default function Footer() {
    return (
        <footer className="bg-blue-500 p-4 mt-8 w-screen left-0 mb-0" style={{ width: "100vw" }}>
        <div className="container mx-auto text-center">
            <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Weather App. All rights reserved.
            </p>
        </div>
        </footer>
    );
}