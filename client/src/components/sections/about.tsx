import { Card, CardContent } from "@/components/ui/card";
import { Cloud, ServerCog, Shield } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Expert in designing and managing scalable AWS cloud infrastructure with focus on fault tolerance and cost optimization.",
      color: "text-primary"
    },
    {
      icon: ServerCog,
      title: "DevOps & Automation",
      description: "Specialized in CI/CD pipelines, Infrastructure as Code, and container orchestration using Kubernetes and Docker.",
      color: "text-emerald-600"
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      description: "Implementing robust security policies, monitoring frameworks, and proactive alerting systems for production environments.",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about building secure, efficient, and highly available infrastructure 
            while driving automation and streamlining workflows.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
