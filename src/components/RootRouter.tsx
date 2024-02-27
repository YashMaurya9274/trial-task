import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { selectUser } from "../slices/userSlice";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import BackgroundImage from "./BackgroundImage";

const RootRouter = () => {
  const user = useSelector(selectUser);

  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        {user && user.email ? (
          <Route
            path="/"
            element={
              <MainContainer>
                <BackgroundImage />

                <h1 className="z-10 text-white my-auto mx-auto text-3xl">
                  Welcome, email - {user.email} {"->"} Getting data through
                  Redux
                </h1>
              </MainContainer>
            }
          />
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
