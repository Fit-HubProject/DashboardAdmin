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
    <h1>All recipes</h1>
    {recipes.map(recipe=>(
        <div key={recipe.id}>
            <a >
                <h3>
                    {recipe.recipeTitle}
                </h3>
                <h2>{recipe.content}</h2>
            </a>
        </div>
    ))}
</div>


    )
}
export default Recipes;