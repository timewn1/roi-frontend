import { useState } from 'react';
import { withTranslation } from "react-i18next";
import { Store } from 'react-notifications-component';
import Validator from 'validator';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

function Register({ t }: any) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [address, setAddress] = useState("");
  const [spouse, setSpouse] = useState(false);
  const [spousename, setSpousename] = useState('');
  const [spouseid, setSpouseid] = useState('');

  const handleRegister = () => {
    if (name === "" || email === "" || password === "" || password1 === "" || idNumber === "" || address === "" || (spouse && (spousename === '' || spouseid === ''))) {
      Store.addNotification({
        title: "Warning!",
        message: "Please fill all fields",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      return;
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
          duration: 5000,
          onScreen: true
        }
      });
      return;
    }

    if (password.length < 6) {
      Store.addNotification({
        title: "Warning!",
        message: "Password must be at least 6 characters!",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      return;
    }

    if (password !== password1) {
      Store.addNotification({
        title: "Warning!",
        message: "password is not match!",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      return;
    }

    if (name !== "" && email !== "" && password !== "" && password1 !== "" && idNumber !== "" && address !== "" && password === password1 && Validator.isEmail(email) && password.length >= 6) {
      Axios.post("/api/users/register", { name: name, email: email, password: password, idNumber: idNumber, address: address, spousename: spousename, spouseid: spouseid })
        .then((res) => {

          if (res.status === 200) {
            Store.addNotification({
              title: "Success!",
              message: "User was registered successfully!",
              type: "success",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true
              }
            });
            history.push("/login");
          }
        })
        .catch((err) => {
          Store.addNotification({
            title: "Danger!",
            message: err.response.data.msg,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        })
    }
  }

  const handleKeyPress = (event: any) => {
    if (event.charCode === 13) {
      handleRegister()
    }
  }

  return (
    <div className='x-container2 x-auth-container' onKeyPress={handleKeyPress}  >
      <div className='x-font1'>
        {t("Register")}
      </div>
      <div className=' = "x-center x-margin'>
        <div className='x-font2 x-margin'>{t("Name")}</div>
        <div><input className="x-input1" type="text" onChange={(e) => setName(e.target.value)} /></div>
        <div className='x-font2 x-margin'>{t("Email")}</div>
        <div><input className="x-input1" type="email" onChange={(e) => setEmail(e.target.value)} /></div>
        <div className='x-font2 x-margin'>{t("Password")}</div>
        <div><input className="x-input1" type="password" onChange={(e) => setPassword(e.target.value)} /></div>
        <div className='x-font2 x-margin'>{t("Confirm Password")}</div>
        <div><input className="x-input1" type="password" onChange={(e) => setPassword1(e.target.value)} /></div>
        <div className='x-font2 x-margin'>{t("Identification Number / DNI")}</div>
        <div><input className="x-input1" type="number" onChange={(e) => setIdNumber(e.target.value)} /></div>
        <div className='x-font2 x-margin'>{t("Address")}</div>
        <div><input className="x-input1" type="text" onChange={(e) => setAddress(e.target.value)} /></div>
        <div className='x-font4 x-margin check-spouse'><input type="checkbox" onChange={() => setSpouse(!spouse)} />{t('I have a spouse')}</div>
        {
          spouse
            ? <>
              <div className='x-font2 x-margin'>{t("Name of Spouse")}</div>
              <div><input className="x-input1" type="text" onChange={(e) => setSpousename(e.target.value)} /></div>
              <div className='x-font2 x-margin'>{t("Identification Number / DNI of Spouse")}</div>
              <div><input className="x-input1" type="number" onChange={(e) => setSpouseid(e.target.value)} /></div>
            </>
            : <></>
        }
        <div className="x-center x-margin1">
          <button className='x-button1 x-font2' onClick={handleRegister}>{t("Register")}</button>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Register);