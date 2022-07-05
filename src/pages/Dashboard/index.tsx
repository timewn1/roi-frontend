import React from 'react';
import { withTranslation } from "react-i18next";
import CardPanel from '../../components/dashboard';
import { useAllContext } from '../../contexts';
// @ts-ignore
import spinerImg from '../../assets/spiner.gif';

function Dashboard({ t }: any) {
  const [state] = useAllContext();

  return (
    <>
      {state.userInfo.ticket ?
        <div className='x-container2 x-auth-container x-related'>
          <p className='x-fontweight'>{t("The cost of one ticket is $2,700.00 USD and you can buy as many as you want, repeating the same process.")}</p>
          <div className='x-related'>
            <div className='x-dashboard-title x-font2'>
              {t("My Tickets")}
            </div>
            <div className='x-dashboard-numbers'>{t("Total")}&nbsp;:&nbsp;{state.userInfo.ticket ? state.userInfo.ticket.length : 0}</div>
            {
              state.userInfo && state.userInfo.ticket.length > 0 ?
                <div className='x-dashboard-panel'>
                  {
                    state.userInfo && state.userInfo.ticket.map((ticket: any, ind: number) => (
                      <div className='x-card-patten' key={ind} >
                        <CardPanel {...{ datas: state.userInfo, ind: ind, t: t }} />
                      </div>
                    ))
                  }
                </div> :
                <div className='x-font6 x-center x-margin2'>
                  {t("There is not ticket yet")}
                </div>
            }
          </div> </div> :
        <div className='x-center x-vertical-center'>
          <img src={spinerImg} alt="spiner image" width="30px" />
        </div>
      }
    </>
  )
}

export default withTranslation()(Dashboard);