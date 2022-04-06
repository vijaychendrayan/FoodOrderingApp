import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef,useState } from 'react'

const MealItemForm = (props) => {
  const [amountIsValid, setAmoutIsValid] = useState(true)
  const amountInputRef = useRef();
  const submitHandler = (event) =>{
    event.preventDefault();
    const enteredAmout = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmout
    if(enteredAmout.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmoutIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  }
  return <form className={classes.form} onSubmit={submitHandler}> 
      <Input 
          ref = {amountInputRef}
          label="Amount" input={{
          id: 'amount_'+props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
      }}/>
      <button>+Add</button>
      {!amountIsValid && <p>Please enter valie amout (1-5)</p>}
  </form>
}
export default MealItemForm