import './App.css';
import CustomStyle from './components/Custom Styling';
import CustomToolbar from './components/Custom Toolbar';
import AddingEvents from './components/Adding Events';
import MyCalendar from './components/Basic';
import Customizing from './components/Customizing';
import EventClick from './components/Event Click Handlers';


function App() {
  return (
    <div>
      <MyCalendar />
      <Customizing />
      <AddingEvents />
      <EventClick />
      <CustomStyle />
      <CustomToolbar />
    </div>
  );
}

export default App;
