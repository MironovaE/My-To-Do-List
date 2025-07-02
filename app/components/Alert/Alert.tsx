import React from 'react';
import './alert.styles.css';

interface IAlertProps extends React.HTMLAttributes<HTMLDivElement> {
    isVisible?: boolean;
    message: string;
    type: 'info' | 'warning' | 'error' | 'success';
}

export const Alert = ({
                   isVisible = false,
                   message,
                   type = 'warning',

               }: IAlertProps) => {
    const alertRef = React.useRef<HTMLDivElement>(null); // Реф для DOM-элемента

    // Таймер для авто-закрытия алерта
    React.useEffect(() => {
        let timerId: NodeJS.Timeout | undefined;

        if (isVisible) {
            timerId = setTimeout(() => {
                closeAlert();
            }, 5000);
        }


        return () => {
            clearTimeout(timerId);
        };
    }, [isVisible]);

    // Функция для ручного закрытия алерта
    const closeAlert = () => {
        if (alertRef.current) {
            alertRef.current.classList.remove('visible');
        }
    };

    return (
        <>
            {isVisible && (
                <div
                    ref={alertRef}
                    className={`alert ${type} ${isVisible ? 'visible' : ''}`}
                    onClick={closeAlert}
                >
                    {message}
                </div>
            )}
        </>
    );
};