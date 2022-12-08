import { forwardRef } from 'react'

export const OutlineButton = forwardRef(({ as = 'a', className, ...rest }, ref) => {
  const As = as
  return (
    <As
      ref={ref}
      className={`btn transition-all px-3 py-2.5 shadow-xs border border-gray-400 border-opacity-30 hover:border-opacity-50 hover:shadow-sm ${className}`}
      {...rest}
    />
  )
})
