import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchEntries, deleteEntry } from "../../helpers/apiCalls";
import Entry from "./sub/Entry";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

import { AnimatePresence, motion } from "framer-motion";

const All = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const { data, status } = useQuery("entries", fetchEntries);

  useEffect(() => {
    if (status === "success") {
      setEntries(data);
    }
  }, [status, data]);

  return (
    <>
      <h2 className="text-2xl mb-5">All Entries</h2>
      {status === "loading" ? (
        <Loader />
      ) : entries.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <AnimatePresence initial={false} mode="popLayout">
            {entries.map((entry) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
              >
                <Entry
                  key={entry.id}
                  entry={entry}
                  onDelete={() => {
                    deleteEntry(entry.id).then((res) => {
                      setEntries(entries.filter((e) => e.id !== entry.id));
                    });
                  }}
                  onUpdate={() => {
                    navigate("/entry/edit/" + entry.id);
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div>
          <p className="text-xl">No entries found</p>
        </div>
      )}
    </>
  );
};

export default All;
