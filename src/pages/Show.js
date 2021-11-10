import { useState } from "react";

function Show(props) {
  // grab the id param from match
  const id = props.match.params.id;
  // save cheese standalone variable
  const cheese = props.cheese;
  // find the cheese to show
  const onecheese = cheese.find((singleCheese) => {
    return singleCheese._id === id;
  });

  // state for our form
  const [editForm, setEditForm] = useState(onecheese);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };



  // handleSubmit function for form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateCheese(editForm, onecheese._id)
    // redirect cheese back to index
    props.history.push("/")
  }

  const removeCheese = () => {
    props.deleteCheese(onecheese._id)
    props.history.push("/")

  }

  return (
    <div className="cheese">
      <h1>{onecheese.name}</h1>
      <h2>{onecheese.title}</h2>
      <img src={onecheese.image} alt={onecheese.name} />
      <button onClick={removeCheese} id="delete">Delete</button>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        />
        <input 
        type="text"
        value={editForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}
        />
        <input type="submit" value="update cheese"/>
      </form>
    </div>
  );
}

export default Show;