import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/api/user/user') ;
    const data = await res.json();

    return {
        props :{ users : data } 
    }
}

const Users = ({users}) => {
    return (
<div>
    <h1>All users</h1>
    {users.map(user=>(
        <div key={user.id}>
            <a >
                <h3>
                    {user.userName}
                </h3>
                <h2>{user.content}</h2>
            </a>
        </div>
    ))}
</div>


    )
}
export default Users;