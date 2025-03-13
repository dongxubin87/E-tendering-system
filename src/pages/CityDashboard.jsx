import Searchbar from "../ui/Searchbar";
import Tenders from "../features/tenders/Tenders";
import CreateTenderForm from "../city/CreateTenderForm";

function CityDashboard() {
  return (
    <div className="mx-12 flex-grow mb-20 flex flex-col gap-6 pt-5 ">
      <Searchbar />
      <div className="flex justify-between">
        <h2 className="text-3xl">TENDERLIST</h2>
        <button className="bg--blue-100 border py-0.5 px-2 rounded-md  hover:bg-emerald-400 hover:text-blue-100 text-emerald-400">
          Create new tender
        </button>
      </div>

      <Tenders />
      <CreateTenderForm />
    </div>
  );
}

export default CityDashboard;
