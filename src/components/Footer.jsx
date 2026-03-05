import { Linkedin, Mail, Twitter, Github} from "lucide-react";

const footerLinks = {
    Product : ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
    company : ["About", "Blog", "Careers", "Press", "Partners"],
    Resources : [
        "Documentation",
        "Help Center",
        "Community",
        "API Reference",
        "Status"
    ],
    Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
    return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Main footer content -hidden on mobile, visible on big screens*/}

            <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left lg:flex flex-row lg:space-x-50">
                    <div className="flex-col items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4 lg:mr-80">
                        <div className="rounded-lg flex flex-row gap-3">
                            <img 
                            src="./public/logo.png" 
                            alt="logo" className="w-6 h-6 sm:w-8 sm:h-8" />                            
                            <span className="text-lg sm:text-xl font-bold">
                                <span className="text-white">Code</span>
                                <span className="text-blue-400">Flow</span>
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 sm:mx-0 text-xs sm:text-base lg:my-3 leading-relaxed">
                            Transform your workflow with AI-powered tools and automation.
                            Built for modren teams.
                        </p>
                        <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                             <a 
                              href="#"
                               className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                                >
                                 <Twitter className="w-5 h-5 sm:w-5 sm:h-5"/>
                             </a>
                               <a 
                              href="#"
                               className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                                >
                                 <Github className="w-5 h-5 sm:w-5 sm:h-5 text-white"/>
                             </a>  
                             <a 
                              href="#"
                               className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                                >
                                 <Linkedin className="w-5 h-5 sm:w-5 sm:h-5 fill-white"/>
                             </a>
                               <a 
                              href="#"
                               className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                                >
                                 <Mail className="w-5 h-5 sm:w-5 sm:h-5"/>
                             </a>
                        </div>
                    </div>
                    {/* footer links */}
                    <div className="sm:col-span-3 lg:col-span-4 ">
                       <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-40">
                         {Object.entries(footerLinks).map(([category, links]) => (
                            <div id={category}>
                              <h3  className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                                {category}
                               </h3>
                               <ul className="space-y-2 sm:space-y-3">
                                  {links.map((link, linkkey) => (
                                    <li key={linkkey}>
                                        <a href="#"
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm lg:text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                  ))}
                               </ul>
                              </div>
                         ))};
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
}