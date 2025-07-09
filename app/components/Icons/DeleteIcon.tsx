import type { IIcon } from '~/components/Icons/models'
import { sizes } from '~/components/Icons/sizes'

export const DeleteIcon = ({ size = 'medium' }: IIcon) => {
  const currentSize = sizes[size]
  const scalingFactor = currentSize / 24 // коэффициент масштабирования исходя из стандартного размера 24px

  return (
    <svg
      width={currentSize}
      height={currentSize}
      viewBox={`0 0 ${currentSize} ${currentSize}`}
      fill="none"
      stroke="#9E9E9E"
      strokeWidth={scalingFactor * 2} // толщина линий должна масштабироваться вместе с размерами
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline
        points={`${scalingFactor * 3},${scalingFactor * 6} ${scalingFactor * 5},${scalingFactor * 6} ${scalingFactor * 21},${scalingFactor * 6}`}
      />
      <path
        d={`M${scalingFactor * 19},${scalingFactor * 6}V${scalingFactor * 20}A2,2 0 0 1 ${scalingFactor * 17},${scalingFactor * 22}H${scalingFactor * 7}A2,2 0 0 1 ${scalingFactor * 5},${scalingFactor * 20}V${scalingFactor * 6}M${scalingFactor * 8},${scalingFactor * 6}V${scalingFactor * 4}A2,2 0 0 1 ${scalingFactor * 10},${scalingFactor * 2}h${scalingFactor * 4}A2,2 0 0 1 ${scalingFactor * 14},${scalingFactor * 4}v${scalingFactor * 2}`}
      />
      <line
        x1={`${scalingFactor * 10}`}
        y1={`${scalingFactor * 11}`}
        x2={`${scalingFactor * 10}`}
        y2={`${scalingFactor * 17}`}
      />
      <line
        x1={`${scalingFactor * 14}`}
        y1={`${scalingFactor * 11}`}
        x2={`${scalingFactor * 14}`}
        y2={`${scalingFactor * 17}`}
      />
    </svg>
  )
}
