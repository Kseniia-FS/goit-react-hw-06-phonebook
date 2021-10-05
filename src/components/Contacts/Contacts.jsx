import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions";

import { ReactComponent as BinIcon } from "../../icons/bin.svg";

import Button from "../../_share/Button/Button";
import { ContactList, Item, Title } from "./Contacts.styled";

function Contacts({ contacts, onDeleteContacts }) {
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

Contacts.propTypes = {
  contacts: PropTypes.array,
};

const getFilteredContacts = (contacts, filter) => {
  const normalizedContacts = filter.toLowerCase();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedContacts)
  );
  return filteredContacts;
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContacts: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
