import type { GalleryImage } from '@/types';

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {images.map((image, index) => (
        <div key={image.id} className={index === 0 ? 'lg:col-span-2 lg:row-span-2 overflow-hidden rounded-[2rem]' : 'overflow-hidden rounded-[2rem]'}>
          <img src={image.imageUrl} alt={image.alt} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        </div>
      ))}
    </div>
  );
}
