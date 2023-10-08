/* eslint-disable react/prop-types */
import { Component } from "react";

export default class Product extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    let { name, price, location, quantity, id } = this.props.productInfo;
    return (
      <>
        <div className="card   text-center  ">
          <div className="content-card bg-slate-50 w-96 m-3 rounded-md shadow p-5">
            <h2>title : {name}</h2>
            <h2>price : {price}</h2>
            <h2>location : {location}</h2>
            <h2>qountity : {quantity}</h2>
            <div className="group-btns flex align-items content-center items-center justify-center ">
              <button
                className="btn btn-info bg-slate-300 rounded-sm  w-28 h-7 font-mono shadow"
                onClick={() => this.props.trackToUpdate(id)}
              >
                increase
              </button>
              <button
                className=" bg-red-600 m-2 text-slate-100 rounded-sm w-28 h-7 font-mono "
                onClick={() => {
                  this.props.removProduct(id);
                }}
              >
                remove
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
