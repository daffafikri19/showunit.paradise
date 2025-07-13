import { Card } from "./ui/card";
import { MagicCard } from "./magicui/magic-card";
import { BathIcon, BedIcon, HouseIcon, MaximizeIcon } from "lucide-react";

export const CardUnit = ({
  image,
  title,
  bedsize,
  bathsize,
  landsize,
  housesize,
}: {
  image: string;
  title: string;
  bedsize: string;
  bathsize: string;
  landsize: string;
  housesize: string;
}) => {
  return (
    <Card className="relative border-none p-0 w-full max-w-lg mx-auto hover:cursor-pointer hover:scale-105 transition-all duration-600">
      <MagicCard
        gradientColor="#D9D9D955"
        className="p-[2px]"
        gradientFrom="#8e6225"
        gradientTo="#FFFFFF"
      >
        <div className="flex flex-col w-full">
          {/* Gambar */}
          <div className="w-full">
            <img
              src={image}
              className="rounded-t-lg w-full object-cover"
              alt={title}
            />
          </div>
          {/* Konten */}
          <div className="bg-card rounded-b-lg p-4 sm:p-6 space-y-4">
            <h1 className="bg-gradient-to-b from-primary to-neutral-500 bg-clip-text font-bold text-transparent text-xl sm:text-2xl md:text-3xl">
              {title}
            </h1>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="flex items-center gap-2 justify-center">
                <BedIcon color="#8e6225" className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="text-primary font-semibold text-sm sm:text-base">
                  {bedsize}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <BathIcon color="#8e6225" className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="text-primary font-semibold text-sm sm:text-base">
                  {bathsize}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MaximizeIcon
                  color="#8e6225"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <span className="text-primary font-semibold text-sm sm:text-base">
                  {landsize}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <HouseIcon color="#8e6225" className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="text-primary font-semibold text-sm sm:text-base">
                  {housesize}
                </span>
              </div>
            </div>

            <div></div>

            {/* <div className="flex space-x-10">
              <div className="bg-primary h-10 w-10 lg:h-15 lg:w-15 rounded-full shadow-2xl flex items-center justify-center text-center">
                <span className="text-white dark:text-black font-black text-sm">
                  2 lantai
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </MagicCard>
    </Card>
  );
};
