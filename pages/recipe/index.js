import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/recipes') ;
    const data = await res.json();

    return {
        props :{ recipes : data } 
    }
}

const Recipes = ({recipes}) => {
    return (
        <div>
        <table id="example" className={styles.tab} >
            <thead>
              <tr>
                <th data-priority="1">Recipe Title</th>
                <th data-priority="2">Ingredients</th>
                <th data-priority="3">kcal</th>
                <th data-priority="4">created_at</th>
                <th data-priority="5">ImageUrl</th>
                <th data-priority="6">Delete</th>
                <th data-priority="7">Update</th>
              </tr>
            </thead>
            <tbody>
            {recipes.map(recipe=>(
              <tr key={recipe.id}>
                <td>{recipe.recipeTitle} </td>
                <td> {recipe.ingredients}</td>
                <td>{recipe.kcal}</td>
                <td>{recipe.created_at.slice(0,10)}</td>
                <td> {recipe.imageUrl}</td>
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
export default Recipes;