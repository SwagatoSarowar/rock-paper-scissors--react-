import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-[1320px] ${className}`}>{children}</div>
  );
}
