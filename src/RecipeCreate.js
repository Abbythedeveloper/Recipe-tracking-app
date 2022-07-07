import React, { useState } from "react";
function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  // if you add new inputs to your form, this object will not be updated automatically. If you decide to use an initialFormState variable, you will need to add keys whenever you add a new input field.

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  // The initial state stored in formData is created from this object. When the form is reset, a new object is created from this object.

  const submitHandler = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData({ ...initialFormState });
    //Resetting the form to its initial state
  };
  console.log(recipes);
  //   youre not clearing the create form after submitting
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                placeholder="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                type="text"
                placeholder="photo"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="preparation"
                onChange={handleChange}
                value={formData.preparation}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
