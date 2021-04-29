import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactsOperations,
  contactsActions,
  contactsSelectors,
} from '../../redux/contacts';
import styles from './Contact.module.css';

const Contact = ({ id }) => {
  const visibleContacts = useSelector(contactsSelectors.getFilteredContacts);
  const { name, number } = useSelector(contactsSelectors.getContact(id));
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (visibleContacts.length < 2) {
      dispatch(contactsActions.clearFilter(''));
    }
    dispatch(contactsOperations.deleteContact(id));

    return;
  };
  return (
    <li className={styles.Contact__item}>
      <p className={styles.Contact_text}>
        <span className={styles.Contact__name}>{name}</span>:
        <span className={styles.Contact__number}>{number}</span>
      </p>

      <button
        className={styles.Contact__button}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Contact;
