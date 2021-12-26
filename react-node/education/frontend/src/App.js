import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Events from './components/Event';
import Courses from './components/Add-course';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Coursess from './components/CourseTable';
import Event from './components/EventTable';
import CourseInfo from './components/CourseInfo';
import EditCourse from './components/EditCourse';
import EventInfo from './components/DisplayEvent';
import Question from './components/Question';
import Checkout from './components/Checkout';
function App() {
  return (
    <div>


      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Login />
          </Route>
          <Route path="/Signup" exact>
            <Signup />
          </Route>
          <Route path="/addCourse" exact>
            <Courses />
          </Route>
          <Route path="/addEvent" exact>
            <Events />
          </Route>
         
          <Route path="/course" exact>
        <Coursess/>
          </Route>
          <Route path="/event" exact>
        <Event/>
          </Route>
          <Route path="/course-info/:id" exact>
        <CourseInfo/>
          </Route>
          <Route path="/edit-course/:id" exact>
        <EditCourse/>
          </Route>
          <Route path="/edit-event/:id" exact>
        <EventInfo/> </Route>
        <Route path="/question" exact>
        <Question/> </Route>
        <Route path="/github" exact={true}>
            <Checkout />
          </Route>
          <Redirect to="/login"></Redirect>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
