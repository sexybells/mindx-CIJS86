import React, { useState } from "react";
import ItemBox from "./ItemBox";
import ItemList from "./ItemList";
import TicketProvider from "./TicketProvider";

const Home = () => {
  // const [products, setProducts] = useState(json);
  const [keyword, setKeyword] = useState("");
  const dataList = ["September", "November", "December"];
  const dataBox = [
    {
      id: 1,
      province: "Ha Noi",
      time: "Fri 28 Nov 2021",
      description: "Hanoi faith and hope. We always waiting for you!",
      image:
        "https://file3.qdnd.vn/data/images/0/2022/10/09/phucthang/hanoi%201.jpg?dpi=150&quality=100&w=870",
    },
    {
      id: 2,
      province: "Ho Chi Minh City",
      time: "Tue 28 Nov 2021",
      description:
        "HCM City active and modernization. We always waiting for you!",
      image:
        "https://lp-cms-production.imgix.net/2021-01/shutterstockRF_718619590.jpg",
    },
    {
      id: 3,
      province: "Da Nang",
      time: "Thu 28 Nov 2021",
      description:
        "HCM City active and modernization. We always waiting for you!",
      image: "https://statics.vinpearl.com/cau-rong-da-nang_1657938152.jpg",
    },
  ];

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   const reList = products.filter((v) => v.name && v.name.toLowerCase().includes(value.toLowerCase()));
  //   setProducts(reList);
  // };

  // const handleSearch = (e) => {
  //   e.preventDefault();

  // }

  return (
    <TicketProvider>
      <div className="container">
        <div className="workshop">
          <h1>WORK SHOP</h1>
        </div>
        <div className="list">
          {dataList.map((v, i) => (
            <ItemList index={i} item={v} key={i} />
          ))}
        </div>
        <div className="box">
          {dataBox.map((v, i) => (
            <ItemBox index={i} item={v} key={i} />
          ))}
        </div>
      </div>
    </TicketProvider>
  );
};

export default Home;
