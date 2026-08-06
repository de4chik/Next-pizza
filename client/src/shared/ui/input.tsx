import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/shared/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  className?: string;
  type?: string;
  label?: string;
}

function Input({ className, type, label, ...props }: InputProps) {
  return (
    <div>
      {label && <span className="text-sm p-2">{label}</span>}
      <InputPrimitive
        type={type}
        data-slot="input"
        className={cn(
          "border rounded-2xl py-3.5 px-4 border-muted w-full focus:border-accent/50 focus:ring-3 outline-0 focus:ring-accent/30 duration-200",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
