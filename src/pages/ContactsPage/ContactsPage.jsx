import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Error from 'components/Error';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <div className="wrap">
        <ContactForm />
        <div>
          <h2>Contacts</h2>
          <Filter />
          {isLoading ? <Loader /> : error ? <Error /> : <ContactList />}
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
