import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from "../pages/Home/Home";
import AllNews from "../pages/News/AllNews";
import NewsDetails from "../pages/News/NewsDetails";
import PhotoGallery from "../pages/PhotoGallery/PhotoGallery";
import Events from "../pages/Events/Events";
import EventDetails from "../pages/Events/EventDetatails";
import ExecutiveCommittee from "../pages/ExecutiveCommittee/ExecutiveCommittee";
import Details from "../pages/ExecutiveCommittee/Details";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/Blogs/BlogDetails";
import AllVideos from "../pages/YoutubeLink/AllVideos";
import AllBlogs from "../pages/Blogs/AllBlogs";

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
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/All-blogs" element={<AllBlogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/videos" element={<AllVideos />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/executive-committee" element={<ExecutiveCommittee />} />
        <Route path="/executive-committee/:id" element={<Details />} />
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
      {/* </Suspense> */}
      <Footer />
    </>
  );
}
