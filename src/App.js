import ExpenseItem from "./components/ExpenseItem";

function App(){
  let expenses=[
    {
      id: 'e1',
      title: 'school Fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {
      id: 'e2',
      title: 'school Fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {
      id: 'e3',
      title: 'school Fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },
  ]
  return (
    <div>
      <h2>lets go</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}>
      </ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}>
      </ExpenseItem>
      
    </div>

  )
}
export default App;