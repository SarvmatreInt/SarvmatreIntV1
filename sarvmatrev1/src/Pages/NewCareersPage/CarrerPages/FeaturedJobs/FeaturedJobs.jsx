import { useJobContext } from "../../../../Context/CarrerPage/CareerPageContext";
import axios from "axios";
import JdPage from "../JdPage/JdPage";
const API = "http://localhost:5000/api/jobs";
const getJobs = async (url)=>{
    const res = await axios.get(url);
      const jobs = await res.data;
    // console.log(jobs)
}
getJobs(API);
const FeaturedJobs = () => {
    const { isLoading, featuredJobs } = useJobContext();
    console.log(featuredJobs);
    if (isLoading) {
    return <div> ......Loading </div>;
  }
//   const {id, jobName,location, duration, featured,createdAt } = jobs;
  return (
    <div>
      {
        featuredJobs.map((curElem)=>{
            return <JdPage key={curElem.id}{...curElem}/>
        })
      }
   
    </div>
  )
}

export default FeaturedJobs
