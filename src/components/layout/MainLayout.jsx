import { Navbar } from "./Navbar";

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 pb-20 md:pb-8">
        {children}
      </main>
    </div>
  );
}
