import React from "react";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const notify = () => toast("Here is your toast!");

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <Toaster />
    </div>
  );
}

toast("This is a custom toast!", {
  duration: 4000,
  position: "top-right",
  style: {
    background: "#333",
    color: "#fff",
  },
});

toast.promise(
  fetchData(), // A promise
  {
    loading: "Loading...",
    success: "Data loaded!",
    error: "Error loading data!",
  }
);

function fetchData(): Promise<unknown> | (() => Promise<unknown>) {
  throw new Error("Function not implemented.");
}

const id = toast("This is dismissible!");
toast.dismiss(id); // Dismiss the toast programmatically

toast.loading("Processing...");

<Toaster
  toastOptions={{
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
  }}
/>;

export default App;
