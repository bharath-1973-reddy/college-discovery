import { useParams, Link } from "wouter";
import { ArrowLeft, MapPin, Star, Building2, Map, BookOpen, IndianRupee, Trophy, Users, BadgeCheck, CheckCircle2, Building, Library, Dumbbell, Monitor, Coffee } from "lucide-react";
import { colleges } from "@/data/colleges";
import { Navbar } from "@/components/navbar";
import { CollegeCard } from "@/components/college-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CollegeDetails() {
  const params = useParams();
  const collegeId = parseInt(params.id || "0");
  const college = colleges.find(c => c.id === collegeId);

  if (!college) {
    return (
      <div className="min-h-screen bg-muted/20">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32 text-center px-4">
          <h1 className="text-2xl font-bold mb-4">College not found</h1>
          <Link href="/" className="text-primary hover:underline flex items-center gap-2 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const similarColleges = colleges
    .filter(c => c.stream === college.stream && c.id !== college.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary text-primary-foreground border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8 text-sm font-medium group" data-testid="link-back">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Back to Colleges
          </Link>
          
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 {college.rank <= 50 && (
                  <Badge className="bg-amber-500 text-white hover:bg-amber-600 border-none font-bold text-sm px-3 py-1">
                    #{college.rank} in India
                  </Badge>
                )}
                <Badge variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  {college.type} Institution
                </Badge>
                <div className="flex items-center gap-1 bg-accent px-2 py-0.5 rounded text-xs font-bold text-accent-foreground">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {college.rating} Rating
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" data-testid="text-detail-name">{college.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm md:text-base">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {college.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  Established {college.established}
                </span>
              </div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 w-full md:w-auto md:min-w-[280px]">
              <div className="text-primary-foreground/70 text-sm mb-1">First Year Fees</div>
              <div className="text-3xl font-bold flex items-center mb-4">
                <IndianRupee className="w-6 h-6 mr-1" />
                {college.fees.toLocaleString('en-IN')}
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/90 bg-primary-foreground/5 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Admissions Open for 2025
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mb-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full flex justify-start bg-muted/30 border-b border-border rounded-none h-auto p-0 overflow-x-auto overflow-y-hidden no-scrollbar">
              <TabsTrigger value="overview" className="data-[state=active]:bg-card data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 text-base font-semibold" data-testid="tab-overview">Overview</TabsTrigger>
              <TabsTrigger value="courses" className="data-[state=active]:bg-card data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 text-base font-semibold" data-testid="tab-courses">Courses</TabsTrigger>
              <TabsTrigger value="infrastructure" className="data-[state=active]:bg-card data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 text-base font-semibold">Infrastructure</TabsTrigger>
              <TabsTrigger value="placements" className="data-[state=active]:bg-card data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 text-base font-semibold" data-testid="tab-placements">Placements</TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-card data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-4 text-base font-semibold" data-testid="tab-reviews">Reviews</TabsTrigger>
            </TabsList>

            <div className="p-6 md:p-8">
              <TabsContent value="overview" className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-0">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-10">
                    <section>
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Map className="w-6 h-6 text-primary" /> About the Campus
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-overview">
                        {college.overview}
                      </p>
                    </section>
                    
                    <Separator />
                    
                    <section>
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <BadgeCheck className="w-6 h-6 text-primary" /> Highlights
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-muted/30 p-4 rounded-xl border border-border flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <Trophy className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold">{college.placements.placementRate}% Placements</div>
                            <div className="text-sm text-muted-foreground">Consistent track record</div>
                          </div>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-xl border border-border flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <BookOpen className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold">{college.courses.length} Programs</div>
                            <div className="text-sm text-muted-foreground">Diverse academic branches</div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  
                  <div className="bg-muted/30 rounded-2xl p-6 border border-border h-fit">
                    <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Institution Type</div>
                        <div className="font-medium">{college.type}</div>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-sm text-muted-foreground">Established Year</div>
                        <div className="font-medium">{college.established}</div>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-sm text-muted-foreground">Location</div>
                        <div className="font-medium">{college.location}</div>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-sm text-muted-foreground">Stream</div>
                        <div className="font-medium">{college.stream}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="courses" className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-0">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" /> Programs Offered
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {college.courses.map((course, idx) => (
                    <div key={idx} className="bg-muted/30 p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors group">
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{course}</h3>
                      <p className="text-sm text-muted-foreground mb-4">Full Time Program</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="infrastructure" className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-0">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Building className="w-6 h-6 text-primary" /> Campus Infrastructure
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className={`p-6 rounded-2xl border ${college.infrastructure.library ? 'bg-primary/5 border-primary/20' : 'bg-muted/30 border-border opacity-60'}`}>
                    <Library className={`w-8 h-8 mb-4 ${college.infrastructure.library ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h3 className="font-bold text-lg mb-1">Central Library</h3>
                    <p className="text-sm text-muted-foreground">{college.infrastructure.library ? 'Available' : 'Not Available'}</p>
                  </div>
                  <div className={`p-6 rounded-2xl border ${college.infrastructure.hostel ? 'bg-primary/5 border-primary/20' : 'bg-muted/30 border-border opacity-60'}`}>
                    <Building className={`w-8 h-8 mb-4 ${college.infrastructure.hostel ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h3 className="font-bold text-lg mb-1">Hostel Facilities</h3>
                    <p className="text-sm text-muted-foreground">{college.infrastructure.hostel ? 'Available' : 'Not Available'}</p>
                  </div>
                  <div className={`p-6 rounded-2xl border ${college.infrastructure.sports ? 'bg-primary/5 border-primary/20' : 'bg-muted/30 border-border opacity-60'}`}>
                    <Dumbbell className={`w-8 h-8 mb-4 ${college.infrastructure.sports ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h3 className="font-bold text-lg mb-1">Sports Complex</h3>
                    <p className="text-sm text-muted-foreground">{college.infrastructure.sports ? 'Available' : 'Not Available'}</p>
                  </div>
                  <div className="p-6 rounded-2xl border bg-primary/5 border-primary/20">
                    <Monitor className="w-8 h-8 mb-4 text-primary" />
                    <h3 className="font-bold text-lg mb-1">Laboratories</h3>
                    <p className="text-sm text-muted-foreground">{college.infrastructure.labs} Advanced Labs</p>
                  </div>
                  <div className={`p-6 rounded-2xl border ${college.infrastructure.canteen ? 'bg-primary/5 border-primary/20' : 'bg-muted/30 border-border opacity-60'}`}>
                    <Coffee className={`w-8 h-8 mb-4 ${college.infrastructure.canteen ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h3 className="font-bold text-lg mb-1">Cafeteria</h3>
                    <p className="text-sm text-muted-foreground">{college.infrastructure.canteen ? 'Available' : 'Not Available'}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="placements" className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-0">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-8 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Trophy className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-primary-foreground/80 font-medium mb-2 uppercase tracking-wider text-sm">Highest Package</p>
                      <div className="text-5xl font-bold mb-8">{college.placements.highestPackage} <span className="text-2xl font-normal opacity-80">LPA</span></div>
                      
                      <p className="text-primary-foreground/80 font-medium mb-2 uppercase tracking-wider text-sm">Average Package</p>
                      <div className="text-4xl font-bold">{college.placements.averagePackage} <span className="text-xl font-normal opacity-80">LPA</span></div>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-8 rounded-3xl border border-border flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Users className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Placement Rate</div>
                        <div className="text-4xl font-bold text-foreground">{college.placements.placementRate}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 mb-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: `${college.placements.placementRate}%` }} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Consistently high placement rate across all major branches with students placed in top global companies.</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">Top Recruiters</h3>
                <div className="flex flex-wrap gap-3">
                  {college.placements.topRecruiters.map((recruiter, idx) => (
                    <div key={idx} className="px-6 py-3 bg-muted/30 border border-border rounded-xl font-medium shadow-sm hover:border-primary/30 transition-colors">
                      {recruiter}
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-0">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12 bg-muted/30 p-8 rounded-3xl border border-border">
                  <div className="text-center sm:text-left">
                    <div className="text-6xl font-bold text-foreground mb-2">{college.rating}</div>
                    <div className="flex justify-center sm:justify-start gap-1 text-accent mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-6 h-6 ${i < Math.floor(college.rating) ? "fill-current" : "text-muted fill-muted"}`} />
                      ))}
                    </div>
                    <div className="text-muted-foreground">Based on {college.reviews.length} verified reviews</div>
                  </div>
                  <div className="flex-1 w-full space-y-3">
                    {[5,4,3,2,1].map(star => (
                      <div key={star} className="flex items-center gap-3">
                        <div className="w-3 font-medium text-muted-foreground">{star}</div>
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-accent" style={{width: star === Math.floor(college.rating) ? '60%' : star === Math.floor(college.rating)-1 ? '30%' : '5%'}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {college.reviews.map((review, idx) => (
                    <div key={idx} className="bg-muted/30 p-6 rounded-2xl border border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                            {review.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-base">{review.author}</div>
                            <div className="text-sm text-muted-foreground">Class of {review.year}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded text-sm font-bold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          {review.rating}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">"{review.comment}"</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Similar Colleges */}
        {similarColleges.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Similar {college.stream} Colleges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarColleges.map((c) => (
                <CollegeCard key={c.id} college={c} isCompact />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}