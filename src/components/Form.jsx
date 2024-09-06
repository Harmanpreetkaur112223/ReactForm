import React, { useState } from "react";
import Element from "./Element";
import './Form.css'
let formInputs = [
  {
    label: "Product Name ",
    htmlFor: "laptops",
    id: "laptops",
    name: "laptops",
    type: "text",
    value: "",
  },
  {
    label: "Product Description",
    htmlFor: "desc",
    id: "desc",
    name: "desc",
    type: "text",
    value: "",
  },
  
];
export default function Form() {
  // set the initial state object for storing the data of each individual 
  const initialState = formInputs.reduce((acc, elem) => {
    return { ...acc, [elem.name]: elem.value };
  }, {});
  // console.log("initial",initialState)
  // state variable for an array of objects , data of an individual , storing the updated element index and if the editing is false or true
  const [arr, setArr] = useState([]);
  const [editting, setEditing] = useState(false);
  const [data, setData] = useState(initialState);
  const [editIndex, setEditIndex] = useState(null);

  // control the change event on the elements on the inputs 
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("change target",name , value)
  
    setData({ ...data, [name]: value });
    
  };
  
  console.log("chnage",data)
   // handle the delete operation on any element
   const handleDelete = (data, index) => {
    const newArr = data.filter((elem, idx) => idx != index);
    setArr(newArr);
  };


  // handle the update operation on the element
  // 1) set the edit to true
  // 2) set the element index that is to be edited
  // 3) catch the element that needs to be updated 
  // 4) storing iit in the data state variable and it will automatically gets moved as the input values
  const handleUpdate = (data, index) => {
    setEditing(true);
    setEditIndex(index);
    // console.log(index, "update index");
    const elemToUpdate = data[index];
    // console.log(elemToUpdate)
    setData(elemToUpdate);
  };


  // handle the submission of form data 
  // check if the updation operation is being done or the submission operation and then work accordingly
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (editting) {
      setArr((prevArr) => {
        const newArr = [...prevArr];
        newArr[editIndex] = data;
        return newArr;
      });

      setEditing(false);
    } else {
      // console.log(data)
      setArr([...arr, data]);
    }
    console.log(arr)
    setData(initialState);
  };

 
 
  return (
    <>
    <div className="form-wrapper">
      {/* create a form first and the creating the form dynamically by mapping on the array  */}
      <div className="form-inner-wrapper">
      <form action="" className="form-itself">
        {formInputs.map((elem, index) => (
          <>
            <div key={index}>
              <label htmlFor={elem.htmlFor}>{elem.label}:</label>
              <input
                type={elem.type}
                value={data[elem.name]}
                name={elem.name}
                onChange={handleChange}
                id = {elem}
                required
              />
              
            </div>
            
          </>
        ))}
        {/* the update or submit button adjustments according to the requirements */}
        <button className="submit-btn" type="submit" onClick={handleSubmit}>
          {editting ? "Update" : "submit"}
        </button>
      </form>

      </div>

      {/* iterating over each element of the array and then calling the compnent to print it */}
     <div className="elements">
     {arr.map((elem, index) => (
        <Element
          key={index}
          name={elem.laptops}
          data={arr}
          description={elem.desc}
          deletefun={() => handleDelete(arr, index)}
          updateFun={() => handleUpdate(arr, index)}
          elemIndex={index}
        />
      ))}
     </div>
    </div>
    </>
  );
}
