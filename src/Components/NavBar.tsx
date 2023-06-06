import { Link, NavLink } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";


export const NavBar = () => {

    // const { oktaAuth, authState } = useOktaAuth();
    // // console.log(authState);
    // // console.log(oktaAuth);
    // const handleLogOut = () => {
    //     oktaAuth.signOut()
    // }
    return (

        <nav className="navbar navbar-expand py-3 fixed-top navbar-dark main-color">
            <div className="container-fluid justify-content-start">
                <Link className="navbar-brand" to="/">FoodDeilvery</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={"nav-link"} to={'/home'}>Home</NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink className={"nav-link"} to="/search">Restaurants</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    {/* {authState?.isAuthenticated ? */}
                        {/* <li className='nav-item mt-1'>
                            <button type='button' className='btn btn-outline-light' onClick={handleLogOut}>Log Out</button>
                        </li> */}
                        {/* : */}
                        <li className='nav-item mt-1'>
                            <Link to="/login" type='button' className='btn btn-outline-light'>Sign In</Link>
                        </li>
                    {/* } */}
                </ul>
            </div>
        </nav>
    );
} 