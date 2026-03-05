import { Check, Star } from "lucide-react";

const plans = [
   { name :  "starter",
    price : "29.99",
    description : "Perfect for individuals and small teams",
    features: [
        "Up to 5 team members",
        "10GB Storage",
        "Basic analytics",
        "Email Support",
        "API access",
        "Mobile app"
    ],
    mostPopular : false,
},
 {
   name : "Professional",
   price : "79.99",
   description : "Best for growing businesses",
   features : [
    "Up to 25 team members",
    "100GB storage",
    "Advanced analytics",
    "Priority support",
    "API access",
    "Mobile app",
    "Custom integration",
    "Advanced security"
   ],
   mostPopular : true,
 },
 {
    name : "Enterprise",
    price : "199.99",
    description : "For large organizations",
    features : [
        "Unlimited team members",
        "Unlimited storage",
        "Enterprise analytices",
        "24/7 phone support",
        "API acess",
        "Mobile app",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager",
        "Custom SLA"
    ],
    mostPopular: false,
 },
];



export default function Pricing() {
    return (
         <section id="pricing" 
         className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
         
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                        Simple, transparent
                     </span> 
                    <br/>
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        pricing plans
                    </span>
                </h2>
                <p className="text-gray-400  text-base text-xl sm:text-lg max-w-2xl mx-auto">
                    Choose the perfect for your needs. All plans include 14-day
                    free trial.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                 {plans.map((plans, key) => (
                    <div key={key} className={`flex flex-col h-full bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full 
                        ${plans.mostPopular ? "border border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105 " 
                        : "border border-slate-800 hover:border brorder-slate-300"}`}>

                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-0 group:hover:translate-y-0 pointer-events-none rounded-lg"/>

                            {plans.mostPopular && (
                                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">

                                <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                    <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white"/>
                                    <span>Most popular</span>
                                </div>

                                </div>
                            )}
                           <div className="text-center mb-6 sm:mb-8 text-gray-100">
                              <h3 className="text-xl sm:text-2xl font-bold mb-2">{plans.name}</h3>
                              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{plans.description}</p>
                              <div className="flex items-baseline justify-center">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">${plans.price}</span>
                                <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">/month</span>
                              </div>
                           </div>
                           <ul className="space-y-3 sm:space-y-3 mb-6 sm:mb-8 flex-row"> 
                            {plans.features.map((feature, featureKey) => (
                                <li key={featureKey} className="flex items-start space-x-2 sm:space-x-3">
                                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400"/>
                                    </div>
                                    <span className="text-gray-300 text-sm sm:text-base">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                           </ul>
                <button className={`group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all durantion-300 hover:scale-102 flex items-center justify-center  space-x-2 text-gray-100 mt-auto
                    ${plans.mostPopular ? 'bg-gradient-to-b from-blue-600 to-blue-400' : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}>
                             Get started
                           </button>
                        </div>
                 ))};
            </div>
            <div className="mt-8 sm:mt-12 text-center">
                <p className="text-gray-400 text-base text-xl">
                    Need a custom plan?
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300">Contact our sales team</a>
            </div>
        </div>
     </section>
            );

         
}