import ParadiseHeroImage from "../assets/paradise-hero-banner.jpg";
import { cn } from "@/lib/utils";
import { TextAnimate } from "./magicui/text-animate";
import { BlurFade } from "./magicui/blur-fade";
import { ShinyButton } from "./magicui/shiny-button";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-background">
      <img
        src={ParadiseHeroImage}
        alt="Paradise Serpong City"
        className={cn(
          "absolute inset-0 w-full h-full object-cover object-center",
          "[mask-image:radial-gradient(circle_at_center,white_0%,rgba(255,255,255,0.7)_50%,transparent_99%)]"
        )}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
        <div className="space-y-4">
          <TextAnimate
            animation="blurIn"
            as="h1"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            duration={0.5}
          >
            Temukan Rumah Impian Anda
          </TextAnimate>
          <TextAnimate
            duration={0.5}
            animation="blurIn"
            as="p"
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl mx-auto"
          >
            Hunian modern dengan desain elegan dan lokasi strategis di Paradise
            Serpong City.
          </TextAnimate>
        </div>
        <BlurFade delay={0.7} inView>
          <a href="#properties">
            <ShinyButton className="hover:scale-105 transition-all duration-500 hover:bg-primary">
              Jelajahi Unit Kami
            </ShinyButton>
          </a>
        </BlurFade>
      </div>
    </section>
  );
};
