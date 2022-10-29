
const Menu = () => {
  return (
    <>
    <header />
      <form>
        <label>
          <h2>Menú</h2>
          <input type="text" name="name" placeholder="Nombre Cliente" />
          <input
            type="number"
            name="table"
            placeholder="Mesa"
            min="0"
            max="10"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
    </>
      );
   };
   
export default Menu;
