import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Section from "./components/Section/Section";
import Filter from "./components/Filter/Filter";

const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};

export default App;
