import React, { Component } from "react";
import Liferay from "./context/Liferay";
import BannerContent from "./context/BannerContent";
const RoomContext = React.createContext();
const domain = process.env.REACT_APP_DOMAIN;

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    liferaydata: [],
    bannerContent: [],
  };

  // static var domain_url = "";
  //getBannerContent
  getBannerContent = async () => {
    var result = await BannerContent();
    console.log(result.contentFields[0].value.data);
    var title = result.contentFields[0].value.data;
    var subTitle = result.contentFields[1].value.data;
    var bannerImage = domain + result.contentFields[2].value.image.contentUrl;
    const content = { title, subTitle, bannerImage };

    this.setState({ bannerContent: content });
  };

  //getLiferayRoomData
  getLiferayData = async () => {
    try {
      var result = await Liferay();

      let rooms = this.formatLiferayData(result, domain);
      rooms = rooms.sort(function (a, b) {
        return a.price - b.price;
      });
      let featuredRooms = rooms.filter((room) => room.featured === "true");
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getLiferayData();
    this.getBannerContent();
  }

  formatLiferayData(data, domain_url) {
    let tempItems = data.items.map((item) => {
      let id = item.id;
      let name = item.contentFields[0].value.data;
      let slug = item.contentFields[1].value.data;
      let price = parseInt(item.contentFields[2].value.data);
      let type = item.contentFields[3].value.data;
      let size = item.contentFields[4].value.data;
      let capacity = parseInt(item.contentFields[5].value.data);
      let pets = JSON.parse(item.contentFields[6].value.data);
      let breakfast = JSON.parse(item.contentFields[7].value.data);
      let featured = item.contentFields[8].value.data;
      let description = item.contentFields[9].value.data;
      let extras = JSON.parse(item.contentFields[10].value.data);
      // console.log(
      //   name +
      //     " " +
      //     slug +
      //     " " +
      //     price +
      //     " " +
      //     type +
      //     " featured" +
      //     featured +
      //     " " +
      //     breakfast +
      //     " " +
      //     pets
      // );
      let imagesObj = item.contentFields.filter(
        (fieldData) => fieldData.name === "images"
      );
      let images = imagesObj.map((data) => {
        //  console.log(
        //   "document path" + domain_url + data.value.document.contentUrl
        //  );
        return domain_url + data.value.document.contentUrl;
      });

      let room = {
        id,
        name,
        slug,
        price,
        type,
        size,
        capacity,
        pets,
        breakfast,
        featured,
        description,
        extras,
        images,
      };
      return room;
    });

    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    // all the rooms
    let tempRooms = [...rooms];
    //transform value
    // capacity = parseInt(capacity);
    //price = parseInt(price);

    //filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
      console.log(tempRooms);
    }
    //filter by capacity

    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    //filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    //filter by size

    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    //filter by breakfast;
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
