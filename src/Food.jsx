function Food() {

    const food1 = "Orange";
    const food2 = "Banana";
    const food3 = "Mango";

    return (
        <>
            <ul>
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>{food2.toUpperCase()}</li>
                <li>{food3.toUpperCase()}</li>
            </ul>

            <hr />
        </>
    );
}

export default Food;