
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-knight-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Story</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-knight-black mb-4">
              A Tradition of Excellence Since 2005
            </h3>
            <p className="mb-4 text-knight-black/80">
              Knight Bite was founded with a simple yet powerful vision: to create a dining experience that combines the rich traditions of culinary excellence with innovative techniques and flavors. Our journey began in 2005, when Chef Alexander Knight opened our doors with a commitment to quality, creativity, and exceptional service.
            </p>
            <p className="mb-6 text-knight-black/80">
              Today, Knight Bite stands as a testament to that vision. Our restaurant has evolved into a destination for food enthusiasts seeking authentic flavors and memorable dining moments. With a team of passionate culinary experts, we continue to push boundaries while honoring the timeless traditions that define great cuisine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-knight-red hover:bg-knight-red/90 text-white">
                Meet Our Team
              </Button>
              <Button variant="outline" className="border-knight-black text-knight-black hover:bg-knight-black/10">
                Our Philosophy
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg h-48 md:h-64 bg-knight-gold/20"></div>
              <div className="rounded-lg overflow-hidden shadow-lg h-40 md:h-48 bg-knight-red/20"></div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg h-40 md:h-48 bg-knight-brown/20"></div>
              <div className="rounded-lg overflow-hidden shadow-lg h-48 md:h-64 bg-knight-black/20"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-knight-gold">
            <h3 className="font-serif text-xl font-bold text-knight-black mb-3">Our Mission</h3>
            <p className="text-knight-black/70">
              To deliver unforgettable dining experiences through exceptional cuisine, attentive service, and a warm, inviting atmosphere that makes every guest feel special.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-knight-gold">
            <h3 className="font-serif text-xl font-bold text-knight-black mb-3">Our Vision</h3>
            <p className="text-knight-black/70">
              To be recognized as a culinary destination that consistently exceeds expectations while honoring the traditions and techniques that make great food truly special.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-knight-gold">
            <h3 className="font-serif text-xl font-bold text-knight-black mb-3">Our Values</h3>
            <p className="text-knight-black/70">
              Excellence, creativity, authenticity, and hospitality are the cornerstone values that guide everything we do, from sourcing ingredients to serving our guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
