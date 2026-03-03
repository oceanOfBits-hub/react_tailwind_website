export const codeExamples = {
    "App.jsx" : `
    import {useState, useEffect} from "react";
    import {Codeflow} from "@codeflow/ai";
    
    function App() {
      
     const [code, setCode] = useState("");
     
     const handleAICompletion = async() => {
        const suggestion = await codeFlow.complete(code);
        setCode(suggestion);
        };

        useEffect(() => {
            
            return (div </div>);
            }, [open]);
    }

    return (
       <div> 
         <codeEditor 
         onChange={setCode}
         onAI={handleAICompletion}
         />
       </div>
    )
}
    `,

    "Hero.jsx" : `   import {useState, useEffect} from "react";
    import {Codeflow} from "@codeflow/ai";
    
    function Hero() {
      
     const [code, setCode] = useState("");
     
     const handleAICompletion = async() => {
        const suggestion = await codeFlow.complete(code);
        setCode(suggestion);
        };

        useEffect(() => {
            
            return (div </div>);
            }, [open]);
    }

    return (
       <div> 
         <codeEditor 
         onChange={setCode}
         onAI={handleAICompletion}
         />
       </div>
    )
}`,
"Navbar.jsx":`
    import {useState, useEffect} from "react";
    import {Codeflow} from "@codeflow/ai";
    
    function Navbar() {
      
     const [code, setCode] = useState("");
     
     const handleAICompletion = async() => {
        const suggestion = await codeFlow.complete(code);
        setCode(suggestion);
        };

        useEffect(() => {
            
            return (div </div>);
            }, [open]);
    }

    return (
       <div> 
         <codeEditor 
         onChange={setCode}
         onAI={handleAICompletion}
         />
       </div>
    )
}
`
}


export const floatingCards = {
    "App.jsx" : {
        bgColor : "bg-blue-500/20",
        iconColor : "text-blue-400",
        textColor : "text-blue-200",
        contentColor : "text-blue-300",
        icon : "AI",
        title : "smart Completion",
        content : "AI-powered code suggestion in real-time",
    },

    "Hero.jsx" : {
        bgColor : "bg-purple-500/20",
        iconColor : "text-purple-400",
        textColor : "text-purple-200",
        contentColor : "text-purple-300",
        icon: "AI",
        title: "Auto animation",
        content : "Dynamic typing effects generated automatically"
    },

    "Navbar.jsx" : {
        bgColor : "bg-emerald-500",
        iconColor : "text-emerald-400",
        textColor : "text-emerald-200",
        contentColor : "text-emerald-300",
        icon : "AI",
        title : "Smart Search",
        content : "Intelligent code search across your project"
    },
};