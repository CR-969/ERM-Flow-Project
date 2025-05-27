import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "flowing" | "neural" | "geometric" | "particles";
}

export function AnimatedBackground({
  variant = "flowing",
}: AnimatedBackgroundProps) {
  if (variant === "flowing") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        {/* Flowing Curves */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient
              id="flowGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="rgb(var(--primary))"
                stopOpacity="0.3"
              />
              <stop
                offset="50%"
                stopColor="rgb(var(--secondary))"
                stopOpacity="0.1"
              />
              <stop
                offset="100%"
                stopColor="rgb(var(--primary))"
                stopOpacity="0.3"
              />
            </linearGradient>
          </defs>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${i * 200},-50 Q${200 + i * 100},${200 + i * 30} ${400 + i * 150},${100 + i * 40} T${800 + i * 100},${300 + i * 20}`}
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}
        </svg>

        {/* Floating Shapes - NO CIRCLES */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30">
              <polygon
                points="15,5 25,20 5,20"
                fill="currentColor"
                className="text-primary/20"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "neural") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-background/50" />

        {/* Neural Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-15">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection Lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/20"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                strokeDasharray: ["0,100", "50,50", "100,0"],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Square Nodes - NO CIRCLES */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.rect
              key={i}
              x={`${Math.random() * 100}%`}
              y={`${Math.random() * 100}%`}
              width="4"
              height="4"
              fill="currentColor"
              className="text-primary/30"
              filter="url(#glow)"
              animate={{
                width: [3, 6, 3],
                height: [3, 6, 3],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "geometric") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        {/* Geometric Shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: [0, 360],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <polygon
                points="20,5 35,15 35,25 20,35 5,25 5,15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/30"
              />
            </svg>
          </motion.div>
        ))}

        {/* Diagonal Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.line
              key={i}
              x1="0"
              y1={`${i * 25}%`}
              x2="100%"
              y2={`${i * 25 + 20}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "particles") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/3 to-transparent" />

        {/* Floating Diamonds */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [-50, window.innerHeight + 50],
              rotate: [0, 360],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16">
              <polygon
                points="8,2 14,8 8,14 2,8"
                fill="currentColor"
                className="text-primary/25"
              />
            </svg>
          </motion.div>
        ))}

        {/* Subtle Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern
              id="smallGrid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
    );
  }

  return null;
}
