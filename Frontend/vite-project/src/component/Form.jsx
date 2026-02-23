import React from 'react'

function Form() {

    async function handleSubmit(e) {
        e.preventDefault();
        const name = e.target[0].value;
        const age = e.target[1].value;

        const response = await fetch("http://localhost:3000/student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name ,age})
               
        });
    }

  return (
    <>
    <div onSubmit={handleSubmit}>
        <h2>Form</h2>

        <form>
            <input type="text" placeholder='Name' />
            <input type="number" placeholder='Age' />
            <button type='submit'>Submit</button>
        </form>
        </div>

        
    </>
    
    
  )
}

export default Form