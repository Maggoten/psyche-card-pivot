import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  return (
    <nav className={`flex justify-center gap-2 ${className}`}>
      <Link to="/">
        <Button 
          variant="secondary" 
          size="sm" 
          className="font-body text-xs uppercase tracking-widest px-6 py-2 h-auto rounded-sm"
        >
          Home
        </Button>
      </Link>
      <Link to="/about">
        <Button 
          variant="outline" 
          size="sm" 
          className="font-body text-xs uppercase tracking-widest px-6 py-2 h-auto rounded-sm"
        >
          About
        </Button>
      </Link>
    </nav>
  );
};

export default Navigation;