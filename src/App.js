import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e8305263694a4c2358508602ad7694e2cd022389545b2812f6e86bf29e05e172b53405",
    rating: 5,
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df64d239a3ca63c5a7574a4ad2656633c8c",
    rating: 4.9,
  },
  {
    id: 3,
    name: "samgiopsal",
    image:
      "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
    rating: 4.8,
  },
  {
    id: 4,
    name: "chukumi",
    image:
      "https://static.wtable.co.kr/image/production/service/recipe/707/d403b168-c865-4b5e-9afb-58c48e5feaec.jpg",
    rating: 5.5,
  },
  {
    id: 5,
    name: "bibimbab",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
    rating: 4.7,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
