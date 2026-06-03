import { useSearch, Link } from "wouter";
import { ArrowLeft, Check, X, MapPin, IndianRupee, Star, Trophy } from "lucide-react";
import { colleges } from "@/data/colleges";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Compare() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const idsParam = searchParams.get("ids");
  
  const idsToCompare = idsParam ? idsParam.split(",").map(Number).filter(id => !isNaN(id)) : [];
  const selectedColleges = colleges.filter(c => idsToCompare.includes(c.id)).slice(0, 3);

  if (selectedColleges.length === 0) {
    return (
      <div className="min-h-screen bg-muted/20">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">No colleges selected for comparison</h1>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Colleges
        </Link>

        <h1 className="text-3xl font-bold mb-8">Compare Colleges</h1>

        <div className="bg-card rounded-2xl border border-border overflow-x-auto shadow-sm">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 border-b border-r border-border bg-muted/30 w-1/4 align-top">
                  <div className="font-bold text-lg mb-2">Features</div>
                  <div className="text-sm text-muted-foreground font-normal">Compare parameters side-by-side</div>
                </th>
                {selectedColleges.map(college => (
                  <th key={college.id} className="p-6 border-b border-r border-border w-1/4 align-top last:border-r-0">
                    <div className="text-sm text-primary font-bold mb-2">#{college.rank} in India</div>
                    <Link href={`/colleges/${college.id}`}>
                      <h3 className="font-bold text-xl hover:text-primary transition-colors line-clamp-2 leading-tight">{college.name}</h3>
                    </Link>
                  </th>
                ))}
                {/* Empty columns if less than 3 */}
                {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
                  <th key={`empty-head-${i}`} className="p-6 border-b border-r border-border w-1/4 bg-muted/10 last:border-r-0">
                    <div className="h-full flex items-center justify-center text-muted-foreground border-2 border-dashed border-border rounded-xl p-8 text-center">
                      Select another college to compare
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Location */}
              <tr>
                <td className="p-4 border-b border-r border-border font-semibold bg-muted/10">Location</td>
                {selectedColleges.map(c => (
                  <td key={c.id} className="p-4 border-b border-r border-border last:border-r-0">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      {c.location}
                    </div>
                  </td>
                ))}
                {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
                  <td key={`empty-loc-${i}`} className="p-4 border-b border-r border-border bg-muted/10 last:border-r-0"></td>
                ))}
              </tr>

              {/* Type */}
              <tr>
                <td className="p-4 border-b border-r border-border font-semibold bg-muted/10">Institution Type</td>
                {selectedColleges.map(c => (
                  <td key={c.id} className="p-4 border-b border-r border-border last:border-r-0">{c.type}</td>
                ))}
                {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
                  <td key={`empty-type-${i}`} className="p-4 border-b border-r border-border bg-muted/10 last:border-r-0"></td>
                ))}
              </tr>

              {/* Fees */}
              <tr>
                <td className="p-4 border-b border-r border-border font-semibold bg-muted/10">First Year Fees</td>
                {selectedColleges.map(c => (
                  <td key={c.id} className="p-4 border-b border-r border-border last:border-r-0">
                    <div className="flex items-center font-bold text-lg">
                      <IndianRupee className="w-4 h-4 mr-1" />
                      {c.fees.toLocaleString('en-IN')}
                    </div>
                  </td>
                ))}
                {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
                  <td key={`empty-fees-${i}`} className="p-4 border-b border-r border-border bg-muted/10 last:border-r-0"></td>
                ))}
              </tr>

              {/* Rating */}
              <tr>
                <td className="p-4 border-b border-r border-border font-semibold bg-muted/10">Rating</td>
                {selectedColleges.map(c => (
                  <td key={c.id} className="p-4 border-b border-r border-border last:border-r-0">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded text-sm font-bold text-accent-foreground">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        {c.rating}
                      </div>
                      <span className="text-sm text-muted-foreground">({c.reviews.length} reviews)</span>
                    </div>
                  </td>
                ))}
                {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
                  <td key={`empty-rating-${i}`} className="p-4 border-b border-r border-border bg-muted/10 last:border-r-0"></td>
                ))}
              </tr>

              {/* Average Package */}
              <tr>
                <td className="p-4 border-b border-r border-border font-semibold bg-muted/10">Average Package</td>
                {selectedColleges.map(c => (
                  <td key={c.id} className="p-4 border-b border-r border-border last:border-r-0">
                    <div className="flex items-center text-primary font-bold">
                      <Trophy className="w-4 h-4 mr-2" />
                      {c.placements.averagePackage} LPA
                    </div>
                  </td>
                ))}
                {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
                  <td key={`empty-avg-${i}`} className="p-4 border-b border-r border-border bg-muted/10 last:border-r-0"></td>
                ))}
              </tr>

              {/* Highest Package */}
              <tr>
                <td className="p-4 border-b border-r border-border font-semibold bg-muted/10">Highest Package</td>
                {selectedColleges.map(c => (
                  <td key={c.id} className="p-4 border-b border-r border-border last:border-r-0 font-semibold">
                    {c.placements.highestPackage} LPA
                  </td>
                ))}
                {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
                  <td key={`empty-high-${i}`} className="p-4 border-b border-r border-border bg-muted/10 last:border-r-0"></td>
                ))}
              </tr>

              {/* Placement Rate */}
              <tr>
                <td className="p-4 border-b border-r border-border font-semibold bg-muted/10">Placement Rate</td>
                {selectedColleges.map(c => (
                  <td key={c.id} className="p-4 border-b border-r border-border last:border-r-0">
                    <div className="flex items-center gap-3">
                      <span className="font-bold">{c.placements.placementRate}%</span>
                      <div className="w-full bg-muted rounded-full h-2 max-w-[100px]">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${c.placements.placementRate}%` }} />
                      </div>
                    </div>
                  </td>
                ))}
                {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
                  <td key={`empty-rate-${i}`} className="p-4 border-b border-r border-border bg-muted/10 last:border-r-0"></td>
                ))}
              </tr>

              {/* Courses */}
              <tr>
                <td className="p-4 border-r border-border font-semibold bg-muted/10 align-top">Top Courses</td>
                {selectedColleges.map(c => (
                  <td key={c.id} className="p-4 border-r border-border last:border-r-0 align-top">
                    <ul className="space-y-2">
                      {c.courses.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
                {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
                  <td key={`empty-courses-${i}`} className="p-4 border-r border-border bg-muted/10 last:border-r-0"></td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}