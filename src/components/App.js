import styled from 'styled-components';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm';
import EditContactForm from './EditContactForm';
import { useAppContext } from '../context/AppProvider';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 1rem;
    background-color: #F3F3F4;
`;

function App() {

  const { showAddForm, showEditForm } = useAppContext();

  return (
    <Container>
      <ContactList />
      {showAddForm && <AddContactForm />}
      {showEditForm && <EditContactForm />}
    </Container>
  );
}

export default App;
