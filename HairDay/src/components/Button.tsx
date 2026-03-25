import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'px-3 py-2 rounded-lg text-sm transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-gray-600 text-gray-300 border border-gray-500 hover:bg-gray-500 cursor-pointer',
        selected: 'bg-orange-500 text-yellow border border-yellow hover:bg-orange-600',
        unavailable: 'bg-gray-700 text-gray-500 border border-gray-600 cursor-not-allowed opacity-50',
        danger: 'bg-red-600 text-white border border-red-500 hover:bg-red-700 cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export function TimeButton({ variant, className, children, disabled, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonVariants({ variant: disabled ? 'unavailable' : variant, className })}
    >
      {children}
    </button>
  )
}