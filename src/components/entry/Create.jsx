import { useEffect, useState } from "react";
import { createEntry, getNewQuote } from "../../helpers/apiCalls";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

import EntryForm from "./EntryForm";

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNewQuote().then((res) => {
      if (res?.data?.[0]) {
        setQuote(res?.data?.[0].q);
        setAuthor(res?.data?.[0].a);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();

    const entry = {
      title,
      createdBy: name,
      description,
      quote,
      author,
    };

    const res = await createEntry(entry);
    if (res.data) {
      alert("Entry created successfully");
      navigate("/");
    } else {
      alert("There is some error, please try again later");
    }
    setIsLoading(false);
  };

  const formSchema = {
    type: "update",
    submitText: "Create",
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
          maxlength: 50,
          placeholder: "eg. My first entry",
          required: true,
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
      <h2 className="text-2xl mb-5">Create New Entry</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <EntryForm formSchema={formSchema} onSubmit={handleSubmit} />
      )}
    </>
  );
};

export default Create;
