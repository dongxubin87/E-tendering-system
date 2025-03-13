import { useState } from "react";
import { formatDate } from "../../utils/helper";
import TenderDetails from "./TenderDetails";

function Tenderrow({ tender, index }) {
  const { id, name, notice_date, close_date, disclosing_winner, status } =
    tender;
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="grid grid-cols-7 items-center mt-3  border-t p-2 ">
      <div>{index}</div>
      <div>{name}</div>
      <div>{formatDate(notice_date)}</div>
      <div>{formatDate(close_date)}</div>
      <div>{formatDate(disclosing_winner)}</div>
      <div>{status}</div>
      <div>
        <button
          onClick={() => setIsShow(!isShow)}
          className="border rounded-md hover:bg-amber-300 px-2 py-1"
        >
          Details
        </button>
      </div>
      {isShow ? <TenderDetails tender={tender} /> : null}
    </div>
  );
}

export default Tenderrow;
