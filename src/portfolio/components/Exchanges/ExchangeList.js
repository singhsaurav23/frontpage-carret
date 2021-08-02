// import { Fragment, useState } from "react";
// import Card from "../UI/Card";
// import Modal from "../UI/Modal";
// import styles from "./ExchangeList.module.css";
// import Button from "../UI/Button";
// import del from "./del.png";
// import edit from "./edit.png";
// import Icon from "../Holdings/Icon";
// import Exchange from "./Exchange";

// const ExchangeList = (props) => {
//   const [exchanges, setExchanges] = useState([]);
//   const [clicked, setClicked] = useState(false);
//   const [valid, setValid] = useState(true);
//   const [disableOption, setDisableOption] = useState(false);
//   const [fixedId, setId] = useState("");

//   const enterHandler = (objId) => {
//     setId(objId);
//     setClicked(true);
//   };

//   const newEnterHandler = () => {
//     setClicked(true);
//   };
//   const onTapHandler = () => {
//     setClicked(false);
//   };
//   const updateEx = async () => {
//     //api/profiles
//     const obj = exchanges.find((item) => item.id === fixedId);
//     console.log(obj);
//     await fetch("api/profiles", {
//       method: "POST",
//       body: JSON.stringify(obj),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   };

//   const addHandler = async (ename, eApiKey, eApiSecret, subName) => {
//     if (disableOption === true) {
//       const obj = exchanges.find((item) => item.id === fixedId);
//       obj.apiKey = eApiKey;
//       obj.apiSecret = eApiSecret;
//       obj.sub = subName;
//       console.log(obj);
//       await fetch("api/profiles/", {
//         method: "PUT",
//         body: JSON.stringify(obj),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setExchanges(
//         exchanges.map((item) =>
//           item.id === fixedId
//             ? {
//                 ...item,
//                 apiKey: eApiKey,
//                 apiSecret: eApiSecret,
//                 sub: subName,
//               }
//             : item
//         )
//       );

//       setDisableOption(false);
//       setClicked(false);
//       return;
//       //api/profiles
//       // await fetch("api/profiles", {
//       //   method: "PUT",
//       //   body: JSON.stringify(obj),
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       // });
//     }
//     setExchanges((prev) => {
//       const updated = [...prev];
//       if (valid) {
//         updated.unshift({
//           apiKey: eApiKey,
//           apiSecret: eApiSecret,
//           name: ename,
//           sub: subName,
//           id: Math.random().toString(),
//         });
//       }
//       return updated;
//     });
//     setClicked(false);
//     // var token;
//     // await fetch("api/auth/token")
//     //   .then((response) => response.json())
//     //   .then((json) => {
//     //     console.log(json);
//     //     token = json["token"];
//     //   });
//     const tokens = props.tokenValue;
//     const obj = {
//       apiKey: eApiKey,
//       apiSecret: eApiSecret,
//       exchangeName: ename,
//     };
//     console.log(tokens);
//     const toke = "Bearer ";
//     const tokenId = toke.concat(tokens.token);
//     const res = await fetch("api/profiles", {
//       method: "POST",
//       body: JSON.stringify(obj),
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": tokenId,
//       },
//     });
//     const dat = await res.json();
//     if (dat["id"] !== null) {
//       setValid(true);
//     } else {
//       setValid(false);
//     }
//   };

//   const deleteHandler = async (exchangeId) => {
//     const obj = exchanges.find((item) => item.id === exchangeId);
//     console.log(obj);
//     await fetch("api/delete/<id>", {
//       method: "PUT",
//       body: JSON.stringify(obj),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     setExchanges((prev) => {
//       const updated = prev.filter((exchange) => exchange.id !== exchangeId);
//       return updated;
//     });
//   };

//   // const editHandler = (exchangeId) => {
//   //   deleteHandler(exchangeId);
//   //   addHandler()
//   // }
//   return (
//     <Card className={styles.cardBox}>
//       <Fragment>
//         <h2>Exchanges</h2>
//         <ul>
//           <li className={styles.firstli}>
//             <div className={styles.firstDiv}>Exchange</div>
//             <div className={styles.secDiv}>
//               <div>Edit</div>
//               <div>Delete</div>
//             </div>
//           </li>
//           {exchanges.map((one) => (
//             <li key={one.id}>
//               <Exchange
//                 data={one}
//                 onAdd={enterHandler}
//                 onDelete={deleteHandler}
//                 disableSetter={setDisableOption}
//               />
//             </li>
//           ))}
//         </ul>
//         {clicked && (
//           <Modal
//             onAddExchange={addHandler}
//             onTap={onTapHandler}
//             isDisabled={disableOption}
//           />
//         )}
//         <Button onClick={newEnterHandler} className={styles.subButton}>
//           Add Exchange
//         </Button>
//       </Fragment>
//     </Card>
//   );
// };

