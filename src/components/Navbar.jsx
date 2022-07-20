import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';
import logo from '../images/logo.PNG'

const Navbar = () => {

    const { login, setLogin } = useContext(AppContext);

    const navigate = useNavigate()

    const logout = () => {
        setLogin(null);
        navigate('/login')
    }

    return (
        <nav className="navbar-container">
            <img style={{ width: "300px" }} alt="logo" src={logo}></img>
            <ul className="navbar">
                {login ? (
                    <>
                        <li>
                            <Link to="https://synthusiast.herokuapp.com/addquestion">Ask a question</Link>
                        </li>
                        <li>
                            <Link to="https://synthusiast.herokuapp.com/questions">Forum</Link>
                        </li>
                        <li>
                            <Link to="https://synthusiast.herokuapp.com/profile">My profile</Link>
                        </li>
                        <li>
                            <span style={{ cursor: "pointer" }} onClick={logout}>Log out</span>
                        </li>

                    </>

                ) : (
                    <>
                        <li>
                            <Link to="https://synthusiast.herokuapp.com/questions">Forum</Link>
                        </li>
                        <li>
                            <Link to="https://synthusiast.herokuapp.com/login">Login</Link>
                        </li>
                        <li>
                            <Link to="https://synthusiast.herokuapp.com/register">Register</Link>
                        </li>
                    </>
                )}


            </ul>
        </nav>
    );
}

export default Navbar;