import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/users') ;
    const data = await res.json();

    return {
        props :{ users : data } 
    }
}

const Users = ({users}) => {
    return (
        <div>
<table id="example" className={styles.tab} >
    <thead>
      <tr>
        <th data-priority="1">Last Name</th>
        <th data-priority="2">First Name</th>
        <th data-priority="3">Email</th>
        <th data-priority="4">registred_at</th>
        <th data-priority="5">Age</th>
        <th data-priority="6">ImageUrl</th>
        <th data-priority="7">Delete</th>
        <th data-priority="7">Update</th>
      </tr>
    </thead>
    <tbody>
    {users.map(user=>(
      <tr key={user.id}>
        <td>{user.last_name} </td>
        <td> {user.first_name}</td>
        <td>{user.email}</td>
        <td>{user.registred_at.slice(0,10)}</td>
        <td>{user.age}years</td>
        <td> {user.imageUrl}</td>
        <td>
          <div className="relative">
        <td>
            <button  >
       DELETE
        </button>
    </td>
 
</div>
<hr className="dashed"></hr>
</td>   <td>
            <button  >
      UPDATE
        </button>
    </td>
</tr>))}
</tbody>
</table>
</div>
    )
}
export default Users;