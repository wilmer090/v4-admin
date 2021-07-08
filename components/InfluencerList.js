import React from "react";
import influencerStyle from "../styles/Influencer.module.css";
import InfluencerItem from "./InfluencerItem";

function InfluencerList({ influencers }) {
  return (
    <div className={influencerStyle.grid}>
      {influencers.map((influencer, index) => (
        <InfluencerItem
          key={influencer.id}
          influencer={influencer}
          index={index + 1}
        />
      ))}
    </div>
  );
}

export default InfluencerList;
