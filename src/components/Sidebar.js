import React from 'react'

const Sidebar = () => {
    const [fullname,setFullname] = React.useState('John')
    const [isShow,setIsShow] = React.useState(true)
    const changeName=()=>{
        setFullname('Mary')
        setIsShow(!isShow)
    }

    React.useEffect(()=>{
        console.log('sidebar useEffect')
    })

    React.useEffect(()=>{
        console.log('sidebar useEffect one time only')
    },[])

    React.useEffect(()=>{
        console.log('sidebar useEffect -> '+fullname)
    },[fullname])

    return (
        <div>
            <h3>Sidebar</h3>
            {
                isShow?<p>Hello</p>:<p>World</p>
            }
            <p>สวัสดี {fullname} </p>
            <button onClick={changeName}>เปลี่ยนชื่อ</button>
        </div>
    )
}

export default Sidebar
