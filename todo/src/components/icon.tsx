import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export const iconsVariants = cva('', {
  variants: {
    animate: {
      true: 'animate-spin',
      false: ''
    }
  },
  defaultVariants: {
    animate: false
  }
})

interface IconProps
  extends React.ComponentProps<'svg'>,
  VariantProps<typeof iconsVariants> {
  svg: React.FC<React.ComponentProps<'svg'>>; // SVG component to render
}

export default function Icon({ svg: SvgComponent,animate, className, ...props }: IconProps) {
  return <SvgComponent className={iconsVariants({animate,className})} {...props} />;
}