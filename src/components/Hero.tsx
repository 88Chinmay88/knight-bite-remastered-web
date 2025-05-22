
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-pattern min-h-screen flex items-center justify-center pt-16 pb-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-knight-black/40 to-knight-black z-10"></div>
      <div className="container px-4 mx-auto relative z-20 text-center">
        <div className="animate-fade-in max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-white mb-6 leading-tight">
            A Royal <span className="text-knight-gold">Dining</span> Experience
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Indulge in exquisite cuisine crafted with passion and served with elegance. 
            Experience the finest flavors in an atmosphere fit for royalty.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('menu')}
              className="bg-knight-gold hover:bg-knight-gold/80 text-knight-black text-lg py-6 px-8"
            >
              Explore Our Menu
            </Button>
            <Button 
              onClick={() => scrollToSection('reservation')}
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg py-6 px-8"
            >
              Book a Table
            </Button>
          </div>
          
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-knight-gold/20">
              <h3 className="font-serif text-knight-gold text-xl mb-2">Exquisite Food</h3>
              <p className="text-white/70">Crafted with the finest ingredients by world-class chefs.</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-knight-gold/20">
              <h3 className="font-serif text-knight-gold text-xl mb-2">Premium Service</h3>
              <p className="text-white/70">Attentive staff dedicated to providing royal treatment.</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-knight-gold/20">
              <h3 className="font-serif text-knight-gold text-xl mb-2">Elegant Ambiance</h3>
              <p className="text-white/70">Sophisticated atmosphere perfect for memorable occasions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
