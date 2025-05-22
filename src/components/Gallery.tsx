
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, category: "food" },
    { id: 2, category: "interior" },
    { id: 3, category: "food" },
    { id: 4, category: "events" },
    { id: 5, category: "food" },
    { id: 6, category: "interior" },
  ];

  const openImage = (id: number) => {
    setSelectedImage(id);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-knight-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-white">Our Gallery</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Take a visual journey through our restaurant, our dishes, and the experiences we create.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="aspect-square bg-knight-gold/20 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImage(image.id)}
            >
              <div className="h-full w-full bg-knight-gold/20 flex items-center justify-center">
                <span className="text-knight-gold/50 font-serif text-xl">Image {image.id}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            View More Photos
          </Button>
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl bg-knight-black border-knight-gold/20">
          <div className="aspect-video bg-knight-gold/20 rounded-lg flex items-center justify-center">
            <span className="text-knight-gold font-serif text-xl">Full Image {selectedImage}</span>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
