import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-2xl border border-transparent cursor-pointer active:scale-95 duration-200 gap-2",
  {
    variants: {
      variant: {
        default: "text-background bg-accent hover:bg-accent/80 font-semibold",
        outline: "text-foreground bg-background border border-accent text-accent font-semibold hover:bg-accent hover:text-background",
      },
      size: {
        default: "py-3.5 px-[18px] text-[16px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
