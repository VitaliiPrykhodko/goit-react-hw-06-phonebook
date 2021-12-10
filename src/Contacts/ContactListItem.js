import PropTypes from "prop-types";
import styles from "./ContactsList.module.css"
import { useDispatch } from "react-redux";
import  action from "../Redux/Counter/counter-action";

const ContactListItem = ({ contacts }) => {
  const dispatch = useDispatch()
    return contacts.map(({key,name,number}) => {
       return (
    <li key={key} className={styles.contact_item}>
      <span>{name}</span>: <span>{number}</span>
      <button className={styles.contact_btn} onClick={()=> dispatch(action.deleteContact(key))}>
        Delete
      </button>
    </li>
  );
   })
  
};

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
}


export { ContactListItem };
