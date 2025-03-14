import { useDeleteTender } from "../features/tenders/useDeleteTender";

function DeleteConfirm({ tender, setIsShowDelete }) {
  const { isDeleting, deleteTender } = useDeleteTender();
  return (
    <div className=" flex flex-col items-center justify-between fixed p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[600px] opacity-90 h-60 border rounded-lg  z-50 space-y-2">
      <h2 className="text-2xl text-red-600 mt-10">
        Do you want to delete this tender?
      </h2>
      <div className="flex gap-40 mb-10">
        <button
          onClick={() => setIsShowDelete(false)}
          className="bg--blue-100 border py-0.5 px-2 rounded-md  hover:bg-emerald-400 hover:text-blue-100 text-emerald-400"
        >
          Cancel
        </button>
        <button
          onClick={() => deleteTender(tender.id)}
          className="bg--blue-100 border py-0.5 px-2 rounded-md  hover:bg-emerald-400 hover:text-blue-100 text-emerald-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirm;
