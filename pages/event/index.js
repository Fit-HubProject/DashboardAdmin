import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/events') ;
    const data = await res.json();

    return {
        props :{ events : data } 
    }
}

const Events = ({events}) => {
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
              </tr>
            </thead>
            <tbody>
            {events.map(event=>(
              <tr key={event.id}>
                <td>{event.eventName} </td>
                <td> {event.adress}</td>
                <td>{event.description}</td>
                <td>{event.date.slice(0,10)}</td>
                <td>{event.max_number}</td>
                <td> {event.imageUrl}</td>
                <td>
                  <div className="relative">
                <td>
                    <button  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                    <path fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
            </td>
        </div>
        <hr className="dashed"></hr>
        </td>
        </tr>))}
        </tbody>
        </table>
        </div>
    )
}
export default Events;