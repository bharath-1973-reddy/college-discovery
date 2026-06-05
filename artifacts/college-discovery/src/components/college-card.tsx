import { Link } from "wouter";
import { MapPin, Star, IndianRupee, Trophy, GraduationCap, Check } from "lucide-react";
import { College } from "@/data/colleges";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

interface CollegeCardProps {
  college: College;
  isHorizontal?: boolean;
  isCompact?: boolean;
  onCompareToggle?: (id: number, checked: boolean) => void;
  isCompared?: boolean;
}

export function CollegeCard({ college, isHorizontal = false, isCompact = false, onCompareToggle, isCompared = false }: CollegeCardProps) {
  
  if (isCompact) {
    return (
      <Link href={`/colleges/${college.id}`} data-testid={`link-college-${college.id}`}>
        <Card className="min-w-[280px] h-full overflow-hidden hover:shadow-md transition-all duration-300 border-border bg-card group cursor-pointer">
          <div className="p-4 bg-primary/5 flex items-center justify-between">
            {college.rank <= 50 && (
              <Badge className="bg-amber-500 text-white hover:bg-amber-600 border-none font-bold">
                #{college.rank} in India
              </Badge>
            )}
            <div className="flex items-center gap-1 bg-background px-2 py-0.5 rounded text-xs font-bold text-accent-foreground border border-border ml-auto">
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              {college.rating}
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-base line-clamp-1 mb-1 group-hover:text-primary transition-colors">{college.name}</h3>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span className="line-clamp-1">{college.location}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (isHorizontal) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border group flex flex-col sm:flex-row relative">
        {onCompareToggle && (
          <div className="absolute top-4 left-4 z-10" onClick={handleCompareClick}>
            <Checkbox 
              checked={isCompared}
              onCheckedChange={(checked) => onCompareToggle(college.id, checked as boolean)}
              className="bg-background border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              data-testid={`compare-checkbox-${college.id}`}
            />
          </div>
        )}
        <Link href={`/colleges/${college.id}`} className="flex-1 flex flex-col sm:flex-row">
          <div className="sm:w-64 bg-gradient-to-br from-primary/10 to-primary/5 p-6 flex flex-col justify-between shrink-0 h-48 sm:h-auto">
            <div className="flex justify-end">
               {college.rank <= 50 && (
                <Badge className="bg-amber-500 text-white hover:bg-amber-600 border-none font-bold shadow-sm">
                  #{college.rank} in India
                </Badge>
              )}
            </div>
            <div className="flex flex-col gap-2 mt-auto">
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/20 text-primary w-fit">
                {college.type}
              </Badge>
              <div className="flex flex-wrap gap-1">
                 {college.courses.slice(0, 2).map((course, idx) => (
                    <Badge key={idx} variant="secondary" className="font-normal text-[10px] bg-background/60">
                      {course}
                    </Badge>
                  ))}
              </div>
            </div>
          </div>
          
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="font-bold text-xl text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {college.name}
                </h3>
                <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-md text-sm font-bold border border-accent/20 shrink-0">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span>{college.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span className="line-clamp-1">{college.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Est. {college.established}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{college.overview}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-1">First Year Fees</p>
                <div className="flex items-center font-bold text-foreground">
                  <IndianRupee className="w-4 h-4 mr-0.5" />
                  {college.fees.toLocaleString('en-IN')}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Average Package</p>
                <div className="flex items-center font-bold text-primary">
                  <Trophy className="w-4 h-4 mr-1 text-primary/70" />
                  {college.placements.averagePackage} LPA
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Highest Package</p>
                <div className="flex items-center font-bold text-foreground">
                  {college.placements.highestPackage} LPA
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    );
  }

  return (
    <Link href={`/colleges/${college.id}`} data-testid={`link-college-${college.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 bg-card group cursor-pointer flex flex-col relative">
        {onCompareToggle && (
          <div className="absolute top-4 left-4 z-10" onClick={handleCompareClick}>
            <Checkbox 
              checked={isCompared}
              onCheckedChange={(checked) => onCompareToggle(college.id, checked as boolean)}
              className="bg-background border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
          </div>
        )}
        <CardHeader className="p-0">
          <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start pl-8">
               <div className="flex gap-2">
                 {college.rank <= 50 && (
                  <Badge className="bg-amber-500 text-white hover:bg-amber-600 border-none font-bold">
                    #{college.rank}
                  </Badge>
                )}
               </div>
              <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md text-sm font-medium border border-primary/10">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span>{college.rating}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-5 flex-grow">
          <h3 className="font-bold text-lg text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {college.name}
          </h3>
          
          <div className="flex items-start gap-2 text-muted-foreground text-sm mb-4">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="line-clamp-2">{college.location}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="outline" className="text-primary">{college.type}</Badge>
            {college.courses.slice(0, 1).map((course, idx) => (
              <Badge key={idx} variant="secondary" className="font-normal text-xs bg-secondary">
                {course}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0 flex justify-between items-end border-t border-border/50 bg-muted/20 mt-auto">
          <div className="pt-4">
            <p className="text-xs text-muted-foreground mb-1">Fees</p>
            <div className="flex items-center font-semibold text-foreground text-sm">
              <IndianRupee className="w-3.5 h-3.5 mr-0.5" />
              {college.fees.toLocaleString('en-IN')}
            </div>
          </div>
          
          <div className="pt-4 text-right">
            <p className="text-xs text-muted-foreground mb-1">Avg Pkg</p>
            <div className="flex items-center justify-end font-semibold text-primary text-sm">
              <Trophy className="w-3.5 h-3.5 mr-1 text-primary/70" />
              {college.placements.averagePackage}L
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}