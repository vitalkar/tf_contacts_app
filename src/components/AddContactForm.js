import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppProvider';
import { isPhoneValid } from '../utils/utils';


const Container = styled.div`
    position: absolute;
    top: 5%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 50%;
    background: #ffffff;
    border: 1px solid #9a9c9e; 
    border-radius: 5px;
`;

const AddForm = styled.form`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextInput = styled.input`
    width: 75%;
    height: 3rem;
    padding-left: 1rem;
    margin-top: 2rem;
    outline: none; 
    border: 1px solid #9a9c9e;
    border-radius: 5px;
`;

const NumberInput = styled.input`
    width: 75%;
    height: 3rem;
    padding-left: 1rem;
    margin-top: 2rem;
    outline: none; 
    border: 1px solid #9a9c9e;
    border-radius: 5px;
`;

const SaveButton = styled.button`
    width: 75%;
    height: 3rem;
    margin-top: 2rem;
    background-color: #9a9c9e;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
`; 

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 3;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 2rem;
    color: #9a9c9e;
`;

export default function AddContactForm() {

    const { APP_DATA, addContact, setShowAddForm } = useAppContext();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleSurname = (e) => {
        setSurname(e.target.value);
    }
    
    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handlePhone = (e) => {
        if (isPhoneValid(e.target.value)) {
            setPhone(e.target.value);
        }
    }

    const handlePosition = (e) => {
        setPosition(e.target.value);
    }

    const handleClose = () => {
        setShowAddForm(false);
    }

    const handleResetForm = () => {
        setName('');
        setSurname('');
        setAddress('');
        setPhone('');
        setPosition('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${APP_DATA.geoUrl}?address=${address}&key=${APP_DATA.apiKey}`);
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            addContact({
                c_name: name,
                c_surname: surname,
                address,
                phone,
                position,
            });
            handleResetForm();
            setShowAddForm(false);
        }
    }

    return (
        <Container>
            <CloseButton onClick={handleClose}>X</CloseButton>
            <h1>Add Contact</h1>
            <AddForm onSubmit={handleSubmit}>
                <TextInput type="text" placeholder="Name" value={name} onChange={handleName} />
                <TextInput type="text" placeholder="Surame" value={surname} onChange={handleSurname} />
                <TextInput type="text" placeholder="Address" value={address} onChange={handleAddress} />
                <NumberInput type="text" placeholder="Phone" value={phone} onChange={handlePhone} />
                <TextInput type="text" placeholder="Position" value={position} onChange={handlePosition} />
                <SaveButton type="submit">Save</SaveButton>
            </AddForm>
        </Container>
    );
}