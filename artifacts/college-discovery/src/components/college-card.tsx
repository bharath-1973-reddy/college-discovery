import { Link } from "wouter";
import { MapPin, Star, IndianRupee, Trophy, GraduationCap } from "lucide-react";
import { College } from "@/data/colleges";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CollegeCard({ college }: { college: College }) {
  return (
    <Link href={`/colleges/${college.id}`} data-testid={`link-college-${college.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 bg-card group cursor-pointer flex flex-col">
        <CardHeader className="p-0">
          <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/20 text-primary font-medium">
                {college.type}
              </Badge>
              <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md text-sm font-medium border border-primary/10">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span data-testid={`text-rating-${college.id}`}>{college.rating}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-primary/70 mt-4">
              <GraduationCap className="w-4 h-4" />
              <span>Est. {college.established}</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 flex-grow">
          <h3 className="font-bold text-lg text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors" data-testid={`text-name-${college.id}`}>
            {college.name}
          </h3>
          
          <div className="flex items-start gap-2 text-muted-foreground text-sm mb-4">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="line-clamp-2" data-testid={`text-location-${college.id}`}>{college.location}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {college.courses.slice(0, 2).map((course, idx) => (
              <Badge key={idx} variant="secondary" className="font-normal text-xs bg-secondary hover:bg-secondary">
                {course}
              </Badge>
            ))}
            {college.courses.length > 2 && (
              <Badge variant="secondary" className="font-normal text-xs bg-secondary hover:bg-secondary">
                +{college.courses.length - 2} more
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-between items-end border-t border-border/50 bg-muted/20">
          <div className="pt-4">
            <p className="text-xs text-muted-foreground mb-1">Annual Fees</p>
            <div className="flex items-center font-semibold text-foreground" data-testid={`text-fees-${college.id}`}>
              <IndianRupee className="w-4 h-4 mr-0.5" />
              {college.fees.toLocaleString('en-IN')}
            </div>
          </div>
          
          <div className="pt-4 text-right">
            <p className="text-xs text-muted-foreground mb-1">Avg Package</p>
            <div className="flex items-center justify-end font-semibold text-primary" data-testid={`text-pkg-${college.id}`}>
              <Trophy className="w-4 h-4 mr-1 text-primary/70" />
              {college.placements.averagePackage} LPA
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
