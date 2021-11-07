import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('http://localhost:3000/api/recipe/recipe') ;
    const data = await res.json();

    return {
        props :{ recipes : data } 
    }
}

const Recipes = ({recipes}) => {
    return (
<div>
    <h1 className={styles.title2}>All recipes</h1>
    {recipes.map(recipe=>(
        <div key={recipe.id} className={styles.single}>
            <a >
                <h3 className={styles.title}>
                    {recipe.recipeTitle}
                </h3>
                <h3 className={styles.title1}>
                   created At :  {recipe.created_at.slice(0,10)}
                </h3>
                <h2 className={styles.text}>Content : {recipe.content}</h2>
                <button className={styles.button}>Delete</button>
                <button className={styles.button}>Update</button>
            </a>
            <hr className="dashed"></hr>
        </div>
    ))}
</div>


    )
}
export default Recipes;