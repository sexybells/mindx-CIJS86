import React, { useContext } from "react";
import { TicketContext } from "./Context";

const ItemList = (props) => {
  const { item, index } = props;
  const { countTicket } = useContext(TicketContext);
  return (
    <div className="item">
      <div className="item_string">
        {item}
        {index < 2 && <div className="badge_sold_out">Sold out</div>}
      </div>
      <div className="item_badge">
        {index >= 2 && <div className="badge_circle">{countTicket}</div>}
      </div>
    </div>
  );
};

export default ItemList;
