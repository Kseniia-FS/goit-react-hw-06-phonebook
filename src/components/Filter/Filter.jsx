import React from "react";

import { Label, Input } from "./Filter.styled";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";

export default function Filter() {
  const value = useSelector(({ contacts }) => contacts.filter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(changeFilter(e.currentTarget.value));
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
}
