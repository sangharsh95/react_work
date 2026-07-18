// import styles from './Button.jsx'
function Button() {
    //     const handleClick = () => console.log("OUCH");
    //     const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    //     return(<button onClick = {handleClick}>Click Me</button>);
    //     return(<button onClick = {handleClick2("Sangharsh")}>Click Me</button>);
    // 
    let count = 0;

    const handleClick = (name) => {
        if (count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else {
            console.log(`${name} stop clicking me!`);
        }
    };

    return(<button onClick={()=> handleClick("Shubham")}>CLick me</button>
)};

export default Button
