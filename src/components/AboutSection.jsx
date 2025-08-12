import { Briefcase, Code, User } from "lucide-react";




export const AboutSection = () => {

  const resume = "/resume/Front-endR.pdf";

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          About
          <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Bro</h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize in creating dynamic and responsive web applications. My journey began with a fascination for technology and has evolved into a passion for building user-centric solutions that solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating solutions to complex problems and continuously learning new technologies. My expertise lies in full-stack development, where I enjoy working on both the front-end and back-end to deliver seamless user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a href="contact" className="cosmic-button">Get in Touch</a>
              <a href={resume} 
                download 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10
                transition-colors duration-300 "
               
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">Creating Responsive websites and applications  with 
                    modern technologies like React, Node.js, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and engaging user interfaces that enhance user experience and drive engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from concept to completion, ensuring timely delivery and high-quality standards.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};