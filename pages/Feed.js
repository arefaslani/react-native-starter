import React from "react";
import { FlatList } from "react-native";

import Card from "components/Card";

const images = [
  require("assets/images/1.jpg"),
  require("assets/images/2.jpg"),
  require("assets/images/3.jpg"),
  require("assets/images/4.jpg"),
  require("assets/images/5.jpg"),
  require("assets/images/6.jpg"),
]

export default class App extends React.Component {
  _keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={[
          {
            caption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates sapiente incidunt iste est ratione deserunt quia eius esse obcaecati. Eveniet beatae optio dolores fugit vitae laudantium repudiandae, quas tempore!",
            image: images[0],
            id: 1
          },
          {
            caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reiciendis adipisci fugiat. Nostrum nemo, explicabo illo maiores error iusto id velit vel? Magni ab officia a repudiandae culpa porro molestiae!",
            image: images[1],
            id: 2
          },
          {
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis voluptas! Eos doloremque alias aliquam vero tempora tenetur saepe debitis ad nulla accusantium. Pariatur non excepturi deserunt, minima iusto molestias.",
            image: images[2],
            id: 3
          },
          {
            caption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit earum iusto nemo ratione consectetur blanditiis. Corporis, ea. Sed, ad voluptates voluptatem iure veritatis eaque incidunt error autem repellat quidem earum?",
            image: images[3],
            id: 4
          },
          {
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iste neque adipisci, non et dicta molestiae quis deleniti doloribus laudantium repellat culpa totam fugiat autem sint quas laborum aperiam similique.",
            image: images[4],
            id: 5
          },
          {
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique delectus officia laborum doloribus excepturi laudantium, natus labore tenetur distinctio quasi error. Autem dolorem perferendis rerum repudiandae a quas perspiciatis?",
            image: images[5],
            id: 6
          }
        ]}
        renderItem={({item}) => (
          <Card image={item.image} caption={item.caption} navigation={this.props.navigation} />
        )}
      />
    );
  }
}
