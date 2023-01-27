import Form from "./components/form";
import Comment from "./components/comment";
import Confirm from "./components/confirm";
import './style/main.scss';
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    nameSurname: "",
    mail: "",
    message: ""
  })

  const [formArray, setFormArray] = useState([])

  return (
    <div className="App">
      <div className="App__left">
        <Form formData={formData} setFormData={setFormData} formArray={formArray} setFormArray={setFormArray} />
        <Comment />
      </div>
      <div className="App__right">
        <Confirm />
      </div>
    </div>
  );
}

export default App;