// export default ExchangeList;

import { Fragment, useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./ExchangeList.module.css";
import Button from "../UI/Button";
import del from "./del.png";
import edit from "./edit.png";
import Icon from "../Holdings/Icon";
import Exchange from "./Exchange";

const ExchangeList = (props) => {
  const [exchanges, setExchanges] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [valid, setValid] = useState(true);
  const [disableOption, setDisableOption] = useState(false);
  const [fixedId, setId] = useState("");
  // const [dbId, setDbId] = useState("");

  const enterHandler = (objId) => {
    setId(objId);
    setClicked(true);
  };

  const newEnterHandler = () => {
    setClicked(true);
  };
  const onTapHandler = () => {
    setClicked(false);
  };
  const updateEx = async () => {
    //api/profiles
    const obj = exchanges.find((item) => item.id === fixedId);
    console.log(obj);
    await fetch("https://carret-website.herokuapp.com/api/profiles", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const addHandler = async (ename, eApiKey, eApiSecret, subName) => {
    if (disableOption === true) {
      const obj = exchanges.find((item) => item.dbid === fixedId);
      obj.apiKey = eApiKey;
      obj.apiSecret = eApiSecret;
      obj.sub = subName;
      console.log(obj);
      const tokens = props.tokenValue;
    // console.log(tokens.token);
    const toke = "Bearer ";
    const tokenId = toke.concat(tokens.token);
      await fetch(`https://carret-website.herokuapp.com/api/profiles/${fixedId}`, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
          "Authorization": tokenId
        },
      });
      setExchanges(
        exchanges.map((item) =>
          item.id === fixedId
            ? {
                ...item,
                apiKey: eApiKey,
                apiSecret: eApiSecret,
                sub: subName,
              }
            : item
        )
      );

      setDisableOption(false);
      setClicked(false);
      return;
      //api/profiles
      // await fetch("api/profiles", {
      //   method: "PUT",
      //   body: JSON.stringify(obj),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
    }
    
    // var token;
    // await fetch("api/auth/token")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     token = json["token"];
    //   });
    const tokens = props.tokenValue;
    const obj = {
      apiKey: eApiKey,
      apiSecret: eApiSecret,
      exchangeName: ename,
    };
    // console.log(tokens.token);
    const toke = "Bearer ";
    const tokenId = toke.concat(tokens.token);
    const res = await fetch("https://carret-website.herokuapp.com/api/profiles", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        "Authorization": tokenId,
      },
    });
    const dat = await res.json();
    var dbId = "";
    if (dat["id"] !== null) {
      dbId = dat["id"]
      setValid(true);
    } else {
      setValid(false);
    }

    setExchanges((prev) => {
      const updated = [...prev];
      if (valid) {
        updated.unshift({
          apiKey: eApiKey,
          apiSecret: eApiSecret,
          name: ename,
          sub: subName,
          id: Math.random().toString(),
          dbid: dbId, 
        });
      }
      return updated;
    });
    setClicked(false);
  };

  const deleteHandler = async (exchangeId) => {
    const obj = exchanges.find((item) => item.dbid === exchangeId);
    console.log(obj);
    const tokens = props.tokenValue;
    // console.log(tokens.token);
    const toke = "Bearer ";
    const tokenId = toke.concat(tokens.token);
    await fetch(`https://carret-website.herokuapp.com/api/delete/${obj.dbid}`, {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        "Authorization": tokenId
      },
    });
    setExchanges((prev) => {
      const updated = prev.filter((exchange) => exchange.dbid !== exchangeId);
      return updated;
    });
  };

  // const editHandler = (exchangeId) => {
  //   deleteHandler(exchangeId);
  //   addHandler()
  // }
  return (
    <Card className={styles.cardBox}>
      <Fragment>
        <h2>Exchanges</h2>
        <ul>
          <li className={styles.firstli}>
            <div className={styles.firstDiv}>Exchange</div>
            <div className={styles.secDiv}>
              <div>Edit</div>
              <div>Delete</div>
            </div>
          </li>
          {exchanges.map((one) => (
            <li key={one.id}>
              <Exchange
                data={one}
                onAdd={enterHandler}
                onDelete={deleteHandler}
                disableSetter={setDisableOption}
              />
            </li>
          ))}
        </ul>
        {clicked && (
          <Modal
            onAddExchange={addHandler}
            onTap={onTapHandler}
            isDisabled={disableOption}
          />
        )}
        <Button onClick={newEnterHandler} className={styles.subButton}>
          Add Exchange
        </Button>
      </Fragment>
    </Card>
  );
};

export default ExchangeList;