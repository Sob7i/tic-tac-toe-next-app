import React from 'react'

export const withWinningStyles = (Component: React.FC<any>) => {
    return (componentProps: any) => {
        const { winningSquares, index } = componentProps;
        const isWinningSquare = winningSquares.length > 0 && winningSquares.includes(index);

        return (
            <Component {...componentProps} isWinningSquare={isWinningSquare} />
        )
    }
}
