import Searchbar from "../ui/Searchbar";
import Tenders from "../features/tenders/Tenders";

function Dashboard() {
  return (
    <div className="mx-12 flex-grow mb-20 flex flex-col gap-6 ">
      <Searchbar />
      <h2>TENDERLIST</h2>
      <Tenders />
    </div>
  );
}

export default Dashboard;
