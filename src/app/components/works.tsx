"use server";
import React from 'react'
import {TileWrapper, TileBackground, TileContent, Tile } from './tile'

const Works = () => (
<TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>
        <Tile page={0} renderContent={({progress}) => (
        <span>foo {progress}</span>)}></Tile>
    </TileContent>
    <TileContent>
        <Tile page={1} renderContent={({progress}) => (
        <span>foo1 {progress}</span>)}></Tile>
    </TileContent>
    <TileContent>
        <Tile page={2} renderContent={({progress}) => (
        <span>foo2 {progress}</span>)}></Tile>
    </TileContent>
</TileWrapper>
)
export default Works