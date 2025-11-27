import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import Skeleton from "./skeleton";


export const buttonIconVariants = cva(`
  inline-flex items-center justify-center cursor-pointer transition group
  `, {
  variants: {
    variant: {
      none: '',
      primary: "bg-green-base hover:bg-green-dark",
      secundary: "bg-gray-200 hover:bg-pink-base",
      tertiary: "bg-transparent hover:bg-gray-200",
    },
    size: {
      sm: "h-6 w-6 p-1 rounded",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
    disabled: false,
  },
});

export const buttonIconIconVariants = cva(`transition`, {
  variants: {
    variant: {
      none: '',
      primary: "fill-white",
      secundary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "w-4 h-4",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",

  },
});

export const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface ButtonIconProps
  extends VariantProps<typeof buttonIconVariants>,
  Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean
}


export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  children,
  icon,
  loading,
  ...props
}: ButtonIconProps) {

  if (loading) {
    return <Skeleton
      rounded="sm"
      className={buttonIconVariants({
        variant: 'none',
        size,
        className
      })}
    />
  }
  return (
    <button className={buttonIconVariants({ variant, size, disabled, className })} {...props}>
      {icon && <Icon svg={icon} className={buttonIconIconVariants({ variant, size })} />}
    </button>
  );
}