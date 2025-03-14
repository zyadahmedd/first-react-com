import { useState, useEffect } from "react";
import ErrorComponent from "../ErrorMsg/ErrorComponent";

export default function FormComponent() {
  const [showError, setShowError] = useState(false);
  const [nextId, setNextId] = useState(1);
  const [inputForm, setInputForm] = useState({
    id: nextId ,
    name: "",
    email: "",
    message: "",
  });

  const [submitData, setSubmitData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setSubmitData(data);
    }
  }, []);



  function checkSubmit(event) {
    event.preventDefault();
      console.log(inputForm.id)
    if (inputForm.name !== "" || inputForm.email !== "" || inputForm.message !== "") {
      const updatedData = [...submitData, inputForm];
      setSubmitData(updatedData);
      localStorage.setItem("data", JSON.stringify(updatedData));
      setInputForm({ id: nextId + 1, name: "", email: "", message: "" });
      setNextId(nextId + 1);
      setShowError(false);
    } else {
      setShowError(true);
    }
  }

  function handleDeleteClick(id) {
    const updatedData = submitData.filter((data) => data.id !== id);
    setSubmitData(updatedData);
    localStorage.removeItem("data", JSON.stringify(updatedData));
  }
  
  function handleClick() {
    if (showError) setShowError(false);
  }

  return (
    <>
    <div className="data-form" onClick={handleClick} >
      <div style={{height:"fit-content"}}>
          <h1>Online Shop</h1>
          <h3>Submitted Data:</h3>
      </div>
      <div className="data-form-left">
        {submitData.length > 0 && (
          <div className="submitted-data">
            {submitData.map((data) => (
              <div key={data.id} className="data-entry">
                <div>
                <p> {data.name}</p>
                <p>{data.email}</p>
                <p > {data.message}</p>
                </div>
                <div>
                      <button  onClick={()=>handleDeleteClick(data.id)} className="deleted">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="data-form-right">
        <form>
          <input onChange={(e) => setInputForm({ ...inputForm, name: e.target.value })} value={inputForm.name} type="text" placeholder="Name" />
          <input onChange={(e) => setInputForm({ ...inputForm, email: e.target.value })} value={inputForm.email} type="text" placeholder="Email" />
          <textarea style={{height:"300px"}} onChange={(e) => setInputForm({ ...inputForm, message: e.target.value })} value={inputForm.message} placeholder="Message"></textarea>
          <button onClick={checkSubmit} type="submit">Submit</button>
        </form>
      </div>
      <ErrorComponent isvisable={showError} />
    </div>
    </>
  );
}
