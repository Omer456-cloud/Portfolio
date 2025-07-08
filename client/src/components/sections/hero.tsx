import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Download } from "lucide-react";

export function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // This would integrate with your CV download functionality
    console.log("Download CV functionality to be implemented");
  };

  return (
    <section className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-blue-100/50 dark:from-background dark:to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Omer Nazeer</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              DevOps Engineer & Cloud Architect
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experienced DevOps Engineer with over 5 years of expertise in cloud computing, 
              infrastructure automation, and continuous delivery. I specialize in managing and 
              scaling cloud systems within the AWS ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary">
                AWS Certified
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                5+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-purple-500/10 text-purple-700 dark:text-purple-400">
                Cloud Expert
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button onClick={handleContactClick} size="lg" className="shadow-lg">
                Get In Touch
              </Button>
              <a
                href="/OMER-NAZEER_1751400444324.pdf"
                download
                className="inline-flex items-center border-primary text-primary hover:bg-primary hover:text-primary-foreground border rounded-lg px-6 py-3 text-lg font-medium transition-colors shadow-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/80 to-primary rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="/src/assets/omer.jpg"
                  alt="Omer Nazeer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-4 rounded-full shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
