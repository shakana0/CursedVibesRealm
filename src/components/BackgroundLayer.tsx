import Image from "next/image";

export function BackgroundLayer({ image }: { image: string }) {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={image}
        alt="Scene background"
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  );
}
