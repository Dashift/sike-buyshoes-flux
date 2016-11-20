/**
 * Created by Because on 2016/11/20.
 */

const EventEmitter=require("events");

let emitter=new EventEmitter();

function emitChange(){
    emitter.emit("change");
}

let _cartItems={

};

module.exports={
    getCartItem(){
      return _cartItems;
    },

    addCartItem(productId){
        if(_cartItems[productId]){
            _cartItems[productId]["quantity"]+=1;
        }else {
            _cartItems[productId]={
                id: productId,
                quantity: 1,
            };
        }
        emitChange();
    },

    removeCartItem(productId){
        delete _cartItems[productId];
        emitChange();
    },

    updateCartItemQuantity(productId,change){
        _cartItems[productId]["quantity"]=change;
        emitChange();
    },

    addChangeListener(callback){
      emitter.addListener("change",callback)
    },

    removeChangeListener(callback){
        emitter.removeListener("change",callback)
    },
};
