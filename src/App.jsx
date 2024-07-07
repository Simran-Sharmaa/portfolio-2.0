import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Resume from "./components/Resume";
import Parent from "./pages/Parent";



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Parent/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App

