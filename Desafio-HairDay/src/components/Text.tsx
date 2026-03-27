import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const textVariants = cva('font-sans text-gray-100', {
  variants: {
    variant: {
      'body-sm-bold': 'text-sm leading-5 font-semibold',
      'body-sm': 'text-sm leading-5 font-normal',
      'body-md': 'text-base leading-6 font-normal',
      'body-md-bold': 'text-base leading-6 font-semibold',
      'title-lg': 'text-2xl leading-7 font-bold block',
    },
  },
  defaultVariants: {
    variant: 'body-md',
  },
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements // Define the 'as' prop to specify the HTML element type. Qualquer tag HTML válida.
  children?: React.ReactNode
  className?: string
}

export default function Text({
  as = 'span',
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  )
}
