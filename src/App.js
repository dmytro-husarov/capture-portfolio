import { Route, Switch, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import GlobalStyle from "./style/GlobalStyle"
import Nav from "./components/Nav"
import AboutUs from "./pages/AboutUs"
import OurWork from "./pages/OurWork"
import MovieDetail from "./pages/MovieDetail"
import ContactUs from "./pages/ContactUs"


function App() {
  const location = useLocation()

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
