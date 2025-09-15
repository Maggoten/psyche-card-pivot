import { Button } from "@/components/ui/button";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  return (
    <nav className={`flex justify-center gap-2 ${className}`}>
      <Button 
        variant="secondary" 
        size="sm" 
        className="font-body text-xs uppercase tracking-widest px-6 py-2 h-auto rounded-sm"
      >
        Home
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        className="font-body text-xs uppercase tracking-widest px-6 py-2 h-auto rounded-sm"
      >
        About
      </Button>
    </nav>
  );
};

export default Navigation;