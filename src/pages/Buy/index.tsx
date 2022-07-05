import { useState } from 'react';
import { withTranslation } from "react-i18next";
import Contract from "./contract";
import { useAllContext } from '../../contexts';
import Axios from 'axios';
// @ts-ignore
import spinerImg from '../../assets/spiner.gif';

function Register({ t }: any) {
  const [state] = useAllContext();
  const [loading, setLoading] = useState<boolean>();

  const handleBuyWithPaypal = () => {
    setLoading(true);
    Axios({
      method: "GET",
      url: "/api/users/buy-with-paypal",
      params: {
        user: state.user.id
      }
    }).then(res => {
      window.location.href = res.data;
    })
  }
  return (
    <div className='x-container2 x-auth-container'>
      <div className='x-center x-margin1'>
        <button className="x-button2 x-font3" onClick={handleBuyWithPaypal}>{loading ? <img src={spinerImg} alt="spiner image" width="30px" /> : t("Buy With Paypal")}</button>
      </div>
      <div className='x-margin'>
        <Contract name={state.userInfo.name} idNumber={state.userInfo.idNumber} address={state.userInfo.address} email={state.userInfo.email} spousename={state.userInfo.spousename} spouseid={state.userInfo.spouseid} />
      </div>
      <div className='x-center x-margin1'>
        <button className="x-button2 x-font3" onClick={handleBuyWithPaypal}>{loading ? <img src={spinerImg} alt="spiner image" width="30px" /> : t("Buy With Paypal")}</button>
      </div>
    </div>
  );
}

export default withTranslation()(Register);