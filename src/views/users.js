import { useContext, useEffect } from "react"
import { Context } from '../store/context'

const Users = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getUsers()
    }, [])

    if (store.token === '') {
        return (
            <div>
                <h1 className="text-center">Para ver la lista de usuarios, debes iniciar sesión.</h1>
            </div>
        );
    } else {
        return (
            <ul>
                {Array.isArray(store.users) && store.users.map(user => <li key={user.id}>{user.username}</li>)}
            </ul>
        );
    }
}

export default Users;
