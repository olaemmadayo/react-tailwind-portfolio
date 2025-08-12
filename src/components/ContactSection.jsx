import { Instagram, Linkedin, Mail, MapPinIcon, Phone, Send, Twitch, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {

  return (
    <section 
      id="contact" 
      className="py-24 px-4 relative bg-secondary/30 text-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary"> Touch</span>
        </h2>
      

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have any questions, want to collaborate on a project, or just want to say hello, feel free to reach out! I'm always open to new opportunities and connections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">
                    Email
                  </h4>
                  <a 
                    href="mailto:olatoye.temidayo@yahoo.com"
                    className="text-muted-foreground hover:text-primary transitions colors"
                  >
                    olatoye.temidayo@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">
                    Phone
                  </h4>
                  <a 
                    href="tel:+2348100075670"
                    className="text-muted-foreground hover:text-primary transitions colors"
                  >
                    +234 810 007 5670
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPinIcon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">
                    Address
                  </h4>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-primary transitions colors"
                  >
                    Addis Ababa, Ethiopia
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium text-center mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/olatoye-temidayo-0b1a4b1b2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a href="https://https://x.com/olatoyespecial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/olaemmadayo?igsh=ZDQxZXJma3QzcHFs&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
                <a href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold text-center mb-6">Send a Message</h3>

            <form action="" className="space-y-6">
              <div>
                <label htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-2 text-center"
                >
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-4 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                  placeholder="Mark Zuckerberg"
                  required
                />

                <label htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2 text-center"
                >
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-4 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                  placeholder="mark@gmail.com"
                  required
                />

                <label htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2 text-center"
                >
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="w-full px-4 py-4 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-6"
                  placeholder="Hello, I would like to discuss..."
                  required
                />

                <button 
                  type="submit"
                  className={cn("cosmic-button w-full flex items-center justify-center gap-2", "bg-primary text-white hover:bg-primary/90 transitions colors")}
                
                >
                  Send Message
                  <Send size={20} />
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>

    </section>
  );
};