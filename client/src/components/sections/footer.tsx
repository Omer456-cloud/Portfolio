import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="font-bold text-xl mb-4">Omer Nazeer</h3>
            <p className="text-gray-400 mb-4">
              DevOps Engineer specializing in cloud architecture, automation, and scalable infrastructure solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => handleNavClick("#about")}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#experience")}
                  className="hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#skills")}
                  className="hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#projects")}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cloud Architecture</li>
              <li>DevOps Consulting</li>
              <li>CI/CD Implementation</li>
              <li>Infrastructure as Code</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Omer Nazeer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
