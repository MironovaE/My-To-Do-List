import React, { forwardRef } from 'react'

import './card.styles.css'

type TCard = React.PropsWithChildren & {
  style?: React.CSSProperties
}

export const Card = forwardRef<HTMLDivElement, TCard>(({ children, style, ...props }, ref) => (
  <div ref={ref} className="Card" style={style} {...props}>
    {children}
  </div>
))

Card.displayName = 'Card'
