import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { Cloud, ServerCog, Code, Database } from "lucide-react";

export function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      color: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      iconBg: "bg-blue-500",
      skills: ["AWS EC2", "Lambda", "S3", "RDS", "VPC", "CloudWatch"]
    },
    {
      icon: ServerCog,
      title: "DevOps & CI/CD",
      color: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
      iconBg: "bg-emerald-500",
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Ansible"]
    },
    {
      icon: Code,
      title: "Programming",
      color: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
      iconBg: "bg-purple-500",
      skills: ["Python", "TypeScript", "Node.js", "FastAPI", "Flask", "SQL"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
      iconBg: "bg-orange-500",
      skills: ["PostgreSQL", "MongoDB", "Amazon RDS", "DynamoDB", "Aurora"]
    }
  ];

  const proficiencyLevels = [
    { skill: "AWS Cloud Services", level: 95, color: "bg-primary" },
    { skill: "Docker & Kubernetes", level: 90, color: "bg-emerald-600" },
    { skill: "Terraform & IaC", level: 88, color: "bg-purple-600" },
    { skill: "CI/CD Pipelines", level: 92, color: "bg-blue-600" },
    { skill: "Python & Node.js", level: 85, color: "bg-green-600" },
    { skill: "Monitoring & Security", level: 87, color: "bg-orange-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-background" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive expertise across cloud platforms, DevOps tools, and development technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`bg-gradient-to-br ${category.color} border-0`}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${category.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Proficiency Bars */}
        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Proficiency Levels</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {proficiencyLevels.slice(0, 3).map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-sm text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`skill-bar ${item.color} h-3 rounded-full transition-all duration-1500 ease-out`}
                        style={{ width: animated ? `${item.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {proficiencyLevels.slice(3).map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-sm text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`skill-bar ${item.color} h-3 rounded-full transition-all duration-1500 ease-out`}
                        style={{ width: animated ? `${item.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
