import { useState, useMemo } from "react";
import { Search, Filter, Compass } from "lucide-react";
import { colleges } from "@/data/colleges";
import { CollegeCard } from "@/components/college-card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [minRating, setMinRating] = useState<string>("all");
  const [collegeType, setCollegeType] = useState<string>("all");

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesSearch = 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        college.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRating = minRating === "all" || college.rating >= parseFloat(minRating);
      const matchesType = collegeType === "all" || college.type === collegeType;

      return matchesSearch && matchesRating && matchesType;
    });
  }, [searchQuery, minRating, collegeType]);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <header className="bg-primary text-primary-foreground pt-20 pb-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary-foreground/10 rounded-2xl mb-6 backdrop-blur-md">
            <Compass className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Find Your Future in Engineering
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Discover top colleges, compare placements, and make informed decisions. We're here to guide you to the perfect campus.
          </p>
        </div>
      </header>

      {/* Search & Filters */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-card rounded-2xl shadow-xl p-4 md:p-6 border border-border flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full space-y-2">
            <Label htmlFor="search" className="text-sm text-muted-foreground ml-1">Search colleges or locations</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                id="search"
                type="text" 
                placeholder="e.g. JNTUA, Hyderabad..." 
                className="pl-10 h-12 bg-background border-border/50 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>
          
          <div className="w-full md:w-48 space-y-2">
            <Label className="text-sm text-muted-foreground ml-1">Min Rating</Label>
            <Select value={minRating} onValueChange={setMinRating}>
              <SelectTrigger className="h-12 bg-background border-border/50" data-testid="select-rating">
                <SelectValue placeholder="Any Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Rating</SelectItem>
                <SelectItem value="4.5">4.5 & Above</SelectItem>
                <SelectItem value="4.0">4.0 & Above</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-48 space-y-2">
            <Label className="text-sm text-muted-foreground ml-1">Institution Type</Label>
            <Select value={collegeType} onValueChange={setCollegeType}>
              <SelectTrigger className="h-12 bg-background border-border/50" data-testid="select-type">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Government">Government</SelectItem>
                <SelectItem value="Private">Private</SelectItem>
                <SelectItem value="Deemed">Deemed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results */}
      <main className="max-w-6xl mx-auto px-6 mt-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            {filteredColleges.length} {filteredColleges.length === 1 ? 'College' : 'Colleges'} Found
          </h2>
          <div className="flex items-center text-sm text-muted-foreground gap-2">
            <Filter className="w-4 h-4" />
            Showing results
          </div>
        </div>

        {filteredColleges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-card rounded-2xl border border-border">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">No colleges found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
          </div>
        )}
      </main>
    </div>
  );
}
