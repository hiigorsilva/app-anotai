import { ComponentProps, ReactNode } from "react";
import { tv,  VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'flex justify-start items-center gap-3 h-12 px-4 rounded-lg outline-none outline-offset-0 transition-all',

  variants: {
    variant: {
      primary: 'bg-sky-600 text-zinc-50 shadow-zinc-950/30 shadow-md hover:bg-sky-400 focus:outline focus:outline-sky-800',
      secondary: 'hover:bg-zinc-800 text-zinc-200',
    } ,

    size: {
      default: 'w-fit',
      full: 'w-full',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({ children, variant, size, ...props }: ButtonProps) {

  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}