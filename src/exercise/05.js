// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// // main exercise
// const smallBox = <div className='box box--small' style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
// const mediumBox = <div className='box box--medium' style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
// const largeBox = <div className='box box--large' style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// export default App

// 1: extra credit
// function Box(props) {
//   return <div className={`box ${props.className}`} style={{fontStyle: 'italic', ...props.style}}>{props.children}</div>
// }
function Box({className ='', style, ...otherProps}) {
  return < div className={`box ${className}`} style={{fontStyle: 'italic', ...style}} {...otherProps}/>
}

const smallBox = <Box children='small lightblue box' className='box--small' style={{backgroundColor: 'lightblue'}}/>
const mediumBox = <Box children='medium pink box' className='box--medium' style={{backgroundColor: 'pink'}}/>
const largeBox = <Box children='large orange box' className='box--large' style={{backgroundColor: 'orange'}}/>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App


    // function Message({children}) {
    //   return <div className="message">{children}</div>
    // }

    // const element = (
    //   <div className="container">
    //     <Message children='Hello World' />
    //     <Message children='Goodbye World' />
    //   </div>
    // )
