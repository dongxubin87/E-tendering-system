import Searchbar from "../ui/Searchbar";
import Tenders from "../features/tenders/Tenders";

import { useState } from "react";
import CreateTenderForm from "../features/tenders/CreateTenderForm";
import { useUser } from "../features/authentication/useUser";

function Dashboard() {
  const { user } = useUser();
  const [isShowTable, setShowTable] = useState(false);
  return (
    <div className="mx-12 flex-grow mb-20 flex flex-col gap-6 pt-5 ">
      <Searchbar />
      <div className="flex justify-between">
        <h2 className="text-3xl">TENDERLIST</h2>
        {user?.user_metadata?.user_type === "city" ? (
          <button
            className="bg-blue-100 border py-0.5 px-2 rounded-md  hover:bg-emerald-400 hover:text-blue-100 text-emerald-400"
            onClick={() => setShowTable((isShowTable) => !isShowTable)}
          >
            Create new tender
          </button>
        ) : (
          ""
        )}
      </div>

      <Tenders />
      {isShowTable ? <CreateTenderForm setShowTable={setShowTable} /> : null}
    </div>
  );
}

export default Dashboard;
