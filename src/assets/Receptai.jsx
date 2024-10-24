

export const Receptai = (props) => {
    return (
      <div>
        <h1>Receptai</h1>
  
       
        {props.recipes.map((recipe) => (     //mapas recepto pavadinimui. 
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (  // mapas ingridientu sarasui daryti. 
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
