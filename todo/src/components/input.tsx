import { cva, type VariantProps, cx } from "class-variance-authority";
import { textVariants } from "./text";


export const buttonTextVariants = cva(`border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none`, {
  variants: {
    size: {
      md: "pb-2 px-2",
    },
    disabled: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});


interface InputTextProps
  extends VariantProps<typeof buttonTextVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled"> {}


export default function Input({
  size,
  disabled,
  className,
  children,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(buttonTextVariants({ size, disabled }),
        textVariants(),
        className
      )}
      {...props}
    />
  )
}