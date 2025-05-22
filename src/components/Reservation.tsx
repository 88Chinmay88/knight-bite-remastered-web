
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Reservation = () => {
  const { toast } = useToast();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle reservation submission
    toast({
      title: "Reservation Request Submitted",
      description: `Thank you, ${name}. We'll confirm your reservation shortly.`,
    });
    
    // Reset form
    setDate("");
    setTime("");
    setGuests("");
    setName("");
    setEmail("");
    setPhone("");
    setSpecialRequests("");
  };

  return (
    <section id="reservation" className="py-20 bg-knight-red">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-white">Make a Reservation</h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Reserve your table today and experience the royal treatment at Knight Bite.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-knight-black p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-serif text-knight-gold text-2xl font-bold mb-4">
                  Reserve Your Experience
                </h3>
                <p className="text-white/70 mb-6">
                  Secure your table and prepare for an unforgettable dining experience.
                </p>
                <div className="space-y-4 text-left text-white">
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <p>For parties over 8, please call us directly</p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <p>Same-day reservations are based on availability</p>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">•</span>
                    <p>Special occasions? Let us know in advance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-knight-black mb-1">
                      Date
                    </label>
                    <Input 
                      id="date" 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="border-knight-gold/20 focus-visible:ring-knight-gold/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-knight-black mb-1">
                      Time
                    </label>
                    <Select value={time} onValueChange={setTime} required>
                      <SelectTrigger className="border-knight-gold/20 focus-visible:ring-knight-gold/50">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="17:30">5:30 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="18:30">6:30 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="19:30">7:30 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                        <SelectItem value="20:30">8:30 PM</SelectItem>
                        <SelectItem value="21:00">9:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-knight-black mb-1">
                    Number of Guests
                  </label>
                  <Select value={guests} onValueChange={setGuests} required>
                    <SelectTrigger className="border-knight-gold/20 focus-visible:ring-knight-gold/50">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="3">3 People</SelectItem>
                      <SelectItem value="4">4 People</SelectItem>
                      <SelectItem value="5">5 People</SelectItem>
                      <SelectItem value="6">6 People</SelectItem>
                      <SelectItem value="7">7 People</SelectItem>
                      <SelectItem value="8">8 People</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-knight-black mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name" 
                      className="border-knight-gold/20 focus-visible:ring-knight-gold/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-knight-black mb-1">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your Phone" 
                      className="border-knight-gold/20 focus-visible:ring-knight-gold/50"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-knight-black mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email" 
                    className="border-knight-gold/20 focus-visible:ring-knight-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="special-requests" className="block text-sm font-medium text-knight-black mb-1">
                    Special Requests (Optional)
                  </label>
                  <textarea 
                    id="special-requests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Any special requests or dietary requirements" 
                    className="w-full px-3 py-2 border border-knight-gold/20 rounded-md focus:outline-none focus:ring-2 focus:ring-knight-gold/50 resize-none min-h-[80px]"
                  />
                </div>
                
                <Button type="submit" className="bg-knight-gold hover:bg-knight-gold/90 text-knight-black w-full">
                  Reserve Now
                </Button>
                
                <p className="text-xs text-knight-black/60 text-center">
                  By making a reservation, you agree to our reservation policy including our 24-hour cancellation policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
