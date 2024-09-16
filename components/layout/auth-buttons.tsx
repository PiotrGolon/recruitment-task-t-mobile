import { Button } from "@/components/ui/button";

export const AuthButtons = () => {
  return (
    <div className="flex space-x-4">
      <Button
        onClick={() => {}}
        variant="outline"
        className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
      >
        Sign In
      </Button>
      <Button onClick={() => {}} variant="secondary">
        Sign Up
      </Button>
    </div>
  );
};
