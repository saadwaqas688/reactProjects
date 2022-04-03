// Guess Number project
// 
// 
// import React, { useState } from 'react'
// function App() {
//   const [upper, setUpper] = useState(100);
//   const [lower, setLower] = useState(1);
//   const [ranNum, setRanNum] = useState();
//   const [num, setNum] = useState();
//   function handleRandom(){
//     var tem = Math.floor((Math.random() * (upper - lower)) + lower);
//     setRanNum(tem)
//   }
//   function handleLower(){
//     setLower(ranNum)

//   }
//   function handleUpper(){
//    setUpper(ranNum)

//   }

//   return (
//     <main>
//       <section className='container'>
//         {
//            (num!=null && num===ranNum) ? <h3>congratulation </h3>: <h3>{ranNum}</h3>
//         }
//         <button onClick={handleRandom}>Generate Number</button>
//         <button onClick={handleUpper}>greater</button>
//         <button onClick={handleLower}>Lesser</button>
//         <input type="text" value={num} onChange={(e)=>setNum(e.target.value)} /> 
//       </section>
//     </main>
//   )
// }
// export default App












// counter project
// 
// 
// import React, { useState } from 'react'
// function App() {
//   const [num, setNum] = useState(0);
//   function increment(){
//     setNum(num+1)
//   }
//   function decrement(){
//     setNum(num-1)
//   }

//   return (
//        <>
//                <div>{num}</div>

//         <button onClick={increment}>barhao</button>
//         <button onClick={decrement}>kam kero</button>

//         </>
//   )
// }

// export default App









//form project 
// 
// 
// import React, { useState } from 'react'
// function App() {
//   const [name, setName] = useState('');
//   const [formData, setFormData] = useState('');

// function change(e){
//   setFormData(e.target.value)
// }

// function submit(e){
//   e.preventDefault()
//   setName(formData)
// }

//   return (
      
//        <>
//         <form onSubmit={submit}>
//           <input value={formData} onChange={change}/>
//          </form>
//          <div>{name}</div>
//       </>

//   )
// }

// export default App













// even odd project
// 
// 
// import React, { useState } from 'react'
// function App() {
//   const [num, setNum] = useState('');
//   const [result, setResult] = useState('');


// function change(e){
//   setNum(e.target.value)
// }


// function handleClick(){
// if(num%2===0){
//   setResult("even number")
// }else{
//   setResult("odd number")
// }
// }

//   return (
      
//        <>
//           <input onChange={change}/>
     
//           <button onClick={handleClick}>
//             Check Number
//             </button>

//            <div>{result}</div>

 
//       </>
//   )
// }

// export default App













// 
//calculator
//
// 
// import React, { useState } from 'react'
// function App() {
//   const [firstNumber, setFirstNumber] = useState();
//   const [secondNumber, setSecondNumber] = useState();
//   const [result, setResult] = useState('');


// function FirstNumber(e){
//     setFirstNumber(parseInt(e.target.value))

// }

// function SecondNumber(e){
//     setSecondNumber(parseInt(e.target.value))
// }


// function Addition(){
//     setResult(firstNumber+secondNumber) 
// }

// function Subtraction(){
//     setResult(firstNumber-secondNumber) 
// }

// function Multiply(){
//     setResult(firstNumber*secondNumber)  
// }

// function Divide(){
//     setResult(firstNumber/secondNumber) 

// }

// function Clear(){
//     setFirstNumber("")
//     setSecondNumber("")
//     setResult("")
// }

//   return (
      
//        <>
//           <input value={firstNumber} onChange={FirstNumber}/>


//           <input value={secondNumber} onChange={SecondNumber}/>

     
//           <button onClick={Addition}>
//               Add
//             </button>

//             <button onClick={Subtraction}>
//               subtract
//             </button>

//             <button onClick={Multiply}>
//              Multiply
//             </button>

//             <button onClick={Divide}>
//              Divide
//             </button>

//             <button onClick={Clear}>
//              Clear
//             </button>

//           <div>{result}</div>

 
//       </>
//   )
// }

// export default App


























































