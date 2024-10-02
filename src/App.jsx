import { useState } from "react";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  // Додаємо новий контакт
  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // Оновлюємо значення фільтру
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Фільтруємо контакти за ім'ям
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>

      {/* Компонент форми для додавання контактів */}
      <ContactForm onSubmit={addContact} />

      {/* Поле пошуку */}
      <SearchBox filter={filter} onChange={handleFilterChange} />

      {/* Список відфільтрованих контактів */}
      <ContactList contacts={getFilteredContacts()} />
    </div>
  );
}

export default App;
