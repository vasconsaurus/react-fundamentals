// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// // main exercise
// function UsernameForm({onSubmitUsername}) {
//   function handleSubmit(e) {
//     e.preventDefault();
//     const username = e.target.elements.username.value
//     onSubmitUsername(username)
//   }
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username"/>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App




// // 1 - extra credit
// function UsernameForm({onSubmitUsername}) {
//   const inputEl = React.useRef(null);

//   function handleSubmit(e) {
//     e.preventDefault();

//     const username = inputEl.current.value
//     onSubmitUsername(username)

//     e.target.reset();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" ref={inputEl}/>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App




// 2 - extra credit
function UsernameForm({onSubmitUsername}) {
  React.useEffect(() => {
    const formInput = document.getElementById("username");
    formInput.addEventListener('keyup', handleChange)
  }, []);

  function handleChange(e) {
    console.log(e.target.value)
    let value = e.target.value
    const isValid = value === value.toLowerCase();
    if(!isValid) {
      alert('must be lowercase');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
