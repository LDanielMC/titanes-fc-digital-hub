import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: string; // e.g., '100ms', '200ms'
}

export function ScrollAnimation({ children, className, delay = "0ms" }: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    // triggerOnce: true, // Eliminamos esta línea para que la animación se repita
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out", // Usamos transiciones para la entrada y salida
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", // Cambiamos entre estados visible y oculto
        className
      )}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}