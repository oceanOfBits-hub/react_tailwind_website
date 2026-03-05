import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
    {
        tittle: "AI code completion",    
        description: "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
        codeSnippet: `function handleSubmit() {
            // AI suggests next line
            const data = await fetch("/api/submit)
            //AutoCompleted by AI
        }`,
        imagePosition: "left",
    },

    {
        tittle: "Automated Testing",
        description: "Generate comprehensive test suits automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
        codeSnippet: `function testSubmit() {
            //  Auto testing the code
            const data = await fetch("/api/submit)
            //Autotesting by AI`,
        imagePosition: "right"
    },

    {
        tittle: "Smart debugging",
        description: "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
        codeSnippet : `function debugeSubmit() {
            // AI debugging your submited code 
            const data = await fetch("/api/submit)
            //smart debugging by AI`,
        imagePosition: "left",
    }
];



export default function Features() {
    return (
    <section id="features" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
           <div className="max-w-6xl mx-auto">
             <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                        Your Complete Development
                     </span> 
                    <br/>
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">Workflow</span>
                </h2>
            </div>
            <div className="space-y-16 sm:space-y-20 lg:space-y-32">
               {features.map((features, key)=> (
                <div id={key} className={`flex flex-col lg:flex-grow items-center gap-8 sm:gap-12 ${features.imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                    {/*code section */}
                  <div className="flex-1 w- full">
                     <div className="relative group">
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50
                         rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1
                         group-hover:border-blue-600/50 transition-all duration-300
                        ">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20  to purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500"/>
                            {/* id Interface */}
                            <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                                <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                                    <div className="flex items-center space-x-1 sm:space-x-2 ml-2">
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 mr-1"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 mr-1"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 mr-1"></div>
                                    </div>
                                    <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">{features.tittle}</span>
                                </div>
                                <SyntaxHighlighter 
                                 language="javascript" 
                                 style={nightOwl}
                                  customStyle={{
                                    margin: "0",
                                    background: "transparent",
                                    borderRadius: "8px",
                                    fontSize: "0.75rem",
                                    lineHeight: "1.4",
                                    height: "100%",
                                    border: "1px solid #3c3c3c",
                                  }}
                                  wrapLines={true}
                                 >
                                    {features.codeSnippet}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                      </div>
                 </div>
                 {/* text section */}
                 <div className="flex-1 w-full">
                    <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left"> 
                        <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">{features.tittle}</h3>
                        <p className="text-gray-400 text-base text-xl sm:text-lg leading-relaxed">{features.description}</p>
                    </div>
                 </div>
            </div>
               ))}
            </div>
           </div>
    </section>
    )
}