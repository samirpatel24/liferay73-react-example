import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";

import Title from "./Title";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      // console.log("featured room image" + room.images[0]);
      return <Room key={room.id} room={room} />;
    });
    if (loading) {
      return <Loading />;
    }
    return (
      <section className="featured-rooms">
        <Title title="featured rooms"></Title>
        <div className="featured-rooms-center">{rooms}</div>
      </section>
    );
  }
}
