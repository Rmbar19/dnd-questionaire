import {useState, react} from 'react';
import Form from './form';

const AnswerQuestion = () => {
    const [answer, setAnswer] = useState(false)
    

    const showAnswer = () => {
        setAnswer(!answer)
    }

    return (
        <>
        <form>
            {/* <label>
                Survey
                <input type = 'text' name = 'name' />
            </label> */}
            <input type = 'submit' value='Take survey' onClick={e => {
                
                fetch('http://localhost:4000/retrieve')
                .then(data => data.json())
                .then(data => console.log(data[0].question))
                .then(data => data.map(element => console.log(element.question)))
                // .then(console.log(res.rows))
                e.preventDefault()
                showAnswer()
                console.log(e.target.value)
            }}/>
        </form>

        {answer && (
            <form>
          <label>
            
            sample question!
            <input type = 'text' name = 'name' />
            </label>
          <input type = 'submit' value ='Submit'/>
            </form>
        )}
        {/* <h1 className='new-Question' onClick={ e => {
                    //  <><Form></Form>  </>
                     
                    //   console.log('click')
        }

        }>Click to take survey!</h1> */}
        {/* <h1 className='new-Question'>Enter survey!</h1> */}
        </>
    )
}

export default AnswerQuestion