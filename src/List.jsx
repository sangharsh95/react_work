
function List(){
    const fruits = ["apple","banana", "Mango"];
    fruits.sort();
    const listItems = fruits.map(fruit => <li>{fruit}</li>)
    return(<ol>{listItems}</ol>);
}
<hr></hr>

export default List