
import Expenses from './components/EXPENSES/Expenses';

const expensesArr = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

//try to initiate state at the top component App and pass it down to child components
//const [expenses, setExpenses] = useState(expensesArr);
//guess not. lol

function App() {
  return (
    <div>
      <Expenses expenses={expensesArr} />
    </div>
  );
}

export default App;
