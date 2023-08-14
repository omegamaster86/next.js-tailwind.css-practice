'use client'
import React, { useRef, useContext } from 'react'

interface WrapperProps {
    numOfPage: number
    children: any
}

interface TitleContextValue {
    numOfPage: number
    currentPage: number
}

export const TitleContext = React.createContext<TitleContextValue> ({
    numOfPage: 0,
    currentPage: 0
})

export const TileWrapper: React.FC<WrapperProps> = ({ children, numOfPage }) => {
  return (
    <div className=' relative bg-black text-white'>Tile wrap</div>
  )
}

export default TileWrapper