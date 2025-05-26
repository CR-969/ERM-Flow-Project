import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  BarChart3,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react";

const workflowSteps = [
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamlessly connect all your business data sources",
    color: "bg-blue-500",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows",
    color: "bg-purple-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Generate actionable insights from your data",
    color: "bg-green-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enable seamless collaboration across departments",
    color: "bg-orange-500",
  },
  {
    icon: CheckCircle,
    title: "Optimization",
    description: "Continuously improve business processes",
    color: "bg-pink-500",
  },
];

export function WorkflowDiagram() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            How Our ERP Solution Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures smooth implementation and maximum
            value for your business transformation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center max-w-[200px]"
                >
                  <div
                    className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>

                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="mx-8"
                  >
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div
                  className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
