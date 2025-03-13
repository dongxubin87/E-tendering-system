import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Tenderrow from "./Tenderrow";
import { useTenders } from "./useTenders";

function Tenders() {
  const { isLoading, tenders } = useTenders();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const searchTerm = searchParams.get("search") || "";

  const filteredTenders = searchTerm
    ? tenders.filter((tender) => tender.name.toLowerCase().includes(searchTerm))
    : tenders;

  return (
    <div>
      <div className="grid grid-cols-7 border-t">
        <div>ID</div>
        <div>Tender Name</div>
        <div>Date of Tender Notice</div>
        <div>Date of Tender Close</div>
        <div>Date of Disclosing Winner</div>
        <div>Tender status</div>
        <div></div>
      </div>
      {filteredTenders.map((tender, index) => (
        <Tenderrow tender={tender} index={index + 1} key={tender.id} />
      ))}
    </div>
  );
}

export default Tenders;
