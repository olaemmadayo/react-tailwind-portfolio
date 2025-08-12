import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real Estate App",
    description: 
      "A full-stack real estate application built with React and Node.js, featuring property listings,user authentication, and a responsive design.",
    image: "/projects/shelterly.jpg",
    tag: ["React", "Node.js", "MongoDB"],
    link: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Tech Solution web App",
    description: 
      "A full-stack application that provides tech solutions to users, built with React and Node.js, featuring user authentication and a responsive design.",
    image: "/projects/tech1.jpg",
    tag: ["React", "Node.js", "PHP"],
    link: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Tech Hub E-commerce App",
    description: 
      "Tech hub App is frontend and backend application with interactive analytics dashboard using  data visualization and filter capabilities.",
    image: "/projects/tech2.jpg",
    tag: ["React", "Node.js", "SQL"],
    link: "#",
    githubUrl: "#",
  }


]


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative" >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured 
          <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
          Here are some of my recent projects that showcase my skills and expertise in web development with attention to detail and user experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div 
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover "
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className=
                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tag.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                  ))}
                </div>
              
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 ">{project.description}</p>
              <div className="flex justify-between item-center">
                <div className="flex space-x-3">
                  <a 
                    href={project.link}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20}/>
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20}/>
                  </a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/olaemmadayo" 
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto"
          >
            Check My Github 
            <ArrowRight size={16} className="inline-block ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};