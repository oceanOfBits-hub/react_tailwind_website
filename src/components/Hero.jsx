import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {

    const [mousePosition, setMousePosition] = useState({x:0, y:0});
    const [activeTab, setActiveTab] = useState("App.jsx"); 


    useEffect(() => {
        function handleMouseMove(e){
            setMousePosition({x: e.clientX, y: e.clientY});
                  }
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    },[]);
    return (
          <section className="relative min-h-screen flex items-center justify-center sm:pt-20 sm:px-6 lg:px-8 overflow-hidden">
           <div className="absolute inset-0 opacity-30" style={{
            background: `radial-gradient(600px circle at ${mousePosition.y}px, rgba(164, 171, 183, 0.15), transparent 40%)`
           }}/>
           <div className="relative order-2 w-[380px]">
             <div className="relative bg-white/5 backdrop-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border-white/10">
                <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[350px] lg:h-[450px] border border-white/10">
                     {/* IDE Header */}
                     <div className="flex items-center justify-between px-3 py-1.5 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/1">
                     <div className="flex items-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 mr-1"></div>
                         <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 mr-1"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 mr-1"></div>
                       <span className="text-xs text-white text-sm md:text-md">
                        CodeFlow AI
                        </span>
                     </div>
                      <ChevronDown className="text-gray-300 w-3 h-3 sm:w-4 sm:h-4 " />
                     </div>
               <div className="p-3 sm:p-4 relative h-full">     
                       {/* file tabs */}
                  <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                    <button onClick={() => setActiveTab("App.jsx")} className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border-1/5 ${
                        activeTab === "App.jsx" ? "bg-blue-500/30 border-blue-400/20" 
                        : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} text-gray-300 transition-all duration-200 whitespace-nowrap`}>App.jsx</button>

                    <button onClick={() => setActiveTab("Hero.jsx")} className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border-1/5 ${
                        activeTab === "Hero.jsx" ? "bg-blue-500/30 border-blue-400/20" 
                         : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} text-gray-300 transition-all duration-200 whitespace-nowrap`}>Hero.jsx</button>

                    <button onClick={() => setActiveTab("Navbar.jsx")} className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border-1/5 ${
                        activeTab === "Navbar.jsx" ? "bg-blue-500/30 border-blue-400/20" 
                        : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} text-gray-300 transition-all duration-200 whitespace-nowrap`}>Navbar.jsx</button>
                  </div>
                 </div>
                </div>                
             </div>
           </div>
          </section>
          );
}