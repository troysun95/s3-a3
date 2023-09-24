import React,{useState} from "react";
import styles from "./App.module.css"

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({name, email})
  const handleSubmit = (e => {
    //避免瀏覽器預設
    e.preventDefault();
    setData({name,email})
  })

  return (  
    <div className={styles.formContainer}>
      <h1>My First React Form</h1>
      <form onSubmit={(e) => handleSubmit(e)} >
        <div className={styles.inputContainer}>
          <label>Name:</label>
          <input type="text" onChange={(e=> setName(e.target.value))}></input>
        </div>
        <div className={styles.inputContainer}>
          <label>Email:</label>
          <input type="text"  onChange={(e=> setEmail(e.target.value))}></input>
        </div>
        <div>
          <input type="submit" value="Submit" className={styles.inputSubmit} ></input>
        </div>
      </form>
      <div className={styles.renderPanel}>
        <span>{data.name}</span>
        <br></br>
        <span>{data.email}</span>
      </div>
    </div>
    
  );
}

export default App;