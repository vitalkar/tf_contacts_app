import React from 'react'
import { useAppContext } from '../context/AppProvider';
import Contact from './Contact';
import AddContactButton from './AddContactButton';
import styled from 'styled-components';

const List = styled.ul`
    width: 100%;
    height: auto;
    list-style-type: none;
    padding: 0 1rem;

    @media(min-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

export default function ContactList() {

    const { contacts } = useAppContext();

    return (
        <List>
            {contacts.map(contact => <Contact key={contact.id} {...contact} />)}
            <AddContactButton />
        </List>
    );
}