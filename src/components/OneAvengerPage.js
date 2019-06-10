import React from "react";
import Avenger from "./Avenger";
import avengersData from "../avengersData";
// console.log(avengersData);

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.id = null;
  }
  // componentWillMount() {
  //   console.log(this.props);
  //   console.log(this.props.match.params.avId);
  //   this.id = this.props.match.params.avId;
  //   console.log(this.id);
  // }
  render() {
    this.id = this.props.match.params.id;
    console.log(this.id);
    const avenger = avengersData.find(avengerHero => avengerHero.id === Number(this.id));
    console.log(avenger);
    return (
      <>
        {avenger ? (
          <Avenger av={avenger} />
        ) : (
          <div>
            <p>No Avenger matches the id of {this.id}</p>
          </div>
        )}
      </>
      // <div>Winning!</div>
    );
  }
}

export default Test;
