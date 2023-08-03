import ContactTeam from "./Components/ContactTeam/ContactTeam";
import FAQ from "./Components/FAQ's/FAQ";
import NewContactForm from "./Components/NewContactForm/NewContactForm";
import NewContactHeader from "./Components/NewContactHeader/NewContactHeader";

const NewContact = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row ">
        <NewContactHeader />
        <NewContactForm />
      </div>
      <div className="" />
      <ContactTeam />
      <FAQ />
    </div>
  );
};
export default NewContact;
