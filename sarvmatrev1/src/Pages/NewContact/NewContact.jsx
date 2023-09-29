import Newsletter from "../HomePage/HomePageComponant/Newsletter/Newsletter";
import ContactTeam from "./Components/ContactTeam/ContactTeam";
import FAQ from "./Components/FAQ's/FAQ";
import NewContactForm from "./Components/NewContactForm/NewContactForm";
import NewContactHeader from "./Components/NewContactHeader/NewContactHeader";

const NewContact = ({ onClick }) => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row pt-[90px] gap-8 lg:gap-0">
        <NewContactHeader />
        <NewContactForm />
      </div>
      <hr />
      <div className="" />
      <ContactTeam onClick={onClick} />
      <FAQ />
      <Newsletter/>
    </div>
  );
};
export default NewContact;
