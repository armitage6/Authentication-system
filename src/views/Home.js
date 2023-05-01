import { useContext } from "react"
import { Context } from '../store/context'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const { actions } = useContext(Context);

    const navigate = useNavigate();
    const register = (e) => {
        actions.handleUserRegister(e)
        alert('Usuario creado con exito')
        navigate(`/profile`)
    }

    return <div className="container">
        <h1>Registro</h1>
        <form onSubmit={(e) => register(e)}>

            <div className="mb-3 row">



                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input
                    onChange={actions.handleChange}
                    type="text" className="form-control" id="exampleInputEmail1"
                    name='username'
                    aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>


            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                    onChange={actions.handleChange}
                    type="password" className="form-control" id="exampleInputPassword1"
                    name='password'
                />

            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default Home