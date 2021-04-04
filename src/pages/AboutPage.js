import React from 'react'
import axios from 'axios'

const AboutPage = () => {
    const [version,setVersion] = React.useState('')
    const getData  = async() => {
        const res = await axios.get('https://api.codingthailand.com/api/version')
        setVersion(res.data.data.version)
    }

    React.useEffect(()=>{
        getData()
    },[])
    
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-12">
                    <h2>เกี่ยวกับเรา</h2>
                    {
                        version && (
                            <p>
                                Backend API เวอร์ชั่น: {version}
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutPage
