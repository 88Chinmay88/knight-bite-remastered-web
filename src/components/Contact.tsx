
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Contact Us</h2>
          <p className="mt-4 text-knight-black/70 max-w-2xl mx-auto">
            Have questions or want to provide feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-knight-black p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-white/70 mb-6">
              We value your feedback and are here to answer any questions you may have.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-knight-gold font-medium mb-1">Address</h4>
                <p className="text-white/70">123 Royal Street, Knightsville, KN 12345</p>
              </div>

              <div>
                <h4 className="text-knight-gold font-medium mb-1">Phone</h4>
                <p className="text-white/70">(123) 456-7890</p>
              </div>

              <div>
                <h4 className="text-knight-gold font-medium mb-1">Email</h4>
                <p className="text-white/70">info@knight-bite.com</p>
              </div>

              <div>
                <h4 className="text-knight-gold font-medium mb-1">Hours</h4>
                <p className="text-white/70">
                  Monday - Thursday: 11:00 AM - 10:00 PM<br />
                  Friday - Saturday: 11:00 AM - 11:00 PM<br />
                  Sunday: 11:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-knight-gold/10">
            <h3 className="font-serif text-2xl font-bold text-knight-black mb-4">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-knight-black mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    className="border-knight-gold/20 focus-visible:ring-knight-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-knight-black mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email" 
                    className="border-knight-gold/20 focus-visible:ring-knight-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-knight-black mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Subject" 
                    className="border-knight-gold/20 focus-visible:ring-knight-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-knight-black mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your Message" 
                    className="border-knight-gold/20 focus-visible:ring-knight-gold/50 min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-knight-red hover:bg-knight-red/90 text-white w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
