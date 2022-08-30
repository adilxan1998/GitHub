import Header from "./Header/Header"
import Mainlist from "./Main/Mainlist/Mainlist"
import Mainleft from "./Main/Mainleft/Mainleft"
import Footer from "./Footer/Footer"
import { Routes, Route, Outlet } from "react-router-dom"
import "./Home.css"
import Overview from "../../Routes/overview/Overview"
import Repositories from "../../Routes/Repositpries/Repisitories"
import Followers from "./Main/Follow/Followers"


const Home = () => {
  return (
    <>
      <Header />
      <Mainlist />
      <div className="d-flex">
        <Mainleft />
        <div className="render">
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/followers" element={<Followers />} />
          </Routes>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;