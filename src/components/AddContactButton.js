import React from 'react';
import { useAppContext } from '../context/AppProvider';
import styled from 'styled-components';
import Icons from '../img/sprite-icone.png';

const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(min-width: 768px) {
        height: 12rem;
        width: 30%;
        margin: 1%;
    }
`;

const Button = styled.div`
    height: 30px;
    width: 30px;
    border: 2px solid #9a9c9e;
    border-radius: 50%;
    background: url(${Icons}) no-repeat 6px -90px;
    cursor: pointer;
    &:hover {
        border-color: green; 
    }
`;

export default function AddContactButton() {

    const { setShowAddForm } = useAppContext();

    const handleClick = () => {
        setShowAddForm(true);
    }

    return (
        <Container>
            <Button onClick={handleClick} />          
        </Container>
    );
}