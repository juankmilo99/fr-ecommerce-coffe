/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface CarouselProductProps {
  images: Array<{
    url: any;
    id: string;
    attributes: {      
      url: string;
    };
  }>;
}

const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props;

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <img
                src={`${image.url}`}
                alt="Image product"
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
