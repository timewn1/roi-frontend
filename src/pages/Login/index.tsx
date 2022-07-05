import { useState, useEffect } from 'react';
import Validator from 'validator';
import { Store } from 'react-notifications-component';
import Axios from 'axios';
import { withTranslation } from "react-i18next";
// import setAuthToken from '../../utils/setAuthToken';
import { useHistory } from 'react-router-dom';
import { useAllContext } from '../../contexts';

function Register({ t }: any) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, { setAuthInfo }] = useAllContext();

  useEffect(() => {
    if (state && state.isAuthenticated) {
      history.push("/dashboard");
    }
  }, [])

  const handleLogin = () => {
    if (email === "" || password === "") {
      Store.addNotification({
        title: "Warning!",
        message: "Please fill all fields",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
    }
    if (email !== "" && !Validator.isEmail(email)) {
      Store.addNotification({
        title: "Warning!",
        message: "email is not valid!",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
    }
    if (email !== "" && password !== "" && Validator.isEmail(email)) {
      Axios.post("/api/users/login", { email: email, password: password })
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("jwtToken", token);
          setAuthInfo();
          history.push("/dashboard");
        })
        .catch((err) => {
          Store.addNotification({
            title: "Warning!",
            message: err.response.data.message,
            type: "warning",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
          });
        })
    }
  }

  const handleKeyPress = (event: any) => {
    if (event.charCode === 13) {
      handleLogin()
    }
  }
  return (
    <div className='x-container2 x-auth-container'>
      <div className='x-font1'>
        {t("Login")}
      </div>
      <div className=' = "x-center x-margin' onKeyPress={handleKeyPress}  >
        <div className='x-font2 x-margin'>{t("Email")}</div>
        <div><input className="x-input1" type="email" onChange={(e) => setEmail(e.target.value)} /></div>
        <div className='x-font2 x-margin'>{t("Password")}</div>
        <div><input className="x-input1" type="password" onChange={(e) => setPassword(e.target.value)} /></div>
        <div className="x-center x-margin1">
          <button className='x-button1 x-font2' onClick={handleLogin}>{t("Login")}</button>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Register)