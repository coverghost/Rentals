import React from "react";

import "../css/transaction.css";

type DebitCardProps = {
  bankname: string;
  Accnumber: string;
  Customer: string;
  IfscCode: string;
  UpiId: string;
};

const MoneyTransferForm: React.FC<DebitCardProps> = ({
  bankname,
  Accnumber,
  Customer,
  IfscCode,
  UpiId,
}) => {
  return (
    <>
      <div className="Passbook">
        <div className="heading">
          <h3>
            Passbook Of bank ( <span className="bankdetails">{bankname}</span> )
          </h3>
        </div>
      </div>
      <div className="left-data">
        <h3>
          Cutomer Name {" : "} <span className="bankdetails">{Customer}</span>
        </h3>
        <h3>
          Acount Number{" : "} <span className="bankdetails">{Accnumber}</span>
        </h3>
      </div>
      <div className="right-data">
        <h3>
          IFCS Code{" : "} <span className="bankdetails">{IfscCode}</span>
        </h3>
        <h3>
          UPI ID{" : "} <span className="bankdetails">{UpiId}</span>
        </h3>
      </div>
    </>
  );
};

export default MoneyTransferForm;
