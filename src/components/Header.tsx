
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            Welcome back, {user.email}
          </span>
        </div>
        <Button
          variant="ghost"
          onClick={() => signOut()}
          className="text-sm"
        >
          Log out
        </Button>
      </div>
    </header>
  );
};

export default Header;
