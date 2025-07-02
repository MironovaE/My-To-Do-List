import React from "react"
import './button.styles.css';

export interface IButton {
    label?: string
    icon?: React.ReactNode
    onClick: () => void
}

export const Button = ({label, icon, onClick}: IButton) => (
    <button id="button" className="Button" onClick={onClick}>
        {icon && <div> {icon}</div>}
        {label}
    </button>
)