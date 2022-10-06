import Icon from "../../Icon";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Entry = (props) => {
  const { entry, onDelete, onUpdate, isFullScreen } = props;
  return (
    <div className="p-4 border dark:border-slate-800 border-slate-200 rounded-lg">
      <div className="mb-3 text-slate-900 dark:text-slate-50">
        <div className="flex items-center justify-between mb-2">
          <h3
            className={`text-xl mr-4 font-bold ${
              !isFullScreen && "line-clamp-1"
            }`}
          >
            {entry.title}
          </h3>
          {!isFullScreen && (
            <div className="flex items-center">
              <button
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 dark:from-blue-600 dark:to-blue-800 rounded-md mr-2"
                onClick={onUpdate}
              >
                <Icon
                  name="rr-edit"
                  className=" text-blue-600 dark:text-blue-300 mt-1 text-xl"
                />
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-red-100 to-red-200 dark:from-red-600 dark:to-red-800 rounded-md"
                onClick={onDelete}
              >
                <Icon
                  name="rr-trash"
                  className="text-red-600 dark:text-red-300 mt-1 text-xl"
                />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <h4 className="text-sm dark:text-slate-500 text-slate-400">
            By {entry.createdBy}
          </h4>
          <div className="flex items-center">
            <Icon
              name="sr-calendar"
              className="ml-5 mr-2 mt-1 dark:text-slate-500 text-slate-400"
            />
            <h4 className="text-sm dark:text-slate-500 text-slate-400 ">
              <Moment format="DD MMM hh:mm A">{entry.created_at}</Moment>
            </h4>
          </div>
        </div>
      </div>
      <div>
        <p className={!isFullScreen && `line-clamp-1`}>{entry.description}</p>
        <figure class="mt-3 border-l-8 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 rounded-md p-3">
          <blockquote>
            <p
              class={`text-xl italic font-medium text-slate-900 dark:text-slate-50 ${
                !isFullScreen && `line-clamp-1`
              }`}
            >
              {entry.quote.quote}
            </p>
          </blockquote>
          <figcaption class="flex items-center mt-2">
            <div class="flex items-center divide-x-2 divide-slate-500 dark:divide-slate-700">
              <cite class="pr-3 font-medium text-gray-900 dark:text-white">
                - {entry.quote.author}
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="mt-4 dark:text-slate-500 text-slate-400 text-xs flex items-center justify-between">
        <span className="text-xs ">
          last updated by {entry.updatedBy} on{" "}
          <Moment format="DD MMM hh:mm A">{entry.updated_at}</Moment>
        </span>
        {!isFullScreen && (
          <Link
            to={`/entry/${entry.id}`}
            className="block text-slate-50 dark:text-slate-900 bg-gradient-to-b from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-800  p-2 px-4 rounded-md font-bold"
          >
            More Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default Entry;
