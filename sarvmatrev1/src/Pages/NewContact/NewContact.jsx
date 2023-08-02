import ContactTeam from "./Components/ContactTeam/ContactTeam";
import FAQ from "./Components/FAQ's/FAQ";
import NewContactForm from "./Components/NewContactForm/NewContactForm";
import NewContactHeader from "./Components/NewContactHeader/NewContactHeader";

const NewContact = () => {
  return (
    <div>
      <div>
        <NewContactHeader />
        <NewContactForm />
      </div>
      <div className="md:h-[1050px]" />
      <ContactTeam />
      <FAQ />
    </div>
  );
};
export default NewContact;
