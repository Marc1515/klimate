import { useTheme } from "next-themes";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filer]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/logo.png" : "/logo2.png"}
            alt="Klimate Logo"
            className="h-14"
          />
        </Link>
        <div>
          {/* search */}
          {/* theme toggle */}
        </div>
      </div>
    </header>
  );
};

export default Header;
