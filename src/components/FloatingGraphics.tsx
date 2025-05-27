import { motion } from "framer-motion";
import { BarChart3, Zap, Users, Target, Globe, TrendingUp } from "lucide-react";

interface FloatingGraphicsProps {
  variant?: "hero" | "features" | "services";
}

export function FloatingGraphics({ variant = "hero" }: FloatingGraphicsProps) {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 left-10 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <BarChart3 className="h-8 w-8 text-primary" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-16 w-20 h-20 bg-secondary/10 rounded-lg flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Zap className="h-10 w-10 text-secondary" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Users className="h-7 w-7 text-accent" />
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/4 w-18 h-18 bg-primary/10 rounded-lg flex items-center justify-center backdrop-blur-sm"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Target className="h-8 w-8 text-primary" />
        </motion.div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-primary/20 rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-1/4 right-1/3 w-24 h-24 border border-secondary/30 rounded-lg"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    );
  }

  if (variant === "features") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Globe, TrendingUp, Users, BarChart3].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <Icon className="h-6 w-6 text-primary/60" />
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "services") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M0,100 Q150,50 300,100 T600,100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary/20"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,200 Q200,150 400,200 T800,200"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-secondary/30"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>
      </div>
    );
  }

  return null;
}
