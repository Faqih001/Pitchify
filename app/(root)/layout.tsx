import Navbar from "@/components/Navbar";

// Layout component that wraps the entire app with Navbar and children
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navbar />

            {children}
        </main>
    )
}