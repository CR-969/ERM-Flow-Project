import { motion } from "framer-motion";

interface FloatingGraphicsProps {
  variant?: "hero" | "features" | "services";
}

export function FloatingGraphics({ variant = "hero" }: FloatingGraphicsProps) {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Geometric Shapes - Very Minimal */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-12 h-12 border border-primary/10 rounded-lg"
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
          className="absolute bottom-1/3 left-1/4 w-8 h-8 border border-secondary/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Very Subtle Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <motion.line
            x1="10%"
            y1="20%"
            x2="30%"
            y2="40%"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    );
  }

  if (variant === "features") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Minimal corner decorations only */}
        <motion.div
          className="absolute top-10 right-10 w-6 h-6 border border-primary/15 rotate-45"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-10 left-10 w-4 h-4 bg-secondary/10 rounded-full"
          animate={{
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  }

  if (variant === "services") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Very subtle service-related decoration */}
        <svg className="absolute inset-0 w-full h-full opacity-3">
          <motion.path
            d="M100,400 Q200,300 300,400"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary/15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    );
  }

  return null;
}
