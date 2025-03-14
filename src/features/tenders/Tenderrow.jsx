import { useState } from "react";
import { formatDate } from "../../utils/helper";
import TenderDetails from "./TenderDetails";
import DeleteConfirm from "../../ui/DeleteConfirm";
import CreateTenderForm from "./CreateTenderForm";
import { useUser } from "../authentication/useUser";

function Tenderrow({ tender, index }) {
  const { name, notice_date, close_date, disclosing_winner, status } = tender;
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [isShowUpdate, setShowTable] = useState(false);

  const { user } = useUser();

  const isCity = user?.user_metadata?.user_type === "city";
  const isCompany = user?.user_metadata?.user_type === "company";
  return (
    <div className="grid grid-cols-7 items-center mt-3  border-t p-2 ">
      <div>{index}</div>
      <div>{name}</div>
      <div>{formatDate(notice_date)}</div>
      <div>{formatDate(close_date)}</div>
      <div>{formatDate(disclosing_winner)}</div>
      <div>{status}</div>
      <div className="flex gap-2 ">
        <button
          onClick={() => setIsShowDetail(!isShowDetail)}
          className="border rounded-md hover:bg-amber-300 px-2 py-1"
        >
          Details
        </button>

        {isCompany && tender.status === "active" ? (
          <button
            onClick={() => setIsShowDetail(!isShowDetail)}
            className="border rounded-md hover:bg-amber-300 px-2 py-1"
          >
            Bidding
          </button>
        ) : (
          ""
        )}

        {!isCity ? (
          ""
        ) : (
          <button
            onClick={() => setIsShowDelete(!isShowDelete)}
            className="border rounded-md hover:bg-amber-300 px-2 py-1"
          >
            Delete
          </button>
        )}
        {!isCity ? (
          ""
        ) : (
          <button
            onClick={() => setShowTable(!isShowUpdate)}
            className="border rounded-md hover:bg-amber-300 px-2 py-1"
          >
            Update
          </button>
        )}
      </div>
      {isShowDetail ? <TenderDetails tender={tender} /> : null}
      {isShowDelete ? (
        <DeleteConfirm tender={tender} setIsShowDelete={setIsShowDelete} />
      ) : null}
      {isShowUpdate ? (
        <CreateTenderForm TenderToEdit={tender} setShowTable={setShowTable} />
      ) : null}
    </div>
  );
}

export default Tenderrow;
