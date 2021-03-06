import React from "react";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions";
import { ReactComponent as BinIcon } from "../../icons/bin.svg";
import Button from "../../_share/Button/Button";
import { ContactList, Item, Title } from "./Contacts.styled";

export function Contacts() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContacts = (id) => dispatch(deleteContact(id));

  return (
    <ContactList>
      <Title>Contacts</Title>
      {contacts.map(({ name, id, number }) => (
        <Item key={id} id={id}>
          {name}: {number}
          <Button
            type="button"
            ariaLabel="Delete contact"
            onDeleteContacts={() => onDeleteContacts(id)}
          >
            <BinIcon width="30" height="30" fill="red" />
          </Button>
        </Item>
      ))}
    </ContactList>
  );
}
