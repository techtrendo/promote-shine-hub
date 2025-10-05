import { Star, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PanelCardProps {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  users: string;
  verified?: boolean;
  featured?: boolean;
  categories: string[];
}

const PanelCard = ({
  name,
  description,
  rating,
  reviews,
  users,
  verified = false,
  featured = false,
  categories,
}: PanelCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {name}
            </h3>
            {verified && (
              <CheckCircle className="h-5 w-5 text-success" />
            )}
          </div>
          {featured && (
            <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
              <TrendingUp className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardHeader>

      <CardContent className="space-y-3 flex-1">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviews})</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{users}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex space-x-2">
        <Button variant="outline" className="flex-1" size="sm">
          View Details
        </Button>
        <Button className="flex-1 bg-gradient-primary hover:opacity-90" size="sm">
          Visit Panel
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PanelCard;
