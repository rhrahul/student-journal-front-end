import InputField from "./sub/InputField";

const EntryForm = ({ formSchema, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {formSchema.fields.map((inputProps, index) => {
        if (inputProps.type !== "hidden") {
          return <InputField key={index} {...inputProps} />;
        }
        return null;
      })}
      <h5 className="mt-8 mb-4">Quote for you</h5>
      {formSchema.quote !== "" ? (
        <div className="">
          <h5 className="font-bold text-xl mb-2">"{formSchema.quote}"</h5>
          <h6 class="text-sm">- by {formSchema.author}</h6>
        </div>
      ) : (
        <h5>Loading...</h5>
      )}

      <input type="hidden" value={formSchema.quote} />
      <input type="hidden" value={formSchema.author} />

      <button
        className="
          w-full mt-7 shadow-sm text-slate-50 dark:text-slate-900 bg-gradient-to-b from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-800  p-3 rounded-md font-bold
        "
        type="submit"
      >
        {formSchema.submitText}
      </button>
    </form>
  );
};
export default EntryForm;
