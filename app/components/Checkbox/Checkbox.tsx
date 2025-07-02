import './checkbox.styles.css';

export interface ICheckbox {
    label?: string
    checked?: boolean
    onChangeStatus: (checked: boolean)=> void
    onChangeLabel: (label: string)=> void
}

export const Checkbox = ({label, checked, onChangeStatus, onChangeLabel}: ICheckbox) => (
    <>
        <label htmlFor="checkbox" className="label-checkbox">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => onChangeStatus(!checked)}
                className="checkbox"
            />
            <textarea
                className="input-label-checkbox"
                value={label || ""}
                onChange={(event) => {
                    if(!checked) {
                        onChangeLabel(event.target.value)
                    }
                }}
                style={{
                    textDecoration: checked ? "line-through" : "none", cursor: checked ? "pointer" : "text",
                }}
            />
        </label>
    </>
)