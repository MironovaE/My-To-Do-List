import type {IIcon} from "~/components/Icons/models";
import {sizes} from "~/components/Icons/sizes";

export const SaveIcon = ({ size = 'medium' }: IIcon) => {
    const currentSize = sizes[size];
    const scalingFactor = currentSize / 24; // Масштабируемый коэффициент
    const padding = 3;
    return (
        <svg
            width={currentSize + padding}
            height={currentSize + padding}
            viewBox={`-${padding / 2} -${padding / 2} ${currentSize + padding} ${currentSize + padding}`}
            fill="none"
            stroke="#9E9E9E"
            strokeWidth={scalingFactor * 2} // Толщина линии зависит от масштаба
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d={`M${scalingFactor * 19},${scalingFactor * 21}H${scalingFactor * 5}a2,2 0 0 1 -2,-2V${scalingFactor * 5}a2,2 0 0 1 2,-2h11l${scalingFactor * 5},${scalingFactor * 5}v${scalingFactor * 11}a2,2 0 0 1 -2,2z`}/>
            <polyline
                points={`${scalingFactor * 17},${scalingFactor * 21} ${scalingFactor * 17},${scalingFactor * 13} ${scalingFactor * 7},${scalingFactor * 13} ${scalingFactor * 7},${scalingFactor * 21}`}/>
            <polyline
                points={`${scalingFactor * 7},${scalingFactor * 3} ${scalingFactor * 7},${scalingFactor * 8} ${scalingFactor * 15},${scalingFactor * 8}`}/>
        </svg>
    );
};