import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/blogs') ;
    const data = await res.json();

    return {
        props :{ blogs : data } 
    }
}

const Blogs = ({blogs}) => {
    return (
        <div>
<table id="example" className={styles.tab}>
    <thead>
      <tr>
        <th data-priority="1">blogTitle</th>
        <th data-priority="2">content</th>
        <th data-priority="3">like</th>
        <th data-priority="4">author</th>
        <th data-priority="5">date</th>
        <th data-priority="6">ImageUrl</th>
        <th data-priority="7">Delete</th>
        <th data-priority="7">Update</th>
      </tr>
    </thead>
    <tbody>
    {blogs.map(blog=>(
      <tr key={blog.id}>
        <td> {blog.blogTitle} </td>
        <td> {blog.content} </td>
        <td> {blog.like} </td>
        <td> {blog.author} </td>
        <td> {blog.date.slice(0,10)} </td>
        <td> {blog.imageUrl} </td>
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
            <button>
      UPDATE
        </button>
    </td>
</tr>))}
</tbody>
</table>
</div>
    )
}
export default Blogs;