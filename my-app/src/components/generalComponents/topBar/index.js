import { useState } from "react";
import { useDispatch } from 'react-redux';
import styles from  './styledBar.module.scss';
// import { SearchList } from './searchList';
 
export function TopBar (props) { 
  const [searchValue, setSerachValue] = useState("");
  // const dispatch = useDispatch();

  const onChangeHandlerSearch = (event) => {
    setSerachValue(event.target.value) 
  };

  // dispatch(searchItemsAction(searchValue))

  return (
    <div className={styles.wrapper_topBar}>
        <div className={styles.logo}>
            <img className={styles.logo_company} src={props.logo} alt="" />
        </div>
        <div className={styles.input_topBar}>
            <input onChange={onChangeHandlerSearch} type="text" placeholder = "Search..." value = {searchValue} />
            {/* <div className={`${styles.search_list} ${searchValue ? styles["show_search_list"]:styles[""]}`}  >
              <SearchList />
            </div> */}
        </div>
        <div className={styles.cart_burger_topBar}>
            <img className={styles.cart_topBar} src={props.cart} alt="" />
            <img className={styles.burger_topBar} src={props.burger} alt="" />
        </div>
    </div>  
  ) 
};

