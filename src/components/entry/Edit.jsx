import { useEffect, useState } from "react";
import { fetchEntry, updateEntry } from "../../helpers/apiCalls";
import { useParams, useNavigate } from "react-router-dom";

import EntryForm from "./EntryForm";
import { useQuery } from "react-query";
import Loader from "../Loader";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, status } = useQuery("entry", fetchEntry.bind(null, id));

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === "success") {
      setTitle(data.title);
      setDescription(data.description);
      setQuote(data.quote?.quote);
      setAuthor(data.quote?.author);
    }
  }, [status, data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const entry = {
      title,
      updatedBy: name,
      description,
    };

    const res = await updateEntry(id, entry);
    if (res.data) {
      alert("Entry updated successfully");
      navigate("/");
    } else {
      alert("There is some error, please try again later");
    }
    setIsLoading(false);
  };

  const formSchema = {
    type: "update",
    submitText: "Update",
    quote: quote,
    author: author,
    fields: [
      {
        inputProps: {
          name: "name",
          type: "text",
          label: "Name",
          placeholder: "eg. John Doe",
          required: true,
          value: name,
          maxlength: 30,
        },
        onChange: (e) => {
          setName(e.target.value);
        },
        className: "mb-5",
      },
      {
        inputProps: {
          name: "title",
          type: "text",
          label: "Title",
          value: title,
          placeholder: "eg. My first entry",
          required: true,
          maxlength: 50,
        },
        onChange: (e) => {
          setTitle(e.target.value);
        },
        className: "mb-5",
      },
      {
        inputProps: {
          name: "description",
          type: "textarea",
          label: "Description",
          value: description,
          placeholder: "eg. This is my first entry",
          required: true,
        },
        onChange: (e) => {
          setDescription(e.target.value);
        },
      },
    ],
  };

  return (
    <>
      <h2 className="text-2xl mb-5">Edit Entry</h2>
      {status === "loading" || isLoading ? (
        <Loader />
      ) : status === "success" ? (
        <EntryForm formSchema={formSchema} onSubmit={handleSubmit} />
      ) : (
        <p className="text-red-500">
          There is Some Error, Please Try again Later !
        </p>
      )}
    </>
  );
};

export default Edit;
