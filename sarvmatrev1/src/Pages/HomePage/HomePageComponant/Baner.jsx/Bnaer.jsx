import { Link } from "react-router-dom"
import banner from "./Frame 427319436.png"
const Bnaer = () => {
  return (
    <div className=" pt-32 flex justify-center items-center ">
    <Link to="about/prodley">
      <img src={banner} alt=""  />
    </Link>
    </div>
  )
}

export default Bnaer
