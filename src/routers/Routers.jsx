import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Login from "../pages/Authentication/Login";
import Profile from "../pages/Authentication/Profile";
import Home from "../pages/Home/Home";
import AllNews from "../pages/News/AllNews";
import NewsDetails from "../pages/News/NewsDetails";
import PhotoGallery from "../pages/PhotoGallery/PhotoGallery";
import Events from "../pages/Events/Events";
import EventDetails from "../pages/Events/EventDetatails";
import ExecutiveCommittee from "../pages/ExecutiveCommittee/ExecutiveCommittee";
import Details from "../pages/ExecutiveCommittee/Details";
import Signup from "../pages/Authentication/Signup";
import ChangePassword from "../pages/Authentication/ChangePassword";

export default function Routers() {
  return (
    <>
      <Header />
      {/* <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      > */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/executive-committee" element={<ExecutiveCommittee />} />
        <Route path="/executive-committee/:id" element={<Details />} />
        <Route path="*" element={<div>404: Page Not Found</div>} />

        <Route element={<PrivateRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
      </Routes>
      {/* </Suspense> */}
      <Footer />
    </>
  );
}
