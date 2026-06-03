import { useState, useMemo, useEffect } from "react";
import { useSearch, useLocation, Link } from "wouter";
import { Search, Filter, Compass, Laptop, Briefcase, HeartPulse, Scale, PenTool, FlaskConical, MapPin, Building2, Calendar, FileText, ArrowRight, X, GraduationCap } from "lucide-react";
import { colleges } from "@/data/colleges";
import { CollegeCard } from "@/components/college-card";
import { Navbar } from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const streamParam = searchParams.get("stream");
  const [, setLocation] = useLocation();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStreams, setSelectedStreams] = useState<string[]>(streamParam ? [streamParam] : []);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [feesRange, setFeesRange] = useState<string>("all");
  
  const [compareIds, setCompareIds] = useState<number[]>([]);

  useEffect(() => {
    if (streamParam) {
      setSelectedStreams([streamParam]);
    } else {
      setSelectedStreams([]);
    }
  }, [streamParam]);

  const streams = [
    { name: "Engineering", icon: Laptop },
    { name: "MBA", icon: Briefcase },
    { name: "Medical", icon: HeartPulse },
    { name: "Law", icon: Scale },
    { name: "Design", icon: PenTool },
    { name: "Science", icon: FlaskConical },
  ];

  const states = Array.from(new Set(colleges.map(c => c.location.split(", ")[1] || c.location)));

  const handleStreamToggle = (stream: string, checked: boolean) => {
    if (checked) setSelectedStreams(prev => [...prev, stream]);
    else setSelectedStreams(prev => prev.filter(s => s !== stream));
  };

  const handleTypeToggle = (type: string, checked: boolean) => {
    if (checked) setSelectedTypes(prev => [...prev, type]);
    else setSelectedTypes(prev => prev.filter(t => t !== type));
  };

  const handleStateToggle = (state: string, checked: boolean) => {
    if (checked) setSelectedStates(prev => [...prev, state]);
    else setSelectedStates(prev => prev.filter(s => s !== state));
  };

  const handleCompareToggle = (id: number, checked: boolean) => {
    if (checked) {
      if (compareIds.length < 3) {
        setCompareIds(prev => [...prev, id]);
      }
    } else {
      setCompareIds(prev => prev.filter(c => c !== id));
    }
  };

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesSearch = 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        college.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStream = selectedStreams.length === 0 || selectedStreams.includes(college.stream);
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(college.type);
      const matchesState = selectedStates.length === 0 || selectedStates.includes(college.location.split(", ")[1] || college.location);
      const matchesRating = college.rating >= minRating;
      
      let matchesFees = true;
      if (feesRange === "under1L") matchesFees = college.fees < 100000;
      else if (feesRange === "1-2L") matchesFees = college.fees >= 100000 && college.fees <= 200000;
      else if (feesRange === "2-5L") matchesFees = college.fees >= 200000 && college.fees <= 500000;
      else if (feesRange === "above5L") matchesFees = college.fees > 500000;

      return matchesSearch && matchesStream && matchesType && matchesState && matchesRating && matchesFees;
    });
  }, [searchQuery, selectedStreams, selectedTypes, selectedStates, minRating, feesRange]);

  const topRanked = [...colleges].sort((a, b) => a.rank - b.rank).slice(0, 8);

  const upcomingExams = [
    { name: "JEE Main", date: "Feb 2026", type: "Engineering" },
    { name: "JEE Advanced", date: "May 2026", type: "Engineering" },
    { name: "EAMCET", date: "Apr 2026", type: "Engineering/Medical" },
    { name: "GATE", date: "Feb 2026", type: "Postgrad" },
    { name: "CAT", date: "Nov 2025", type: "MBA" },
    { name: "NEET", date: "May 2026", type: "Medical" },
  ];

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-primary text-primary-foreground py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight max-w-4xl">
            India's #1 College Discovery Platform
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl">
            Explore {colleges.length}+ top colleges, courses, fees, placements and reviews.
          </p>
          
          <div className="w-full max-w-3xl flex items-center bg-background rounded-full p-2 shadow-2xl">
            <div className="pl-4 flex-1">
              <Input 
                type="text" 
                placeholder="Search for colleges, exams, courses or more..." 
                className="border-none bg-transparent h-12 text-foreground text-base focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button size="lg" className="rounded-full px-8 h-12">
              <Search className="w-5 h-5 mr-2" /> Search
            </Button>
          </div>

          <div className="flex gap-8 mt-12 text-primary-foreground/90">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">25,000+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Colleges</div>
            </div>
            <div className="w-px bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Exams</div>
            </div>
            <div className="w-px bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">10M+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Students</div>
            </div>
          </div>
        </div>
      </header>

      {/* Stream Categories */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {streams.map((stream) => {
            const Icon = stream.icon;
            const isSelected = selectedStreams.includes(stream.name);
            return (
              <button
                key={stream.name}
                onClick={() => {
                  setLocation(`/?stream=${stream.name}`);
                  setSelectedStreams([stream.name]);
                }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-card border-2 transition-all shadow-sm
                  ${isSelected ? 'border-primary ring-2 ring-primary/20 shadow-md transform -translate-y-1' : 'border-transparent hover:border-border hover:-translate-y-1 hover:shadow-md'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`font-semibold ${isSelected ? 'text-primary' : 'text-foreground'}`}>{stream.name}</span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Top Ranked Horizontal Scroll */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Top Ranked Colleges</h2>
          <Button variant="ghost" className="text-primary">View All <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x">
          {topRanked.map(college => (
            <div key={college.id} className="snap-start">
              <CollegeCard college={college} isCompact />
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Exams */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6">Upcoming Exams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingExams.map((exam, idx) => (
            <Card key={idx} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <Badge variant="outline" className="mb-3">{exam.type}</Badge>
                <h3 className="font-bold text-lg mb-1">{exam.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  {exam.date}
                </div>
                <Button variant="outline" className="w-full">Check Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Listing & Sidebar */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-8 bg-card p-6 rounded-2xl border border-border h-fit sticky top-24">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Filters
                </h3>
                {(selectedStreams.length > 0 || selectedTypes.length > 0 || selectedStates.length > 0 || minRating > 0 || feesRange !== "all") && (
                  <button 
                    onClick={() => {
                      setSelectedStreams([]); setSelectedTypes([]); setSelectedStates([]); setMinRating(0); setFeesRange("all");
                      setLocation("/");
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Stream</h4>
              <div className="space-y-2">
                {streams.map(s => (
                  <div key={s.name} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`stream-${s.name}`} 
                      checked={selectedStreams.includes(s.name)}
                      onCheckedChange={(c) => handleStreamToggle(s.name, c as boolean)}
                    />
                    <label htmlFor={`stream-${s.name}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {s.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Institution Type</h4>
              <div className="space-y-2">
                {["Government", "Private", "Deemed"].map(t => (
                  <div key={t} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`type-${t}`} 
                      checked={selectedTypes.includes(t)}
                      onCheckedChange={(c) => handleTypeToggle(t, c as boolean)}
                    />
                    <label htmlFor={`type-${t}`} className="text-sm font-medium leading-none">
                      {t}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">State</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                {states.map(s => (
                  <div key={s} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`state-${s}`} 
                      checked={selectedStates.includes(s)}
                      onCheckedChange={(c) => handleStateToggle(s, c as boolean)}
                    />
                    <label htmlFor={`state-${s}`} className="text-sm font-medium leading-none">
                      {s}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Min Rating: {minRating > 0 ? minRating : "Any"}</h4>
              <Slider
                value={[minRating]}
                min={0}
                max={5}
                step={0.5}
                onValueChange={(v) => setMinRating(v[0])}
                className="my-4"
              />
            </div>

            <div>
              <h4 className="font-semibold mb-3">Fees Range</h4>
              <Select value={feesRange} onValueChange={setFeesRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Fees" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Fees</SelectItem>
                  <SelectItem value="under1L">Under 1 Lakh</SelectItem>
                  <SelectItem value="1-2L">1 - 2 Lakhs</SelectItem>
                  <SelectItem value="2-5L">2 - 5 Lakhs</SelectItem>
                  <SelectItem value="above5L">Above 5 Lakhs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </aside>

          {/* Listing */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {filteredColleges.length} Colleges Found
                </h2>
                <p className="text-sm text-muted-foreground mt-1">Showing results based on your preferences</p>
              </div>
            </div>

            {filteredColleges.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {filteredColleges.map((college) => (
                  <CollegeCard 
                    key={college.id} 
                    college={college} 
                    isHorizontal 
                    onCompareToggle={handleCompareToggle}
                    isCompared={compareIds.includes(college.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-card rounded-2xl border border-border shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">No colleges found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                <Button variant="outline" className="mt-6" onClick={() => {
                  setSelectedStreams([]); setSelectedTypes([]); setSelectedStates([]); setMinRating(0); setFeesRange("all"); setSearchQuery("");
                  setLocation("/");
                }}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Latest Admission News */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6">Latest Admission News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "JEE Main 2025 Registration Dates Announced", date: "Oct 15, 2024", desc: "NTA has released the official schedule for JEE Main 2025 Session 1. Check details here." },
            { title: "IIM Ahmedabad Updates Admission Criteria", date: "Oct 12, 2024", desc: "Changes in weightage for CAT score and academic profile for the upcoming batch." },
            { title: "NEET UG Syllabus Revision", date: "Oct 10, 2024", desc: "NMC announces minor changes to the NEET UG syllabus. Read the full official notification." }
          ].map((news, idx) => (
            <Card key={idx} className="hover:shadow-md transition-shadow cursor-pointer group border-border">
              <CardContent className="p-5">
                <div className="flex items-center text-sm text-primary mb-3">
                  <FileText className="w-4 h-4 mr-1.5" />
                  {news.date}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{news.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{news.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8 px-4 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl mb-6">
              <GraduationCap className="w-8 h-8" />
              CollegeFind
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              India's leading college discovery platform. Find the best colleges, courses, and exams for your future.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Top Streams</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><Link href="/?stream=Engineering" className="hover:text-white transition-colors">Engineering Colleges</Link></li>
              <li><Link href="/?stream=MBA" className="hover:text-white transition-colors">MBA Colleges</Link></li>
              <li><Link href="/?stream=Medical" className="hover:text-white transition-colors">Medical Colleges</Link></li>
              <li><Link href="/?stream=Law" className="hover:text-white transition-colors">Law Colleges</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Top Exams</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><span className="hover:text-white transition-colors cursor-pointer">JEE Main</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">CAT</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">NEET</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">GATE</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><span className="hover:text-white transition-colors cursor-pointer">About Us</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Contact</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} CollegeFind. All rights reserved.
        </div>
      </footer>

      {/* Compare Bar */}
      {compareIds.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-4 z-50 animate-in slide-in-from-bottom-full">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-bold">Comparing {compareIds.length} college{compareIds.length > 1 ? 's' : ''}</span>
              <div className="hidden sm:flex gap-2">
                {compareIds.map(id => {
                  const c = colleges.find(c => c.id === id);
                  return c ? (
                    <Badge key={id} variant="secondary" className="flex items-center gap-1 pl-2 pr-1 py-1">
                      <span className="truncate max-w-[100px]">{c.name}</span>
                      <button onClick={() => handleCompareToggle(id, false)} className="hover:bg-muted p-0.5 rounded-full ml-1">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ) : null;
                })}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => setCompareIds([])}>Clear</Button>
              <Button 
                onClick={() => setLocation(`/compare?ids=${compareIds.join(",")}`)}
                disabled={compareIds.length < 2}
              >
                Compare Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}