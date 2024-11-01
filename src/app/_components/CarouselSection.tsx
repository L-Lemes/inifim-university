import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type TData = { id: number; name: string };
interface ICarouselSectionProps {
  title: string;
  data: TData[];
}

export const CarouselSection = ({ title, data }: ICarouselSectionProps) => (
  <div className="mt-[4rem]">
    <header className="w-full flex justify-between mb-8">
      <h2 className="text-lg font-medium">{title}</h2>
      <ArrowRight width={20} height={20} color="#DFEAEC" />
    </header>
    <Carousel
      className="w-full"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="w-full -ml-6">
        {data.map((e) => (
          <CarouselItem className="basis-[48%] pl-6" key={e.id}>
            <div className="flex justify-center items-center h-[calc(48vw*2/3)] bg-gradient-to-br from-[#1A99B2] to-[#0B414C] rounded-xl">
              {e.name}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
);
