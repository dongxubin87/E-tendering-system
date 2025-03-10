import { formatCurrency, formatDate } from "../../utils/helper";

function TenderDetails({ tender }) {
  const {
    id,
    name,
    email,
    description,
    notice_date,
    close_date,
    staff_name,
    disclosing_winner,
    construction_from,
    construction_to,
    estimated_price,
    status,
  } = tender;
  return (
    <div className="fixed p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[600px] opacity-90 h-2xl border rounded-lg  z-50 space-y-2">
      <h2 className="text-2xl text-center">Detailed Tender Info</h2>
      <p>
        <span className="font-bold">Tender ID:</span> {id}{" "}
      </p>
      <p>
        <span className="font-bold">Tender Name: </span>
        {name}
      </p>
      <p>
        <span className="font-bold">Date of Tender Notice: </span>
        {formatDate(notice_date)}{" "}
      </p>
      <p>
        <span className="font-bold">Staff Name: </span>
        {staff_name}{" "}
      </p>
      <p>
        <span className="font-bold">Email Address:</span>
        {email}{" "}
      </p>
      <p>
        <span className="font-bold">Estimated tender price: </span>
        {formatCurrency(estimated_price)}
      </p>
      <p>
        <span className="font-bold">Tedner Description: </span>
        {description}
      </p>
      <p>
        <span className="font-bold">Date of Tender Close: </span>
        {formatDate(close_date)}
      </p>
      <p>
        <span className="font-bold">Date of Disclosing Winner:</span>
        {formatDate(disclosing_winner)}{" "}
      </p>
      <p>
        <span className="font-bold">Term of Construction:</span>
        {formatDate(construction_from)} to {formatDate(construction_to)}
      </p>
    </div>
  );
}

export default TenderDetails;
