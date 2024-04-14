// Code Keypad Component Here

function Keypad() {
  function handleChange() {
    return console.log("Entering password...");
  }
  return (
    <div>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Enter Password"
      ></input>
    </div>
  );
}

export default Keypad;
