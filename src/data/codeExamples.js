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
"Navbar":`
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