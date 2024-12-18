import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/user";
import UserLayout from "./layout/UserLayout";
// import Admin from "./pages/Admin/Admin";
// import Adminlayout from "./Layout/Adminlayout";
// import AddPost from "./pages/Admin/AddPost";
// import User1 from "./pages/Admin/user";
// import User2 from "./pages/user";
// import AllPost from "./pages/AllPost";
// import login from "./pages/login";
import Login from "./pages/login";
import Register from "./pages/register";
// import Register from "./pages/Register";
import { Provider } from "react-redux";
import { peristor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/profile";
import Filter from "./pages/filter";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Provider store={store}>
          <PersistGate loading={null} persistor={peristor}>
            <Routes>
              <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="/user/:userId" element={<User />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/filter" element={<Filter/>}></Route>

              </Route>
              {/* For Admin Users */}
              {/* <Route path="/dashboard" element={<Adminlayout />}>
                <Route index element={<Admin />} />
                <Route path="addpost" element={<AddPost />} />
                <Route path="users" element={<User2 />} />
                <Route path="allposts" element={<AllPost />} />
              </Route> */}
            </Routes>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </>
  );
}
