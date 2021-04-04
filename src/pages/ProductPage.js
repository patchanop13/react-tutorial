import React from "react";
import {Table,Image, Badge, Spinner} from "react-bootstrap"
import axios from 'axios'
import {format} from 'date-fns'
import {th} from 'date-fns/locale'
import {BsEyeFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const ProductPage = () => {
  const [product,setProduct] = React.useState([])
  const [loading,setLoading] = React.useState(false)
  const [error,setError] = React.useState(null)
  const cancelToken = React.useRef(null)
  const getData = async() => {
    try{
        setLoading(true)
        const res = await axios.get("https://api.codingthailand.com/api/course",{
            cancelToken:cancelToken.current.token
        })
        setProduct(res.data.data)
    }catch(error){
        setError(error)
    }finally{
        setLoading(false)
    }
  }
  React.useEffect(()=>{
      cancelToken.current = axios.CancelToken.source()
    getData()
    return ()=>{
        cancelToken.current.cancel()
    }
  },[])

  if(loading === true){
      return(
          <div className="text-center mt-5">
              <Spinner animation="border" variant="primary"/>
          </div>
      )
  }

  if(error){
      return (
          <div className="text-center mt-5">
              <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
              <p>{error.response.data.message}</p>
          </div>
      )
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>สินค้า</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>ชื่อคอร์ส</th>
                <th>รายละเอียด</th>
                <th>วันที่สร้าง</th>
                <th>views</th>
                <th>รูปภาพ</th>
                <th>เครื่องมือ</th>
              </tr>
            </thead>
            <tbody>
              {
                  product.map((product,index)=>{
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.detail}</td>
                            <td>
                                {
                                    format(new Date(product.date),'dd MMM yyyy',{locale:th})
                                }
                            </td>
                            <td>
                                <Badge variant="success">{product.view}</Badge>
                            </td>
                            <td>
                                <Image src={product.picture} thumbnail alt={product.title} width={100}/>
                            </td>
                            <td>
                                <Link to={`/detail/${product.id}/title/${product.title}`}>
                                    <BsEyeFill/>
                                </Link>
                            </td>
                        </tr>
                    )
                  })
              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
