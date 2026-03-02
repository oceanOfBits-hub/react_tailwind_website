import { Menu, X } from "lucide-react";
import { useState } from "react";
import "../index.css"

export default function Navbar() {
   const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-5m border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
           <div className="flex items-center space-x-2 group cursor-pointer">
            <div>
                <img src="./logo.png" alt="CodeFlow" className="w-6 h-6 sm:w-8 sm:h-8"/>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-white">Code</span>
                <span className="text-blue-300">Flow</span>
            </span>
            </div>
            {/* Nav links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <a href="#features" className="text-gray-300 hover:text-white text-5m lg:text-base">Features</a>
                <a href="#pricing" className="text-gray-300 hover:text-white text-5m lg:text-base">Pricing</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white text-5m lg:text-base">Testimonials</a>
            </div>
            <button onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)} className="md:hidden p-2">
              { mobileMenuIsOpen ? (<X className="text-gray-300"/>) : (
                <Menu className="w-6 h-6 text-gray-300 sm:h-6 md:h-8 lg:h-10 hover:text-white"  />
              ) 
              }
             </button>
        </div>
      </div>
     {mobileMenuIsOpen &&  ( 
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
         <div>
                <a href="#features" className="text-gray-300 hover:text-white text-5m lg:text-base">Features</a>
                <a href="#pricing" className="text-gray-300 hover:text-white text-5m lg:text-base">Pricing</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white text-5m lg:text-base">Testimonials</a>
            </div>
            </div>
         )};
    </nav>
    );
}