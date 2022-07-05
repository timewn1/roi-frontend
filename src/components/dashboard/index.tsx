import React from 'react';
import { withTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';
// @ts-ignore
import card from '../../assets/11.png';
function CardPanel(props: any) {
    const history = useHistory();

    return (
        <div className='x-card-panel'>
            <img className='x-card-image' src={card} alt="card-img" />
            <div className='x-card-title x-font3'>{props.t("Date")}&nbsp;:&nbsp;{props.datas.ticket[props.ind].slice(0, 10)}</div>
            <div className="x-card-hash"><a href={'https://bscscan.com/tx/' + props.datas.hash[props.ind]} target='blank' style={{ textDecoration: 'underline' }}>{props.datas.hash[props.ind]}</a></div>
            <p className="x-content-view"><a onClick={() => history.push("/content")}>{props.t('View Contract Content')}</a></p>
        </div>
    )
}

export default withTranslation()(CardPanel);