import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
import NewComponent from "./NewComponent.jsx"
import ColorPicker from "./ColorPicker.jsx"
import ToDoList from "./ToDoList.jsx"


function App() {
  
  return(
    <>
          <ToDoList />
          <ColorPicker />
          <NewComponent />
          <MyComponent />
          <Counter />
          <Header/>
          <Food/>
          <Card/>
          <Card/>
          <Button/>
          <Student name = "Spongebob" age={30} isStudent={true} />
          <Student name = "john" age={35} isStudent={true} />
          <Student name = "Sanju" age={22} isStudent={true} />
          <UserGreeting isLoogedIn={true} username="BroCode" />
          <List/>
          <Footer/>
          
          
    </>
  )
}

export default App
