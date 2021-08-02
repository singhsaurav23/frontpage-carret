// import { useState } from "react";
// import styles from "./Exchange.module.css";
// import del from "./del.png";
// import edit from "./edit.png";
// import Icon from "../Holdings/Icon";

// const Exchange = (props) => {
//   // const [disabled, setDisabled] = useState(false);
//   // const [clicked, setClicked] = useState(false);

//   const obj = props.data;

//   const deleteHandler = () => {
//     // setDeleteText('(Deleted!)');
//     props.onDelete(obj.id);
//   };
//   const editHandler = async () => {
//     props.disableSetter(true);
//     props.onAdd(obj.id);
//     // const obj = exchanges.find((item) => item.id === exchangeId);
//     // console.log(obj);
//     // await fetch("api/profiles", {
//     //   method: "PUT",
//     //   body: JSON.stringify(obj),
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     // });
//   };

//   return (
//     <div className={styles.head}>
//       <div className={styles.first}>
//         <Icon data={obj.name} />
//         <p>{obj.name}</p>
//       </div>
//       <div className={styles.sec}>
//         <button onClick={editHandler} className={styles.edit}>
//           <img src={edit}></img>
//         </button>
//         <button onClick={deleteHandler}>
//           <img src={del}></img>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Exchange;

import { useState } from "react";
import styles from "./Exchange.module.css";
import del from "./del.png";
import edit from "./edit.png";
import Icon from "../Holdings/Icon";

const Exchange = (props) => {
  // const [disabled, setDisabled] = useState(false);
  // const [clicked, setClicked] = useState(false);

  const obj = props.data;

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(obj.dbid);
  };
  const editHandler = async () => {
    props.disableSetter(true);
    props.onAdd(obj.dbid);
    // const obj = exchanges.find((item) => item.id === exchangeId);
    // console.log(obj);
    // await fetch("api/profiles", {
    //   method: "PUT",
    //   body: JSON.stringify(obj),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  };

  return (
    <div className={styles.head}>
      <div className={styles.first}>
        <Icon data={obj.name} />
        <p>{obj.name}</p>
      </div>
      <div className={styles.sec}>
        <button onClick={editHandler} className={styles.edit}>
          <img src={edit}></img>
        </button>
        <button onClick={deleteHandler}>
          <img src={del}></img>
        </button>
      </div>
    </div>
  );
};

export default Exchange;