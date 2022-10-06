import { fetchEntry } from "../../helpers/apiCalls";
import { useParams } from "react-router-dom";
import Entry from "./sub/Entry";

import { useQuery } from "react-query";
import Loader from "../Loader";

const Single = () => {
  const { id } = useParams();

  const { data, status } = useQuery(id, fetchEntry.bind(null, id));

  return (
    <>
      <h2 className="text-2xl mb-5">Entry Details</h2>
      {status === "loading" ? (
        <Loader />
      ) : status === "success" ? (
        <Entry entry={data} isFullScreen={true} />
      ) : (
        <p className="text-red-500">
          There is Some Error, Please Try again Later !
        </p>
      )}
    </>
  );
};
export default Single;
