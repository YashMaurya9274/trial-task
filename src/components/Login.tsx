import { Link } from "react-router-dom";
import ImageLinks from "../assets/images";
import BackgroundImage from "./BackgroundImage";
import HeaderLabels from "./HeaderLabels";
import ImageWithGradient from "./ImageWithGradient";
import MainContainer from "./MainContainer";
import MobileViewLogo from "./MobileViewLogo";
import SocialAuth from "./SocialAuth";
import TextField from "./TextField";
import WebViewLogo from "./WebViewLogo";
import STRINGS from "../types/strings";
import { INPUT_TYPE } from "../types/enums";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!email || !password) return;

    dispatch(
      setUser({
        email,
      })
    );

    console.log(email, password);
  };

  return (
    <MainContainer>
      <BackgroundImage />

      <div className="container">
        <MobileViewLogo />

        <div className="left_container">
          <WebViewLogo />

          <div className="mt-10 px-5">
            <HeaderLabels
              labelOne={STRINGS.WELCOME_BACK}
              labelTwo={STRINGS.SIGN_IN_TO_CONTINUE}
            />

            <div className="flex flex-col mt-10 gap-7">
              <TextField
                value={email}
                onChange={(value) => setEmail(value)}
                label={STRINGS.EMAIL}
                placeholder={STRINGS.TYPE_EMAIL}
                type={INPUT_TYPE.EMAIL}
              />
              <TextField
                value={password}
                onChange={(value) => setPassword(value)}
                label={STRINGS.PASSWORD}
                placeholder={STRINGS.TYPE_PASSWORD}
                type={INPUT_TYPE.PASSWORD}
              />
            </div>

            <p className="hidden lg:inline-flex text-right mt-3 text-xs text-gray-500 font-semibold">
              {STRINGS.FORGOT_PASSWORD}
            </p>

            <div className="button_container">
              <button className="button bg-yellow-300" onClick={handleLogin}>
                {STRINGS.LOGIN}
              </button>
              <p className="lg:hidden text-right mx-auto text-xs text-gray-500 font-semibold">
                {STRINGS.FORGOT_PASSWORD}
              </p>
              <Link to={"/signup"}>
                <button className="button border border-gray-300">
                  {STRINGS.CREATE_AN_ACCOUNT}
                </button>
              </Link>
            </div>

            <div className="social_icons_container">
              <SocialAuth logo={ImageLinks.twitter} />
              <SocialAuth logo={ImageLinks.google} />
              <SocialAuth logo={ImageLinks.github} />

              <h4 className="sign_in_options_text">
                {STRINGS.OR_SIGN_IN_WITH}
              </h4>
            </div>
          </div>
        </div>

        <ImageWithGradient imageSrc={ImageLinks.loginImage} />
      </div>
    </MainContainer>
  );
};

export default Login;
