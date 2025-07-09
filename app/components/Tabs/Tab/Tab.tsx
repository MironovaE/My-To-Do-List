import type { TabType } from '~/screens/MainScreen/MainScreen'

import './tab.styles.css'

interface ITab {
  label: string
  selectedTabIndex: TabType
  index: TabType
  onClick: () => void
}

export const Tab = ({ label, selectedTabIndex, index, onClick }: ITab) => {
  const isSelected = selectedTabIndex === index
  return (
    <button type="button" role="tab" onClick={onClick} className={`tab ${isSelected ? 'active' : ''}`}>
      {label}
    </button>
  )
}
