import React from "react";
import Creator from "../Creator/Creator";
import { creatorList } from "../../dataList";
const TopCreator = () => {
  return (
    <section id="top-developers">
      <div class="container">
        <h4 class="text-center">Top Creators</h4>
        <div class="owl-carousel owl-theme">
          {creatorList.map((creator) => {
            return <Creator img={creator} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default TopCreator;
