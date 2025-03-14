import { useForm } from "react-hook-form";
import { useCreateTender } from "./useCreateTender";
import { useEditTender } from "./useEditTender";
import FormRow from "../../ui/FormRow";

function CreateTenderForm({ TenderToEdit = {}, setShowTable }) {
  const { isCreating, createTender } = useCreateTender();
  const { isEditing, editTender } = useEditTender();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = TenderToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession)
      editTender(
        { newTenderData: { ...data }, id: editId },
        {
          onSuccess: () => {
            reset();
            setShowTable(false);
          },
        }
      );
    else
      createTender(
        { ...data },
        {
          onSuccess: () => {
            reset();
            setShowTable(false);
          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-2 text-xl  bg-neutral-100 p-6 rounded-xl w-4xl mx-auto fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <FormRow label="Tender name: " error={errors?.name?.message}>
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="estimated_price: "
        error={errors?.estimated_price?.message}
      >
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="number"
          id="estimated_price"
          disabled={isWorking}
          {...register("estimated_price", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="staff_name: " error={errors?.staff_name?.message}>
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="text"
          id="staff_name"
          disabled={isWorking}
          {...register("staff_name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="email: " error={errors?.email?.message}>
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="email"
          id="email"
          disabled={isWorking}
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="category: " error={errors?.category?.message}>
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="text"
          id="category"
          disabled={isWorking}
          {...register("category", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="status: " error={errors?.status?.message}>
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="text"
          id="status"
          disabled={isWorking}
          {...register("status", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="description: " error={errors?.description?.message}>
        <textarea
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="text"
          id="description"
          disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="Date of Tender Notice: "
        error={errors?.notice_date?.message}
      >
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="datetime-local"
          id="notice_date"
          disabled={isWorking}
          {...register("notice_date", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="Date of Tender Close: "
        error={errors?.notice_date?.message}
      >
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="datetime-local"
          id="close_date"
          disabled={isWorking}
          {...register("close_date", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="Date of Disclosing Winner: "
        error={errors?.disclosing_winner?.message}
      >
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="datetime-local"
          id="disclosing_winner"
          disabled={isWorking}
          {...register("disclosing_winner", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="construction_from: "
        error={errors?.construction_from?.message}
      >
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="datetime-local"
          id="construction_from"
          disabled={isWorking}
          {...register("construction_from", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="construction_to: "
        error={errors?.construction_to?.message}
      >
        <input
          className=" bg-blue-200 rounded-lg w-64 py-0.5 px-2"
          type="datetime-local"
          id="construction_to"
          disabled={isWorking}
          {...register("construction_to", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <div className="flex justify-around mt-4">
        <button
          onClick={() => {
            setShowTable(false);
          }}
          className="bg--blue-100 border py-0.5 px-2 rounded-md  hover:bg-emerald-400 hover:text-blue-100 text-emerald-400"
        >
          Cancel
        </button>
        <button
          disabled={isWorking}
          className="bg--blue-100 border py-0.5 px-2 rounded-md  hover:bg-emerald-400 hover:text-blue-100 text-emerald-400"
        >
          {isEditSession ? "Edit tender" : "Create new tender"}
        </button>
      </div>
    </form>
  );
}

export default CreateTenderForm;
