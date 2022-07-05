import React from 'react';
import { withTranslation } from "react-i18next";

const Contract = ({ name, idNumber, address, email, spousename, spouseid, t }: any) => {

  return (
    <div className='x-font4'>{
      t("It is recorded by this document, the Mutual Contract that they celebrate on the one hand,")}&nbsp;
      <span className="x-font5">{name}</span>&nbsp; - &nbsp;{t("identified with Identity card DNI/RUC N°")}&nbsp; <span className="x-font5" > {idNumber}</span >&nbsp; {t("with")}&nbsp;
      {
        spouseid !== ''
          ? <>
            {t("marital status married")},&nbsp;{t("married to")}&nbsp;<span className="x-font5">{spousename}</span>&nbsp;{t("identified with Identity card DNI/RUC")}&nbsp;<span className="x-font5">{spouseid}</span>
          </>
          : <>{t("marital status single")}</>
      }
      &nbsp;{t("residing in")}&nbsp; <span className="x-font5" > {address}</span>&nbsp; {t("with email")}&nbsp;<span className="x-font5" > {email}&nbsp; </span>
      {t("hereinafter, the Creditor, and of the other, the company ROI Capital Humano SAC , with RUC No. 20606575077, with address at Calle Guido Reni No. 199 Department 201, district of San Borja, province and department of Lima, duly represented by Mrs. Ruth Carolina León Gamboa, identified with DNI No. 40933729, as recorded in the powers of attorney registered in seat A00001, of seat No. 14534739, of Registry No. IX of Legal Entities of Lima and Headquarters Callao – Lima, hereinafter referred to as ROI, in accordance with the following terms and conditions")} :
      <br />
      <b>{t("FIRST")} : {t("OF THE MUTUAL OBJECT OF THE CONTRACT")}</b>
      <br />
      {t("THE CREDITOR grants as mutual money in favor of ROI the sum of US $2,700.00 (TWO THOUSAND SEVEN HUNDRED WITH 00/100 AMERICAN DOLLARS), in a single installment, payable at the signing of this Agreement by Paypal.")}
      {t("ROI, as a closed corporation, receives the amount of money described above for the development of its social activity and recognizes the creditor as a surplus agent to whom it must repay the amount borrowed plus the interest agreed in accordance with this contract.")}
      <br />
      <b>{t("SECOND")} : {t("INTERESTS")}</b>
      <br />
      {t("The maximum amount to be paid after two (2) years from the date of purchase of the ticket, including interest, will be US$3,240.00 (THREE THOUSAND TWO HUNDRED AND FORTY WITH 00/100 AMERICAN DOLLARS). The interest is 20% on the amount borrowed.")}
      <br />
      <b>{t("THIRD")} : {t("RESPONSIBILITY FOR COMPLIANCE WITH OBLIGATIONS")}</b>
      <br />
      {t("The Parties agree that ROI is solely responsible for complying with the obligations arising from this Agreement and its Annexes. In this sense, it is established that the legal representative or proxy of the company will not be responsible for the aforementioned obligations.")}
      <br />
      <b>{t("FOURTH")} : {t("ASSIGNMENT OF RIGHTS")}</b>
      <br />
      {t("The Creditor Person expressly accepts that they may not transfer or assign the rights or obligations that correspond to them under this Mutual Agreement, unless expressly authorized by ROI. In addition, regarding the payment of the debt, this may be carried out by a Third Party on behalf of ROI.")}
      <br />
      <b>{t("FIFTH")} : {t("METHOD OF PAYMENT OF THE OBLIGATION")}</b>
      <br />
      {t("The obligation to return the credit will be accounted from the moment of the deposit by THE CREDITOR to the ROI account detailed above. The form of payment of the debt will be made by deposit or transfer to the dollar account of the Creditor Person who will be affiliated with PayPal.")}
      <br />
      <b>{t("SIXTH")} : {t("COMPENSATION")}</b>
      <br />
      {t("The parties agree that the amount detailed in the first clause may be compensated with the services provided by ROI (skills evaluation map for 5 people) as an express objective novation, which would be optional for the Creditor. Additionally, the investor has the right to carry out an evaluation to obtain the Skills map and the emotional coefficient.")}
      <br />
      <b>{t("SEVENTH")} : {t("CONFIDENTIALITY AND DATA PROTECTION")}</b>
      <br />
      {t("The parties agree to keep under terms of confidentiality all the information contained and that may arise from this Agreement. Likewise, they undertake to keep confidential any information of the Parties and/or their representatives and not to disclose it, observing at all times the fulfillment of the duty of professional secrecy.")}
      <br />
      {t("Likewise, the Parties undertake to protect and keep confidential the personal and/or sensitive data of their property and/or of any representative for the purposes of the development and execution of this contract. In this sense, the Parties declare that they will adopt the applicable security measures for the protection of information, in order to comply with the provisions of this contract.")}
      <br />
      <b>{t("EIGHTH")} : {t("TERMINATION OF THE CONTRACT")}: {t("ADVANCE PAYMENT")}</b>
      <br />
      {t("The Parties agree that ROI is authorized to make a payment prior to the date provided for in this contract, that is, before the expiration of two (2) years from the date of purchase of the ticket, for the total amount of the borrowed capital. by the creditor, so compensatory interest only up to the date of said payment. In this sense, the Creditor acknowledges that it will not claim any additional compensation amount, the contract being terminated at the time of full payment of the advance.")}
      {t("On the contrary, the Creditor undertakes to respect the payment date, being impossible to demand principal or interest before the expiration of the agreed obligation. Therefore, it will not be possible to request payment until before that date, that is, before two (2) years counted from the date of purchase of the ticket.")}
      <br />
      <b>{t("NINTH")} : {t("ADDRESSES")}</b>
      <br />
      {t("The Parties indicate as their real address the one indicated in the introduction to this contract. Likewise, the Parties establish that the communications and/or notifications linked to this contract that are made through the physical or electronic means declared by the parties will be considered validly directed for all legal purposes.")}

      <br />
      <b>{t("TENTH")} : {t("CAPACITY AND CONSENT OF THE PARTIES")}</b>
      <br />
      {t("The contracting parties state that they are in full use of their powers and in accordance with each and every one of the clauses of this contract and its Annex, without lack of consent or fraud that invalidates or hinders its fulfillment. In this sense, they confirm the legal act, declaring that there is no cause for nullity or nullity.")}
      <br />
      {t("Likewise, the parties expressly indicate the following")}:<br />
      {t("i) have read each of the clauses, ii) understand the legal scope of these clauses, iii) agree to enter into this contract in accordance with these clauses and iv) the deposit referred to in the first clause implies the express acceptance of everything provided in this contract.")}<br />
      <b>{t("ELEVENTH")} : {t("ACKNOWLEDGMENT OF OTHER DEBTS (IN CASE THE INVESTOR PURCHASES MORE THAN ONE (1) TICKET)")}</b>
      <br />
      {t("The Creditor Person expressly states that he acknowledges that ROI has other obligations in force and parallel to the one referred to in this Mutual Agreement, which are independent of each other.")}<br />
      {t("The parties sign this contract as a sign of mutual agreement on the date of purchase of the ticket.")}
    </div >
  )
}

export default withTranslation()(Contract)