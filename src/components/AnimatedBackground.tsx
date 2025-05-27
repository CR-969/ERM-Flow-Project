import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "flowing" | "neural" | "waves" | "particles";
}

export function AnimatedBackground({
  variant = "flowing",
}: AnimatedBackgroundProps) {
  if (variant === "flowing") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
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
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${i * 150},${200 + i * 50} Q${300 + i * 100},${100 + i * 30} ${600 + i * 80},${250 + i * 40}`}
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0],
                translateX: [0, 100, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>

        {/* Floating Orbs */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "neural") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background" />

        {/* Neural Network Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-25">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection Lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/30"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                strokeDasharray: ["0,100", "50,50", "100,0"],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Neural Nodes */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="3"
              fill="currentColor"
              className="text-primary/50"
              filter="url(#glow)"
              animate={{
                r: [2, 6, 2],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "waves") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-[150%] h-[150%] bg-gradient-to-tl from-primary/10 via-transparent to-accent/10 rounded-full"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Wave Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M0,${200 + i * 80} Q${400},${150 + i * 80} ${800},${200 + i * 80} T${1600},${200 + i * 80}`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary/20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
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
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />

        {/* DNA Helix Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient
              id="helixGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgb(var(--primary))" />
              <stop offset="50%" stopColor="rgb(var(--secondary))" />
              <stop offset="100%" stopColor="rgb(var(--primary))" />
            </linearGradient>
          </defs>

          {Array.from({ length: 3 }).map((_, i) => (
            <g key={i}>
              <motion.path
                d={`M${200 + i * 300},50 Q${300 + i * 300},200 ${200 + i * 300},350 Q${100 + i * 300},500 ${200 + i * 300},650`}
                stroke="url(#helixGradient)"
                strokeWidth="3"
                fill="none"
                animate={{
                  d: [
                    `M${200 + i * 300},50 Q${300 + i * 300},200 ${200 + i * 300},350 Q${100 + i * 300},500 ${200 + i * 300},650`,
                    `M${200 + i * 300},50 Q${100 + i * 300},200 ${200 + i * 300},350 Q${300 + i * 300},500 ${200 + i * 300},650`,
                    `M${200 + i * 300},50 Q${300 + i * 300},200 ${200 + i * 300},350 Q${100 + i * 300},500 ${200 + i * 300},650`,
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 2,
                }}
              />
              <motion.path
                d={`M${200 + i * 300},50 Q${100 + i * 300},200 ${200 + i * 300},350 Q${300 + i * 300},500 ${200 + i * 300},650`}
                stroke="url(#helixGradient)"
                strokeWidth="3"
                fill="none"
                opacity="0.7"
                animate={{
                  d: [
                    `M${200 + i * 300},50 Q${100 + i * 300},200 ${200 + i * 300},350 Q${300 + i * 300},500 ${200 + i * 300},650`,
                    `M${200 + i * 300},50 Q${300 + i * 300},200 ${200 + i * 300},350 Q${100 + i * 300},500 ${200 + i * 300},650`,
                    `M${200 + i * 300},50 Q${100 + i * 300},200 ${200 + i * 300},350 Q${300 + i * 300},500 ${200 + i * 300},650`,
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 2 + 3,
                }}
              />
            </g>
          ))}
        </svg>

        {/* Floating Triangles */}
        {Array.from({ length: 15 }).map((_, i) => (
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
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <polygon
                points="10,2 18,16 2,16"
                fill="currentColor"
                className="text-primary/30"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
}
