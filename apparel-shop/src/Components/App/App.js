import logo from "../../images/logo.svg"
import hero from "../../images/hero.jpg"

import Form from "../Form/Form";

function App() {
  return (
    <div className="landing-pages">
      <div className="container grid-2">
        <div className="column-1">
          <div className="logo">
            <img src={ logo } alt="logo"/>
          </div> 

          <div className="text" >
            <h1 className="title">we're</h1>
            <h1>coming soon</h1>
            <p>Hello Fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <Form />
          </div>
        </div>

        <div className="column-2">
          <img src={ hero } alt="hero" className="image"/>
        </div>        
      </div>
    </div>
  )
}

export default App;
