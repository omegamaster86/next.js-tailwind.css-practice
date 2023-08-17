'use client'
import React from 'react'
import {TileWrapper, TileBackground, TileContent,Tile } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight, }  from './work'
import Image from 'next/image'

const Works = () => (
<TileWrapper numOfPages={3}>
    <TileBackground>
        <WorkBackground />
    </TileBackground>
    <TileContent>
        <Tile page={0} renderContent={({progress}) => (
        <WorkContainer>
            <WorkLeft progress={progress}>
                <div>We build</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Pink Panda&apos;s app
                    <WorkLink href='https://bambooassets.com/'></WorkLink>
                </div>
            </WorkLeft>
            <WorkRight progress={progress}>
                <Image src="/assets/pinkpanda.jpg" layout="responsive" width={840} height={1620} alt="Pink Panda"/>
            </WorkRight>
        </WorkContainer>
        )}
        ></Tile>
    </TileContent>
    <TileContent>
        <Tile page={1} renderContent={({progress}) => (
        <WorkContainer>
            <WorkLeft progress={progress}>
                <div>We helped</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Showtime ship faster.</div>
            </WorkLeft>
            <WorkRight progress={progress}>
                <Image src="/assets/showtime.jpg" layout="responsive" width={840} height={1620} alt="showtime"/>
            </WorkRight>
        </WorkContainer>
        )}
        ></Tile>
    </TileContent>
    <TileContent>
        <Tile page={2} renderContent={({progress}) => (
        <WorkContainer>
            <WorkLeft progress={progress}>
                <div>Your image</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>image.iphone-bezels</div>
            </WorkLeft>
            <WorkRight progress={progress}>
                <Image src="/assets/iphone-bezels.jpg" layout="responsive" width={840} height={1620} alt="iphone-bezels"/>
            </WorkRight>
        </WorkContainer>
        )}
        ></Tile>
    </TileContent>
</TileWrapper>
)
export default Works