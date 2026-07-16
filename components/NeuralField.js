"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

// Deterministic pseudo-random so server/client markup matches
function seeded(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

// Builds a closed loop of points around (x, y) so the orbit animation
// can repeat seamlessly (last point circles back to the first).
function buildOrbit(x, y, radius, steps = 8) {
  const xs = [];
  const ys = [];
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    xs.push(x + Math.cos(angle) * radius);
    ys.push(y + Math.sin(angle) * radius);
  }
  return { xs, ys };
}

export default function NeuralField({ nodeCount = 26, className = "" }) {
  const { nodes, edges } = useMemo(() => {
    const rand = seeded(42);
    const generatedNodes = Array.from({ length: nodeCount }).map((_, i) => {
      const x = rand() * 1000;
      const y = rand() * 600;
      const orbitRadius = 10 + rand() * 22;
      const orbitDuration = 14 + rand() * 16;
      const orbitDelay = rand() * -orbitDuration; // stagger starting phase
      const orbit = buildOrbit(x, y, orbitRadius);

      return {
        id: i,
        x,
        y,
        r: 1.5 + rand() * 2.5,
        delay: rand() * 4,
        orbitDuration,
        orbitDelay,
        xKeyframes: orbit.xs,
        yKeyframes: orbit.ys,
      };
    });

    const generatedEdges = [];
    generatedNodes.forEach((node, i) => {
      const next = generatedNodes[(i + 1) % generatedNodes.length];
      const dist = Math.hypot(node.x - next.x, node.y - next.y);
      if (dist < 320) {
        generatedEdges.push({ from: node, to: next, delay: node.delay });
      }
      const skip = generatedNodes[(i + 5) % generatedNodes.length];
      const dist2 = Math.hypot(node.x - skip.x, node.y - skip.y);
      if (dist2 < 260) {
        generatedEdges.push({ from: node, to: skip, delay: node.delay + 0.6 });
      }
    });

    return { nodes: generatedNodes, edges: generatedEdges };
  }, [nodeCount]);

  return (
    <svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF9D4D" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF9D4D" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFB800" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {edges.map((edge, i) => (
        <motion.line
          key={`edge-${i}`}
          stroke="url(#edgeGlow)"
          strokeWidth="0.6"
          strokeOpacity="0.35"
          initial={{
            x1: edge.from.x,
            y1: edge.from.y,
            x2: edge.to.x,
            y2: edge.to.y,
            opacity: 0,
          }}
          animate={{
            x1: edge.from.xKeyframes,
            y1: edge.from.yKeyframes,
            x2: edge.to.xKeyframes,
            y2: edge.to.yKeyframes,
            opacity: 0.35,
          }}
          transition={{
            x1: {
              duration: edge.from.orbitDuration,
              delay: edge.from.orbitDelay,
              repeat: Infinity,
              ease: "linear",
            },
            y1: {
              duration: edge.from.orbitDuration,
              delay: edge.from.orbitDelay,
              repeat: Infinity,
              ease: "linear",
            },
            x2: {
              duration: edge.to.orbitDuration,
              delay: edge.to.orbitDelay,
              repeat: Infinity,
              ease: "linear",
            },
            y2: {
              duration: edge.to.orbitDuration,
              delay: edge.to.orbitDelay,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: { duration: 2.4, delay: edge.delay, ease: "easeInOut" },
          }}
        />
      ))}

      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          r={node.r}
          fill="url(#nodeGlow)"
          initial={{ cx: node.x, cy: node.y, opacity: 0, scale: 0 }}
          animate={{
            cx: node.xKeyframes,
            cy: node.yKeyframes,
            opacity: [0, 1, 0.6, 1],
            scale: 1,
          }}
          transition={{
            cx: {
              duration: node.orbitDuration,
              delay: node.orbitDelay,
              repeat: Infinity,
              ease: "linear",
            },
            cy: {
              duration: node.orbitDuration,
              delay: node.orbitDelay,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 3,
              delay: node.delay * 0.5,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 2,
            },
            scale: { duration: 0.6, delay: node.delay * 0.3 },
          }}
        />
      ))}
    </svg>
  );
}
