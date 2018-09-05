import React from "react";
import { FlatList } from "react-native";

import Card from "../components/Card";

const images = [
  require("../images/1.jpg"),
  require("../images/2.jpg"),
  require("../images/3.jpg"),
  require("../images/4.jpg"),
  require("../images/5.jpg"),
  require("../images/6.jpg"),
]

export default class App extends React.Component {
  render() {
    return (
      <FlatList
        data={[
          {
            caption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates sapiente incidunt iste est ratione deserunt quia eius esse obcaecati. Eveniet beatae optio dolores fugit vitae laudantium repudiandae, quas tempore!",
            image: images[0],
            key: "1"
          },
          {
            caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reiciendis adipisci fugiat. Nostrum nemo, explicabo illo maiores error iusto id velit vel? Magni ab officia a repudiandae culpa porro molestiae!",
            image: images[1],
            key: "2"
          },
          {
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis voluptas! Eos doloremque alias aliquam vero tempora tenetur saepe debitis ad nulla accusantium. Pariatur non excepturi deserunt, minima iusto molestias.",
            image: images[2],
            key: "3"
          },
          {
            caption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit earum iusto nemo ratione consectetur blanditiis. Corporis, ea. Sed, ad voluptates voluptatem iure veritatis eaque incidunt error autem repellat quidem earum?",
            image: images[3],
            key: "4"
          },
          {
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iste neque adipisci, non et dicta molestiae quis deleniti doloribus laudantium repellat culpa totam fugiat autem sint quas laborum aperiam similique.",
            image: images[4],
            key: "5"
          },
          {
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique delectus officia laborum doloribus excepturi laudantium, natus labore tenetur distinctio quasi error. Autem dolorem perferendis rerum repudiandae a quas perspiciatis?",
            image: images[5],
            key: "6"
          }
        ]}
        renderItem={({item}) => (
          <Card image={item.image} caption={item.caption} />
        )}
      />
    );
  }
}
