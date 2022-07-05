import { withTranslation } from "react-i18next";
import Contract from "../Buy/contract";
import { useAllContext } from '../../contexts';

function Register({ t }: any) {
    const [state] = useAllContext();
    return (
        <div className='x-container2 x-auth-container' >
            < div className='x-margin5' >
                <p className="x-contract-title"><span>ROI</span>&nbsp;&nbsp;{t('Contract')}</p>
                <Contract name={state.userInfo.name} idNumber={state.userInfo.idNumber} address={state.userInfo.address} email={state.userInfo.email} spousename={state.userInfo.spousename} spouseid={state.userInfo.spouseid} />
            </div>
        </div>
    );
}

export default withTranslation()(Register);