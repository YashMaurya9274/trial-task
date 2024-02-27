import { Link } from "react-router-dom";
import ImageLinks from "../assets/images";
import BackgroundImage from "./BackgroundImage";
import HeaderLabels from "./HeaderLabels";
import ImageWithGradient from "./ImageWithGradient";
import LabelledCheckbox from "./LabelledCheckbox";
import MainContainer from "./MainContainer";
import MobileViewLogo from "./MobileViewLogo";
import SocialAuth from "./SocialAuth";
import TextField from "./TextField";
import WebViewLogo from "./WebViewLogo";
import STRINGS from "../types/strings";
import { INPUT_TYPE } from "../types/enums";

const SignUp = () => {
  return (
    <MainContainer>
      <BackgroundImage />

      <div className="container">
        <MobileViewLogo />

        <div className="left_container mt-[80px] lg:mt-0">
          <WebViewLogo />

          <div className="mt-7 px-5">
            <HeaderLabels
              labelOne={STRINGS.CREATE_AN_ACCOUNT}
              labelTwo={STRINGS.SIGN_UP_TO_CONTINUE}
            />

            <div className="flex flex-col mt-8 gap-5">
              <TextField
                label={STRINGS.NAME}
                placeholder={STRINGS.TYPE_NAME}
                type={INPUT_TYPE.TEXT}
              />
              <TextField
                label={STRINGS.EMAIL}
                placeholder={STRINGS.TYPE_EMAIL}
                type={INPUT_TYPE.EMAIL}
              />
              <TextField
                label={STRINGS.PASSWORD}
                placeholder={STRINGS.TYPE_PASSWORD}
                type={INPUT_TYPE.PASSWORD}
              />
            </div>

            <div className="hidden lg:inline-flex flex-col mt-5 gap-1">
              <LabelledCheckbox label={STRINGS.THIS_IS_A_BUSINESS_ACCOUNT} />
              <LabelledCheckbox
                label={STRINGS.I_AGREE_TERMS_CONDITIONS}
                checked
              />
            </div>

            <div className="button_container">
              <button className="button bg-yellow-300">
                {STRINGS.CREATE_AN_ACCOUNT}
              </button>
            </div>

            <Link to={"/"}>
              <p className="lg:hidden mt-4 text-xs text-center cursor-pointer hover:opacity-75 text-gray-500 font-semibold">
                {STRINGS.ALREADY_HAVE_ACCOUNT}
              </p>
            </Link>

            <div className="social_icons_container mt-5">
              <SocialAuth logo={ImageLinks.twitter} />
              <SocialAuth logo={ImageLinks.google} />
              <SocialAuth logo={ImageLinks.github} />

              <h4 className="sign_in_options_text">
                {STRINGS.OR_SIGN_IN_WITH}
              </h4>
            </div>
          </div>
        </div>

        <ImageWithGradient imageSrc={ImageLinks.signupImage} />
      </div>
    </MainContainer>
  );
};

export default SignUp;
