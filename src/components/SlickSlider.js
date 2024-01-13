import React, { Component } from "react";
import Slider from "react-slick";

// import tower from "../assets/images/sliders/travel/eftn.jpg";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      vertical: true,
    };
    return (
      <div className="img-List">
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>{/* <img alt="tower" src={tower} /> */}</div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
          <div>
            <h3>16</h3>
          </div>
          <div>
            <h3>17</h3>
          </div>
          <div>
            <h3>18</h3>
          </div>
          <div>
            <h3>19</h3>
          </div>
          <div>
            <h3>20</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
