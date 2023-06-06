import {useState, react} from 'react';
import Form from './form';


const AnswerQuestion = () => {
    const [answer, setAnswer] = useState(false)
    const [questions, setQuestions] = useState('')

    const showAnswer = () => {
        setAnswer(!answer)
    }
    // const mapObject = (object) => {
    //     setQuestions(...questions, object)
    //     console.log(questions, 'object')
        
       
    // }
    // return (
//         <>
//         <form>
//             {/* <label>
//                 Survey
//                 <input type = 'text' name = 'name' />
//             </label> */}

// {/* {buildOrder.map((data) => {
//               return <li className="everything" onClick={(e) => {
//                 window.confirm(`Delete ${data.name}?
//           `) ? (removal(e.target.textContent)) : console.log("Not deleted")

//               }}>{data.name}</li>
//             })
//             } */}

//             <input type = 'submit' value='Take survey' onClick={e => {
                
//                 fetch('http://localhost:4000/retrieve')
//                 .then(data => data.json())
//                 .then(data => data.map(element => {
//                       mapObject(element.question)
//                     } 
//                     )
//                     )
//                 // .then(data => data.map(element => console.log(element.question)))
             
//                 e.preventDefault()
//                 showAnswer()
//                 console.log(e.target.value, 'the value')
//             }}/>
//         </form>

//         {answer && (
    
               
//             <form>
//           <label>
            
//             sample question!
//             <input type = 'text' name = 'name' />
//             </label>
//           <input type = 'submit' value ='Submit'/>
//             </form>
//         )}
        {/* <h1 className='new-Question' onClick={ e => {
                    //  <><Form></Form>  </>
                     
                    //   console.log('click')
        }

        }>Click to take survey!</h1> */}
        {/* <h1 className='new-Question'>Enter survey!</h1> */}
        // </>
    // )
}

export default AnswerQuestion