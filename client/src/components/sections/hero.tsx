import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Download } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

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

  // Parallax effect for hero image
  const imageRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    x.set(posX - rect.width / 2);
    y.set(posY - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-blue-100/50 dark:from-background dark:to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="animate-slide-up"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="animate-fade-in"
          >
            <div className="relative">
              <motion.div
                ref={imageRef}
                className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/80 to-primary rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
                style={{ rotateX, rotateY, perspective: 800 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src="/src/assets/omer.jpg"
                  alt="Omer Nazeer"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              {/* <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-4 rounded-full shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
