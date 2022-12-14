import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    // const month = props.date.toLocaleString('en-US', {month: 'long' });
    // const year = props.date.getFullYear();
    // const day = props.date.toLocaleString('en-US', {day: '2-digit' });
    return (
        <div className='expense-item'>
            <ExpenseDate date ={props.date}/>
            <div className='ex'>
                <h2>{props.title}</h2>

                <div className='expense-item_price'>${props.amount}</div>
            </div>
        </div>



    );

}
export default ExpenseItem;