import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { lightMode, darkMode } from './ducks/styleSlice'

function App() {
  const dispatch = useDispatch()
  const style = useSelector((state) => state.style)

  console.log(style)
  return (
    <div style={{ backgroundColor: style.color1, color: 'white' }} className="App">
      <Nav />
      <button onClick={() => {style.darkMode ? dispatch(lightMode()) : dispatch(darkMode())}}>
        {style.darkMode ? "Light Mode" : "Dark Mode"}</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
