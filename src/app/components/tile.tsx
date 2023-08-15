'use client'
import React, { useRef, useContext } from 'react'
import { ScrollContext } from './scroll-observer'

interface WrapperProps {
    numOfPages: number
    children?: any
}
interface TitleContextValue {
    numOfPages: number
    currentPage: number
}

type Props = {
    children?: React.ReactNode;
  }

export const TitleContext = React.createContext<TitleContextValue> ({
    numOfPages: 0,
    currentPage: 0
})

export const TileWrapper: React.FC<WrapperProps> = ({ children, numOfPages }) => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    let currentPage = 0

    const { current: elContainer } = refContainer
    if(elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(
            clientHeight + halfH,
            Math.max(-screenH, scrollY - offsetTop) + halfH
        ) / clientHeight
        currentPage = percentY * numOfPages
    }

    return (
    <TitleContext.Provider value={{numOfPages, currentPage}}>
        <div ref={refContainer} className='relative bg-black text-white'>
            {children}
        </div>
    </TitleContext.Provider>
  ) 
}
export default TileWrapper

export const TileBackground: React.FC<Props> = ({ children }) => (
    <div className='absolute h-full w-full'>{children}</div>
)

export const TileContent: React.FC<Props> = ({ children }) => (
    <div className='sticky top-0 h-screen overflow-hidden'>{children}</div>
)

interface prop {
    page: number
    renderContent: (props:{progress: number}) => any
}

export const Tile: React.FC<prop> = ({ page, renderContent }) => {
    const { currentPage, numOfPages } = useContext(TitleContext)
    const refContainer = useRef<HTMLDivElement>(null)
    const progress = Math.max(0, currentPage - page)

    let opacity = Math.min(1, Math.max(0,progress * 4))
    if (progress > 0.85 && page < numOfPages -1) {
        opacity = Math.max(0, (1.0 - progress) * 4 ) 
    }
    
    return (
        <div ref={refContainer} className='absolute top-0 w-full'
        style={{
            pointerEvents: progress >= 0 || progress >= 1 ? 'none' : undefined, opacity
        }}>{renderContent({progress})}</div>
    )
}