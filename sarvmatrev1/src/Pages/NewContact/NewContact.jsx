import ContactTeam from "./Components/ContactTeam/ContactTeam";
import FAQ from "./Components/FAQ's/FAQ";
import NewContactForm from "./Components/NewContactForm/NewContactForm";
import NewContactHeader from "./Components/NewContactHeader/NewContactHeader";

const NewContact = () => {
  return (
    <div className="max-w-[1440px] mx-auto mx-5">
      <div className="flex flex-col lg:flex-row pt-40">
        <div className="lg:w-[45%]">
          <NewContactHeader />
        </div>
        <div className="lg:w-[55%] mt-16 lg:mt-0">
          <NewContactForm />
        </div>
      </div>
      <ContactTeam />
      <FAQ />
    </div>
  );
};
export default NewContact;