import React from 'react'
import { Button } from '../styles/button/Button'
import Title from '../styles/title/Title'
import Logo from './Logo'

const Header = () => {
    let companyName = 'CCT'
    const companyAddress = <p>Ubon</p>
    let num=10
    const showMessaage=()=>{
        return companyName+'.com'
    }
    const isLogin = false;
    const showMe=()=>{
        alert('Hello React')
    }
    const products=[
        {id:1,name:'Coke'},
        {id:2,name:'Pepsi'}
    ]

    return (
        <>
            <Title>Hello React</Title>
            <h1>บริษัท {companyName}</h1>
            {companyAddress}
            {num+100}
            {showMessaage()}
            {isLogin?(<Logo/>):<p>ไม่มีสิทธิ์ดู logo</p>}
            <br/>
            <Button onClick={showMe} primary>Click Me!</Button>
            <br/>
            <ul>
            {
                products.map((product,index)=>{
                    return (
                        <li key={product.id}>{product.name} {index+1}</li>
                    )
                })
            }
            </ul>
            <hr/>
        </>
    )
}

export default Header
