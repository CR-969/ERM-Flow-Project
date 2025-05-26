import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({
  end,
  duration,
  suffix = "",
  prefix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const kpiData = [
  {
    icon: TrendingUp,
    label: "Revenue Growth",
    value: 250,
    suffix: "%",
    description: "Average increase in revenue",
    color: "text-green-500",
  },
  {
    icon: Users,
    label: "Happy Clients",
    value: 1200,
    suffix: "+",
    description: "Satisfied customers worldwide",
    color: "text-blue-500",
  },
  {
    icon: Target,
    label: "Projects Completed",
    value: 5000,
    suffix: "+",
    description: "Successful implementations",
    color: "text-purple-500",
  },
  {
    icon: DollarSign,
    label: "Cost Savings",
    value: 40,
    suffix: "%",
    description: "Average operational cost reduction",
    color: "text-orange-500",
  },
];

export function KPICounters() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Proven Results That Speak</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our ERP solutions have helped thousands of businesses achieve
            remarkable growth and operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpiData.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4 ${kpi.color}`}
              >
                <kpi.icon className="h-6 w-6" />
              </div>

              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter
                  end={kpi.value}
                  duration={2}
                  suffix={kpi.suffix}
                />
              </div>

              <h3 className="font-semibold mb-2">{kpi.label}</h3>
              <p className="text-sm text-muted-foreground">{kpi.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
