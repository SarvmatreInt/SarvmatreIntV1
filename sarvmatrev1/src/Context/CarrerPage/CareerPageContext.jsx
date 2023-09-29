import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../../reducer/jobsReducer";
const AppContext = createContext();
// api
const API = "http://localhost:5000/api/jobs";

const initialState = {
  isLoading: false,
  isError: false,
  jobs: [],
  featuredJobs: [],
};

// fetching the data
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getJobs = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const jobs = await res.data;
      dispatch({ type: "SET_API_DATA", payload: jobs });
      console.log(jobs)
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }

  };
  // fetching the data, using array to fetch array based on array size
  useEffect(() => {
    getJobs(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hook
const useJobContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useJobContext };
