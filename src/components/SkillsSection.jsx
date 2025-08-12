import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend Skills
  {name: "HTML/CSS", level: 95, category:"frontend"},
  {name: "JavaScript", level: 90, category:"frontend"},
  {name: "React", level: 90, category:"frontend"},
  {name: "TypeScript", level: 80, category:"frontend"},
  {name: "Tailwind", level: 90, category:"frontend"},
  {name: "Next.js", level: 85, category:"frontend"},

  // Backend Skills
  {name: "Node.js", level: 80, category:"backend"},
  {name: "Express", level: 75, category:"backend"},
  {name: "MongoDB", level: 70, category:"backend"},
  {name: "PostgresSQL", level: 65, category:"backend"},
  {name: "GraphQL", level: 80, category:"backend"},
  {name: "PHP", level: 80, category:"backend"},

  // DevOps Skills
  {name: "Docker", level: 70, category:"devops"},
  {name: "Kubernetes", level: 60, category:"devops"},
  {name: "AWS", level: 75, category:"devops"},
  {name: "CI/CD", level: 70, category:"devops"},
  {name: "Git", level: 90, category:"devops"},
  {name: "GitHub", level: 90, category:"devops"},
  {name: "VS code", level: 90, category:"devops"},

]

const categories = ["all", "frontend", "backend", "devops"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={category}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key} 
              className="bg-card p-6 rounded-lg shadow-xs card-hover transition-shadow duration-300"
            >
              <div className="text-left mb-4">
                <h3 className="font-semi-bold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{width: skill.level + "%"}}  
                />
              </div>
              <div className="text-right mt-1 ">
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};