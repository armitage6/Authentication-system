import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from '../store/context'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { actions, store } = useContext(Context);

    const navigate = useNavigate();

    const userSession = () => {
        actions.handleLogout()
        alert('Sesión cerrada con éxito')
        navigate(`/profile`)
    }

    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <div>
                    <Link to={'/'} className="navbar-brand">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to={'/profile'} className="navbar-brand">
                        Profile
                    </Link>
                    <Link to={'/users'} className="navbar-brand">
                        Users
                    </Link>
                </div>
                <div>
                    {store.token ? (
                        <button className="navbar-brand btn btn-outline-secondary" onClick={() => userSession()}>
                            Cerrar sesión
                        </button>
                    ) : null}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
