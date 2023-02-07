 /* Five common methods in LocalStorage:
    setItem(): Add key and value to localStorage
    getItem(): This is how you get items from localStorage
    removeItem(): Remove an item by key from localStorage
    clear(): Clear all localStorage
    key(): Passed a number to retrieve the key of a localStorage
    event listeners */

    
// Add a key-value pair item
document
.getElementById("add-item-to-ls")
.addEventListener("click", () => {
    window.localStorage.setItem("name", "Joe Schmoe");
});

// Add an obj to local storage
document
.getElementById("add-an-object-to-ls")
.addEventListener("click", () => {
    // Adding an Object to LS first needs to be stringified.
    localStorage.setItem(
    "users",
    JSON.stringify({
        name: "John Doe",
        food: "Pizza",
        age: 30,
        dob: "Jan 14, 1992",
    })
    );
});

// GET an item from LS
document
.getElementById("get-item-from-ls")
.addEventListener("click", () => {
    // Getting an object property from LS first needs to be parsed.
    const example = JSON.parse(localStorage.getItem("users"));
//   console.log(example.dob);
    document.getElementById('current-ls').textContent = example.name
});

// Remove an item from LS
document
.getElementById("remove-item-from-ls")
.addEventListener("click", () => {
    window.localStorage.removeItem("name", "Justin Welsh");
});

// Clear out ALL LS
document
.getElementById("remove-all-items-from-ls")
.addEventListener("click", () => {
    localStorage.clear();
    document.getElementById('current-ls').textContent = "resetted"
});