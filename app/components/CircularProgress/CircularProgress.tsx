import './circularProgress.styles.css'

interface ICircularProgress {
  isVisible: boolean
  message: string
}

export const CircularProgress = ({ isVisible, message }: ICircularProgress) => {
  if (!isVisible) return
  return (
    <div className="circular-progress-wrapper">
      <div className="circular-progress"></div>
      <p className="circular-progress-message">{message}</p>
    </div>
  )
}
