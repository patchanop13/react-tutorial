import React from 'react'
import {getVersion} from '../redux/actions/authAction'
import {useDispatch,useSelector} from 'react-redux'

const Footer = () => {
    const dispatch=useDispatch()
    const version=useSelector((state)=>state.authReducer.version)

    React.useEffect(()=>{
        dispatch(getVersion())
    },[])

    return (
        <div>
            <footer className="container">
                <p>© Patchanop.com 2017-{new Date().getFullYear()} API Version:{version}</p>
            </footer>
        </div>
    )
}

export default Footer
