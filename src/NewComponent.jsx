import React, { useState } from "react";

function NewComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setshipping] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setshipping(event.target.value);
    }

    return (
        <>
            <div>
                <input
                    value={name}
                    onChange={handleNameChange}
                />
                <p>Name: {name}</p>

                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                />
                <p>Quantity: {quantity}</p>

                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Enter delivery instruction"
                />
                <p>Comment: {comment}</p>

                <select
                    value={payment}
                    onChange={handlePaymentChange}
                >
                    <option value="">Select an Option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="GiftCard">GiftCard</option>
                </select>

                <p>Payment: {payment}</p>


                <label>
                    <input type="radio" value="Pick Up"
                        checked={shipping === "Pick Up"}
                        onChange={handleShippingChange} />
                    Pickup
                </label>
                <label>
                    <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange} />
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>

            <hr />
        </>
    );
}

export default NewComponent;