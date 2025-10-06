import { ExternalLink } from "lucide-react";

interface AdSpaceProps {
  size?: "small" | "medium" | "large" | "banner" | "skyscraper";
  label?: string;
  className?: string;
}

const AdSpace = ({ size = "medium", label = "Advertisement", className = "" }: AdSpaceProps) => {
  const sizeClasses = {
    small: "h-24",
    medium: "h-64",
    large: "h-96",
    banner: "h-32 w-full",
    skyscraper: "h-[600px] w-40",
  };

  const pixelDimensions = {
    small: "300 × 96px",
    medium: "300 × 256px",
    large: "300 × 384px",
    banner: "728 × 128px",
    skyscraper: "160 × 600px",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className} bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg flex flex-col items-center justify-center p-4 hover:border-primary/30 transition-colors group`}
    >
      <ExternalLink className="h-8 w-8 text-muted-foreground/40 mb-2 group-hover:text-primary/40 transition-colors" />
      <p className="text-sm text-muted-foreground/60 font-medium">{label}</p>
      <p className="text-xs text-muted-foreground/40 mt-1">Space Available</p>
      <p className="text-xs text-muted-foreground/50 font-mono mt-1">{pixelDimensions[size]}</p>
    </div>
  );
};

export default AdSpace;
