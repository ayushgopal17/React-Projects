
import './App.css'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation'

import Contactform from './components/ContactForm/ContactForm'

function App() {
  

  return <div>
    <Navigation/>
    <main className="main_container">
      <ContactHeader/>
    <Contactform/>
    </main>
  </div>
}

export default App
