import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer';
import mainStyle from './App.module.css';
import  TaskList from '../components/TaskList';
import TaskForm from  '../components/TaskForm';



const App = () => {


  return (
      <>
      <Header />
      <div className="App">
      <main className={mainStyle.main}>
      <div>
        <h2>
          what are you going to do ?
        </h2>
  
       
      </div>
      <div>
      <h2>Your tasks:</h2>
      <p>list</p>
      <h1>Content..</h1>
      </div>
      </main>
      <Footer />

    </div>
    </>
  )
}


export default App;