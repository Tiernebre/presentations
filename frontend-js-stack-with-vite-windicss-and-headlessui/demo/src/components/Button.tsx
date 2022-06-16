import classNames from "classnames"
import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary'
}

export const Button = (props: Props) => {
  const color = props.variant === 'primary' ? 'bg-pink-200 hover:bg-pink-100' : 'bg-gray-500 hover:bg-gray-400'

  const className = classNames('p-5 rounded', color, props.className)

  return (
    <button 
      {...props}
      className={className}
    />
  )
}
