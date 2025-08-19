import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: {
    regular: string;
    gradient: string;
  };
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  bottomImage?: {
    light: string;
    dark: string;
  };
  gridOptions?: {
    angle?: number;
    cellSize?: number;
    opacity?: number;
    lightLineColor?: string;
    darkLineColor?: string;
  };
}
const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray"
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor
  } as React.CSSProperties;
  return <div className={cn("pointer-events-none absolute size-full overflow-hidden [perspective:200px]", `opacity-[var(--opacity)]`)} style={gridStyles}>
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>;
};
const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(({
  className,
  title = "Build products for everyone",
  subtitle = {
    regular: "Designing your projects faster with ",
    gradient: "the largest figma UI kit."
  },
  description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
  ctaText = "Browse courses",
  ctaHref = "#",
  bottomImage = {
    light: "https://farmui.vercel.app/dashboard-light.png",
    dark: "https://farmui.vercel.app/dashboard.png"
  },
  gridOptions,
  ...props
}, ref) => {
  return <div className={cn("relative min-h-screen bg-gradient-dark-blue", className)} ref={ref} {...props}>
        {/* Enhanced dark blue gradient background */}
        <div className="absolute top-0 z-[0] h-full w-full bg-gradient-to-br from-blue-950 via-slate-900 to-black" />
        <div className="absolute top-0 z-[1] h-full w-full" style={{
      background: 'radial-gradient(ellipse 60% 80% at 50% -20%, rgba(30, 64, 175, 0.3), rgba(15, 23, 42, 0.8))'
    }} />
        
        <section className="relative max-w-full mx-auto z-10">
          <RetroGrid angle={gridOptions?.angle || 65} cellSize={gridOptions?.cellSize || 45} opacity={gridOptions?.opacity || 0.15} lightLineColor="#1e40af" darkLineColor="#1e293b" {...gridOptions} />
          
          <div className="max-w-4xl z-20 mx-auto px-4 py-32 gap-12 md:px-8 flex flex-col items-center justify-center min-h-screen">
            <div className="space-y-8 max-w-4xl mx-auto text-center">
              {/* Top tag with glass effect */}
              
              
              {/* Main title with blue gradients - Extra Large */}
              <h1 className="text-[1.25rem] md:text-[3.5rem] lg:text-[5.5rem] xl:text-[5.5rem] font-bold tracking-tight leading-tight">
                <span className="text-white">{title}</span>
                <br />
                <span className="text-white">{subtitle.regular}</span>
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {subtitle.gradient}
                </span>
                <br />
                <span className="text-white">{description}</span>
              </h1>
              
              {/* CTA Button with gradient */}
              <div className="pt-4">
                <a href={ctaHref} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-button rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                  {ctaText}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>;
});
HeroSection.displayName = "HeroSection";
export { HeroSection };