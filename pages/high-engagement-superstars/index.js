import React, { useState } from "react";
import "antd/dist/antd.css";
import InfluencerList from "../../components/InfluencerList";

const COLOR = "#0070f3";

export default function index({ influencers, total }) {
  const [data, setData] = useState(influencers);
  const [page, setPage] = useState(2);

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:8000/influencers?_page=${page}&_limit=15`
    );
    const newData = await res.json();
    setPage(page + 1);
    setData([...data, ...newData]);
  };

  const handleClick = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <InfluencerList
      influencers={data}
      handleClick={handleClick}
      COLOR={COLOR}
      total={total}
      title="High Engagement Superstars"
    />
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `http://localhost:8000/influencers?_page=1&_limit=15`
  );

  const influencers = await res.json();
  const total = res.headers.get("X-Total-Count");

  return {
    props: {
      influencers,
      total,
    },
  };
};
