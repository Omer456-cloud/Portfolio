import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Ship, Server, Users } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function Projects() {
  const projects = [
    {
      icon: Ship,
      title: "Kubernetes-Based CI/CD Pipeline",
      subtitle: "Microservices Deployment Automation",
      description: "Built a comprehensive CI/CD pipeline using GitHub Actions and Helm to automate deployment of containerized microservices to AWS EKS with centralized logging and monitoring.",
      technologies: ["Kubernetes", "GitHub Actions", "Helm", "ELK Stack"],
      highlights: [
        "Automated microservices deployment",
        "Infrastructure as Code with Terraform",
        "Centralized logging with ELK Stack"
      ],
      gradient: "from-primary to-primary/80"
    },
    {
      icon: Server,
      title: "Serverless Application on AWS",
      subtitle: "Event-Driven Architecture",
      description: "Developed a serverless REST API using AWS Lambda and API Gateway with DynamoDB backend, implementing robust security and S3 integration for scalable asset management.",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "S3"],
      highlights: [
        "Serverless REST API development",
        "IAM security implementation",
        "Event-driven architecture"
      ],
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Multi-Tenant SaaS Backend",
      subtitle: "Scalable Architecture Design",
      description: "Designed and developed a multi-tenant backend system with tenant-level data isolation, GraphQL APIs, and microservices deployment on AWS EKS for enhanced scalability.",
      technologies: ["GraphQL", "Node.js", "TypeScript", "PostgreSQL"],
      highlights: [
        "Multi-tenant data isolation",
        "GraphQL API development",
        "Microservices on AWS EKS"
      ],
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  // Animation variants for staggered reveal
  const gridVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Showcasing key projects that demonstrate my expertise in DevOps and cloud architecture
          </p>
        </div>
        
        {/* Projects Grid with scroll-based reveal */}
        <motion.div
          ref={gridRef}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ borderRadius: "inherit" }}
            >
              <Card className="overflow-hidden transition-all duration-300 group">
                <div className={`bg-gradient-to-br ${project.gradient} p-8`}>
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80">{project.subtitle}</p>
                </div>
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
