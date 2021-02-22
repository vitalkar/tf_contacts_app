import React from 'react';
import { useAppContext } from '../context/AppProvider';
import styled from 'styled-components';
import Icons from '../img/sprite-icone.png';

const ListItem = styled.li`
    display: flex;
    width: 100%;
    height: 12rem;
    padding: 1rem;
    margin: 1%;
    border-radius: 5px;
    color: #9a9c9e;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px #9a9c9e;
    transition: all 0.1s linear;
    &:hover {
        box-shadow: 0px 0px 15px #9a9c9e;
        transform: translateY(-2px);
    }
    @media(min-width: 768px) {
        flex-basis: 30%;
    }
`;

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 35%;
    height: 100%;
`;

const Avatar = styled.img`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: #9a9c9e;
`;

const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    height: 100%;
    padding-left: 0.5rem;
`;

const Text = styled.p`
    margin-bottom: 0.5rem;
    text-transform: capitalize;
`;

const ActionBar = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    /* display: flex; */

    /* height: 100%; */
    /* text-align: right; */
`;

const Edit = styled.div`
    display: inline-block;
    margin-left: 1rem;
    cursor: pointer;
    height: 20px;
    width: 20px;
    background: url(${Icons}) no-repeat 0px -70px;
`;

const Trash = styled.div`
    display: inline-block;
    margin-left: 1rem;
    cursor: pointer;
    height: 20px;
    width: 20px;
    background: url(${Icons}) no-repeat -450px 2px;
`;

export default function Contact({id, c_name, c_surname, address, position, phone}) {

    const { setShowEditForm, deleteContact, setContact2EditId, getAvatar } = useAppContext();

    const handleEdit = (e) => {
        setContact2EditId(id);
        setShowEditForm(true);
    }

    const handleDelete = (e) => {
        deleteContact(id);
    }

    return (
        <ListItem>
            <AvatarContainer>
                <Avatar src={getAvatar(`${c_name}_${c_surname}`)} />
                <Text>{position}</Text>
            </AvatarContainer>
            <Info>
                <Text>{c_name + ' ' + c_surname}</Text>
                <Text>{address}</Text>
                <Text>{phone}</Text>
                <ActionBar>
                    <Edit onClick={handleEdit}></Edit>
                    <Trash onClick={handleDelete}></Trash>
                </ActionBar> 
            </Info>           
        </ListItem>
    );
}