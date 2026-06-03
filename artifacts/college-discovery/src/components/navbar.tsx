import { Link, useSearch, useLocation } from "wouter";
import { GraduationCap, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [, setLocation] = useLocation();

  const handleStreamClick = (stream: string) => {
    setLocation(`/?stream=${encodeURIComponent(stream)}`);
  };

  const streams = ["Engineering", "MBA", "Medical", "Law", "Design"];
  const exams = ["JEE Main", "JEE Advanced", "EAMCET", "GATE", "CAT", "NEET", "CLAT", "NID Entrance"];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 py-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
                  <GraduationCap className="w-6 h-6" />
                  CollegeFind
                </Link>
                {streams.map((stream) => (
                  <Button
                    key={stream}
                    variant="ghost"
                    className="justify-start text-base"
                    onClick={() => handleStreamClick(stream)}
                  >
                    {stream}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <GraduationCap className="w-6 h-6" />
            <span className="hidden sm:inline-block">CollegeFind</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {streams.map((stream) => (
            <button
              key={stream}
              onClick={() => handleStreamClick(stream)}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {stream}
            </button>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground/80 hover:text-primary transition-colors flex items-center outline-none">
              Exams
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {exams.map((exam) => (
                <DropdownMenuItem key={exam}>{exam}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden sm:flex" data-testid="btn-login">
            <User className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button variant="outline" size="icon" className="sm:hidden">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
