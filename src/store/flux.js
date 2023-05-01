//flux.js
const getState = ({ setStore, getActions, getStore }) => {
    return {
        store: {
            user: {
                username: '',
                password: '',
            },
            token: '',
            users: []
        },
        actions: {
            handleChange: (e) => {
                let { user } = getStore()
                const {
                    target: { value, name },

                } = e
                setStore({
                    user: {
                        ...user,
                        [name]: value
                    }
                })
            },
            handleUserRegister: (e) => {
                e.preventDefault();
                const { user } = getStore();
                fetch('http://localhost:8080/users', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(user)

                }).then(res => res.json())
                    .then(data => {
                        console.log(data);

                    })
                    .catch(error => console.log(error))
                setStore({
                    user: {
                        username: '',
                        password: '',
                    }
                })
            },
            handleUserLogin: (e) => {
                e.preventDefault();
                const { user } = getStore();
                fetch('http://localhost:8080/login', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(user)

                }).then(res => res.json())
                    .then(data => setStore({ token: data.token }))
                    .catch(error => console.log(error))
                setStore({
                    user: {
                        username: '',
                        password: '',
                    }
                })
            },
            getUsers: () => {
                const { token } = getStore()
                fetch('http://localhost:8080/users/list', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }

                )
                    .then(res => res.json())
                    .then(data => setStore({ users: data }))
                    .catch(error => console.log(error))
            },
            handleLogout: () => {
                setStore({ token: '' });
            }
        },
    };
};
export default getState;