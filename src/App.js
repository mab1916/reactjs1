import './App.css';
// Files Importing
import Navbar from "./commonComponents/navbar"
import Header from "./commonComponents/header"
import Slider from "./commonComponents/slider"
import FeatuerItem from "./commonComponents/featureItem"
import Iframe from "./commonComponents/iframe"
import Blog from "./commonComponents/blogPost"
import Support from "./commonComponents/support"
import Footer from "./commonComponents/footer"
// Library
import 'bootstrap/dist/css/bootstrap.min.css'
// import "mdb-ui-kit/css/mdb.min.css"

function App() {
  return (
    <div>
        <Navbar/>
      <br/>
      <br/>
      <br/>
        <Header/>
        <Slider/>
        <FeatuerItem/>
        <Iframe/>
        <Blog/>
        <Support/>
        <Footer/>
    </div>
  );
}

export default App;
