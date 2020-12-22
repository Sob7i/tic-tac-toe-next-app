import React from 'react'

export const withWinStyles = (Component: React.FC<any>) => {
    return (componentProps: any) => {
        const { winSquares, index } = componentProps;
        const isWinSquare = winSquares.length > 0 && winSquares.includes(index);

        return (
            <Component {...componentProps} isWinSquare={isWinSquare} />
        )
    }
}
