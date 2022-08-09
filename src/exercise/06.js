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




// // 2 - extra credit
// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null)

//   function handleChange(e) {
//     const { value } = e.target
//     const isValid = value === value.toLowerCase();
//     setError(isValid ? null : 'Username must be lower case')
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const username = e.target.elements.username.value
//     onSubmitUsername(username)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" onChange={handleChange}/>
//       </div>
//       <div style={{color: 'red'}}>{error}</div>
//       <button disabled={Boolean(error)} type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App




// 3 - extra credit
function UsernameForm({onSubmitUsername}) {
  const [myInputValue, setMyInputValue] = React.useState('')

  function handleChange(e) {
    const { value } = e.target
    setMyInputValue(value.toLowerCase())
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitUsername(myInputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={handleChange} value={myInputValue}/>
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
