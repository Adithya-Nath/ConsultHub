import Companylist from "./companylist"
import Homepage from "./homepage"
import {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/companylist" element={<Companylist/>}/>
    </Routes>
    </>
  )
}

export default App
