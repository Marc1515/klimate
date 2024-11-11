import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      header
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-12 supports-[backdrop-filer]:bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-400">
          Made by marcespana.com
        </div>
      </footer>
    </div>
  );
};

export default Layout;