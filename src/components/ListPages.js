import { useState } from "react";
import Home from "../pages/Home";
import Programming from "../pages/Programming";

const ListPages = () => {
  const [page, setPage] = useState([
    { title: "Home", body: Home, id: 1 },
    { title: "Programming", body: Programming, id: 2 },
  ]);
  return (
    <div className="body" key={page.id}>
      <h2> {page.title} </h2>
      Page Body (select from Nav or Modal)
      {page.body}
    </div>
  );
};

export default ListPages;
