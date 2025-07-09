import React from 'react'

interface IIconButton {
  icon: React.ReactNode
  onClick: () => void
}

export const IconButton = ({ icon, onClick }: IIconButton) => {
  return (
    <button className="icon-button" onClick={onClick}>
      {icon}
    </button>
  )
}
