import React from "react";
import { Navbar,Nav,NavDropdown } from "react-bootstrap";
import {NavLink,useHistory} from 'react-router-dom'
// import { UserStoreContext } from "../context/UserContext";

import {useSelector,useDispatch}  from 'react-redux'
import { updateProfile } from "../redux/actions/authAction";

const NavBar = () => {
  const history=useHistory()
  // const [profile,setProfile] = React.useState(null)
  // const userStore = React.useContext(UserStoreContext)

  const profileRedux = useSelector((state)=>state.authReducer.profile)
  const total = useSelector((state)=>state.cartReducer.total)
  const dispatch = useDispatch()

  // const getProfile=()=>{
  //   const profileValue = JSON.parse(localStorage.getItem('profile'))
  //   if(profileValue){
  //     setProfile(profileValue)
  //   }
  // }

  // React.useEffect(() => {
  //   console.log('use effect navbar')
  //   getProfile()
  // }, [])

  //   const getProfile=()=>{
  //   const profileValue = JSON.parse(localStorage.getItem('profile'))
  //   if(profileValue){
  //     userStore.updateProfile(profileValue)
  //   }
  // }

  // React.useEffect(() => {
  //   console.log('use effect navbar')
  //   getProfile()
  // }, [])

    const getProfile=()=>{
    const profileValue = JSON.parse(localStorage.getItem('profile'))
    if(profileValue){
      dispatch(updateProfile(profileValue))
    }
  }

  React.useEffect(() => {
    console.log('use effect navbar')
    getProfile()
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
    // history.go(0)
    history.replace('/')
    dispatch(updateProfile(null))
  }

  return (
    <div>
      <Navbar bg="success" expand="lg" variant="dark">
        <NavLink className="navbar-brand" to="/" exact>
            <img
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Patchanop logo"
            /> 
            {' '} Patchanop
        </NavLink>
        {/* <Navbar.Brand href="#home">
            <img
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Patchanop logo"
            /> 
            {' '} Patchanop
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/" exact activeClassName="active">
                ????????????????????????
            </NavLink>
            <NavLink className="nav-link" to="/product" exact activeClassName="active">
                ??????????????????
            </NavLink>
            <NavLink className="nav-link" to="/about" exact activeClassName="active">
                ????????????????????????????????????
            </NavLink>
            <NavLink className="nav-link" to="/cart" exact activeClassName="active">
                ???????????????????????????????????? {total} ????????????
            </NavLink>
            <NavDropdown title="Workshop (Pagination + CRUD)" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{
                history.replace('/hospital')
              }}>???????????????????????????????????????????????? (Pagination)</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{
                history.replace('/category')
              }}>???????????????????????????????????? (CRUD)</NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/upload" exact activeClassName="active">
                ?????????????????????????????????
            </NavLink>
            <NavLink className="nav-link" to="/member" exact activeClassName="active">
                ??????????????????????????????
            </NavLink>
            <NavLink className="nav-link" to="/chart" exact activeClassName="active">
                ?????????????????? Charts
            </NavLink>
          </Nav>
          {/* {
            userStore.profile?(
              <span className="navbar-text text-white">
                ????????????????????????????????????????????? {userStore.profile.name} role: {userStore.profile.role}
                <button className="btn btn-danger ml-2" onClick={logout}>
                  Log out
                </button>
              </span>
            ):(
              <>
               <Nav>
                  <NavLink className="nav-link" to="/register" exact activeClassName="active">
                    ?????????????????????????????????
                  </NavLink>
                  <NavLink className="nav-link" to="/login" exact activeClassName="active">
                    ?????????????????????????????????
                  </NavLink>
                </Nav>
              </>
            )
          } */}

          {
            profileRedux?(
              <span className="navbar-text text-white">
                ????????????????????????????????????????????? {profileRedux.name} role: {profileRedux.role}
                <button className="btn btn-danger ml-2" onClick={logout}>
                  Log out
                </button>
              </span>
            ):(
              <>
               <Nav>
                  <NavLink className="nav-link" to="/register" exact activeClassName="active">
                    ?????????????????????????????????
                  </NavLink>
                  <NavLink className="nav-link" to="/login" exact activeClassName="active">
                    ?????????????????????????????????
                  </NavLink>
                </Nav>
              </>
            )
          }
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
