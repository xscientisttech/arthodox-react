import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import './otp.css'

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// import { toast, Toaster } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";

const Otp = ({ setIsVerified, ph, setPh }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    try {
      const appVerifier = window.recaptchaVerifier;
      const formatPh = "+" + ph;

      signInWithPhoneNumber(auth, formatPh, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setLoading(false);
          setShowOTP(true);
          // toast.success("OTP sent successfully!");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          // toast.error("Server Error\n Please Try again Later");
        });
    } catch (error) {
      console.log('try error verify : ',error);
    }

  }

  function onOTPVerify() {
    setLoading(true);
    try {
      window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
          setUser(res.user);
          localStorage.setItem("UID", res.uid);
          console.log('otp res : ', res);
          setLoading(false);
          // toast.success("OTP Verified !");
          // navigate("/");
          setIsVerified(true);

        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          // toast.error("Server Error\n Please Try again Later");
        });
    } catch (error) {
      console.log("try Error : ", error);
    }
  }

  return (
    <section className=" border-2 border-black rounded-xl p-2">
      {/* <ToastContainer /> */}
      {/* <Toaster toastOptions={{ duration: 4000 }} /> */}
      <div>
        <div id="recaptcha-container" ></div>
        {user ? (

          <h2 className="text-center text-black font-medium text-2xl">
            Number Verified 👍
          </h2>
        ) : (
          <div className=" flex flex-grow flex-col gap-4 rounded-lg ">
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-black text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container border-none "
                  required
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-black rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 flex-grow" >
                <p className=" h-11 w-full sm:w-[60%] flex flex-grow" ><PhoneInput country={"in"} value={ph} onChange={setPh} /></p>
                <button
                  onClick={onSignup} type="button"
                  className="bg-emerald-600 w-full sm:max-w-[6rem] flex gap-1 items-center justify-center p-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 invert animate-spin" />
                  )}
                  <span>Verify</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Otp;
