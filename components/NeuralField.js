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

export default function NeuralField({ nodeCount = 26, className = "" }) {
  const { nodes, edges } = useMemo(() => {
    const rand = seeded(42);
    const generatedNodes = Array.from({ length: nodeCount }).map((_, i) => ({
      id: i,
      x: rand() * 1000,
      y: rand() * 600,
      r: 1.5 + rand() * 2.5,
      delay: rand() * 4,
    }));

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
          x1={edge.from.x}
          y1={edge.from.y}
          x2={edge.to.x}
          y2={edge.to.y}
          stroke="url(#edgeGlow)"
          strokeWidth="0.6"
          strokeOpacity="0.35"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.35 }}
          transition={{
            duration: 2.4,
            delay: edge.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill="url(#nodeGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1], scale: 1 }}
          transition={{
            duration: 3,
            delay: node.delay * 0.5,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 2,
          }}
        />
      ))}
    </svg>
  );
}
