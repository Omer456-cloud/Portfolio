import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "CloudQuick, Islamabad, Pakistan",
      period: "Aug 2024 – Present",
      current: true,
      responsibilities: [
        "Architect and manage scalable AWS cloud infrastructure with focus on fault tolerance and cost optimization",
        "Lead design and deployment of complex CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline",
        "Oversee container orchestration using Kubernetes (EKS) and AWS Fargate",
        "Develop Infrastructure as Code using Terraform and Ansible",
        "Implement proactive monitoring and alerting frameworks with Amazon CloudWatch, Prometheus, and Grafana"
      ]
    },
    {
      title: "Jr. DevOps Engineer",
      company: "Ewarenet, Islamabad, Pakistan",
      period: "Nov 2022 – May 2024",
      current: false,
      responsibilities: [
        "Supported daily operations of AWS infrastructure focusing on uptime and performance",
        "Built and maintained Jenkins pipelines for continuous integration and automated testing",
        "Managed Docker container builds and deployments with Kubernetes (EKS) clusters",
        "Created basic Terraform modules for infrastructure provisioning",
        "Maintained monitoring dashboards and alert rules using CloudWatch and Grafana"
      ]
    },
    {
      title: "Backend Developer",
      company: "Zeil Global, Islamabad, Pakistan",
      period: "March 2021 – Aug 2022",
      current: false,
      responsibilities: [
        "Developed and maintained multi-tenant SaaS platform with efficient data isolation",
        "Built robust backend services using Node.js and TypeScript",
        "Designed flexible APIs with GraphQL and managed PostgreSQL databases",
        "Ensured secure authentication and tenant-aware access control mechanisms",
        "Collaborated with frontend and DevOps teams to deploy scalable services"
      ]
    },
    {
      title: "Backend Developer Intern",
      company: "TechSolutions, Islamabad, Pakistan",
      period: "Sep 2020 – Feb 2021",
      current: false,
      responsibilities: [
        "Built RESTful APIs using Python, Flask, and FastAPI",
        "Integrated MongoDB and worked on authentication and CRUD operations",
        "Developed and tested APIs with Postman and documented them using Swagger/OpenAPI",
        "Participated in code reviews, debugging, and performance tuning of APIs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">
            5+ years of progressive growth in DevOps and Backend Development
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center md:justify-center">
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary">{exp.period}</Badge>
                        {exp.current && (
                          <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                            Current
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-primary font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
