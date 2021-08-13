// import styles from "./styledSearchItem.module.scss";
// import { useSelector } from 'react-redux';

// export function SearchList () {

//     const serachItemsList = useSelector((state => state.searchItems));

//     const list = serachItemsList.map((item, index) => {

//         return  <div key={index} className={styles.item_search}> 
//                     <div className={styles.img_search}>
//                         <img src={item.img} alt="" />
//                     </div>
//                     <div className={styles.description_search_item}>
//                         <h2>{item.title}</h2>
//                         <span>{item.text}</span>
//                     </div>
//                 </div>
//     })
//     return(
//         <div>
//              {list}
//         </div>
       
//     )
// };