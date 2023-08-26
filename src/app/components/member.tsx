import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface props {
    id: string
    name: string
    socialId: string
    href: string
    target:string
}

const Member: React.FC<props> = ({ id, name, socialId, href, target }) => (
    <div>
        <Image src={`assets/margelo_faces_${id}.svg`} alt='name' width={1366} height={1555}/>
        <div className='text-2xl xl:text-3xl'>{name}</div>
        <div className='text-xl'>
            <Link href={href} target="_blank">
                {socialId}
            </Link>
        </div>
    </div>
)

export default Member