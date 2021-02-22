import React, { createContext, useState, useContext } from 'react';
import { v4 } from "uuid";

const avatarContext = require.context('../img/', true, /\.jpg$/,);

const getAvatar = (str) => {
    try {
        return avatarContext(`./${str}.jpg`).default;
    } catch (e) {
        console.log(e);
        return '';
    }
}

const APP_DATA = {
    geoUrl: 'https://maps.googleapis.com/maps/api/geocode/json',
    apiKey:'AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8',
}

const initialContacts = [
    {
        id: 0,
        c_name: 'janeth',
        c_surname: 'carton',
        address: '795 folsom ave, suite 600 san francisco, CA 94107',
        position: 'graphics designer',
        phone: '(123) 456-7890',
    },
    {
        id: 1,
        c_name: 'alex',
        c_surname: 'jonathan',
        address: '795 folsom ave, suite 600 san francisco, CA 94107',
        position: 'CEO',
        phone: '(123) 456-7890',
    },
    {
        id: 2,
        c_name: 'john',
        c_surname: 'smith',
        address: '795 folsom ave, suite 600 san francisco, CA 94107',
        position: 'graphics designer',
        phone: '(123) 456-7890',
    },
]

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ children }) {

    const [contacts, setContacts] = useState(initialContacts);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [contact2EditId, setContact2EditId] = useState(0);

    const addContact = (contact) => setContacts([...contacts, {id: v4(), ...contact}]);

    const deleteContact = (id) => setContacts(contacts.filter(contact => contact.id !== id));   

    const getContact = (id) => contacts.find(contact => contact.id === id);
    
    const saveEditedContact = (id, data) => {
        const contactIndex = contacts.findIndex(contact => contact.id === id);
        console.log(contactIndex);
        const newContacts = [...contacts].splice(contactIndex, 1, data);
        setContacts(newContacts);
    }

    return (
        <AppContext.Provider value={{ 
            APP_DATA,
            contacts,
            showAddForm, 
            showEditForm,
            setShowAddForm, 
            setShowEditForm, 
            addContact, 
            deleteContact, 
            saveEditedContact,
            contact2EditId,
            setContact2EditId,
            getContact,
            getAvatar,
        }}>
            {children}
        </AppContext.Provider>
    )
}