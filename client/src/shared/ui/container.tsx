import { cn } from "../lib/utils";

interface ContainerProps {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => {
  return <div className={cn('max-w-[1600px] mx-auto px-4',className)}>{children}</div>;
};
