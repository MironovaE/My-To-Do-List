import type { IButton } from '~/components/Button/Button'

import './fabButton.styles.css'

type TFabButton = Pick<IButton, 'onClick'>

export const FabButton = ({ onClick }: TFabButton) => (
  <button id="fab-button" className="fab-button" onClick={onClick}>
    +
  </button>
)
