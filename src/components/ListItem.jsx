import React, { useState } from "react";

function ListItem(props) {
  // code for adding and removing strike through

  // const [dataState, setDataState] = useState(false);
  // function dataStrikeThrough() {
  //   setDataState((preValue) => {
  //     return !preValue;
  //   });
  //   // console.log(dataState);
  // }
  // return (
  //   <div onClick={dataStrikeThrough}>
  //     <li style={{ textDecoration: dataState ? "line-through" : "" }}>
  //       {props.data}
  //     </li>
  //   </div>
  // );

  return (
    <div
      onClick={() => {
        props.ondelete(props.dataId);
      }}
    >
      <li>{props.data}</li>
    </div>
  );
}

export default ListItem;
