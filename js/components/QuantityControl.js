const React = require("react");

const CartStore=require("../stores/CartStore");
const {updateCartItemQuantity}=CartStore;


let QuantityControl = React.createClass({

  render() {

    let id=this.props.id;
    let {variant} = this.props;
    let {quantity} = this.props.item;

    let className = "adjust-qty";
    if(variant === "gray") {
      className = "adjust-qty adjust-qty--gray";
    }

    let handleAddClick=function () {
        updateCartItemQuantity(id,quantity+1);
    };

    let handleDelClick=function () {
        if(quantity>0) {
            updateCartItemQuantity(id, quantity - 1);
        }
    };
    return (
      <div className={className}>
        <a className="adjust-qty__button" onClick={handleDelClick} >-</a>
        <div className="adjust-qty__number">{quantity}</div>
        <a className="adjust-qty__button" onClick={handleAddClick}>+</a>
      </div>
    );
  }
});

module.exports = QuantityControl;