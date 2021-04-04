import React from 'react'
import { logo, title } from '../styles/style'
import useHover from './UseHover'

const Logo = () => {
    const logoImage={
        url:'./logo192.png'
    }
    const [hover,attrs] = useHover()
    return (
        <div>
            <h3 style={title}>Logo</h3>
            {
                hover?<h3>เมนูหลัก</h3>:null
            }
            <img {...attrs} style={logo} src={logoImage.url} width="100" alt="logo"/>
        </div>
    )
}

export default Logo
