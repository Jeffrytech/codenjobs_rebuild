import React from "react";

const PayPalButton = () => {
  return (<section />);
};

export default PayPalButton;

// import React, {
//   useEffect, useState,
// } from "react";

// import { styled } from "baseui";

// // import payApi from "../../api/pay";

// export const injectScript = (document, id, src, onload = () => { }) => {
//   let js;
//   const fjs = document.getElementsByTagName("script")[0];
//   if (document.getElementById(id)) {
//     return;
//   }
//   js = document.createElement("script");
//   js.id = id;
//   js.onload = onload;
//   js.src = src;
//   fjs.parentNode.insertBefore(js, fjs);
// };

// const Container = styled("div", {
//   display: "flex",
// });

// // https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/
// // This controls the button style.
// const style = {
//   color: "gold",
//   height: 40,
//   size: "responsive",
//   label: "pay",
// };

// const PayPalButton = ({
//   amountToCharge,
//   createOrder,
//   onApprove,

//   id = 0,
  
//   doCheck,
//   disabled = false,

// }) => {
//   // const PAYPAL_SCRIPT_URL = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT}&disable-funding=credit,card&currency=${currency.toUpperCase()}`;
//   const PAYPAL_SCRIPT_URL = "https://www.paypal.com/sdk/js?client-id=AfMGnQpwau2zZa2Se0z_d3CLB7KNIoLF0gJBtSXaLJYiL573k0y590XD611QAtTAEj7PnOjCGaun18m8&disable-funding=credit,card&currency=USD";

//   const [paypalScriptLoaded, setPaypalScriptLoaded] = useState(false);

//   useEffect(() => {
//     if (paypalScriptLoaded && amountToCharge > 0) {
//       const paypalButtonContainer = document.getElementById(
//         `paypal-button-container-${id}`,
//       );

//       paypalButtonContainer.parentElement.removeChild(paypalButtonContainer);
//       // @ts-ignore
//       const newPaypalButtonContainer = document.createElement("div");
//       newPaypalButtonContainer.id = `paypal-button-container-${id}`;
//       // @ts-ignore
//       document
//         .getElementById("paypal-buttons-container")
//         .appendChild(newPaypalButtonContainer);

//       paypal
//         .Buttons({
//           style,
//           createOrder,
//           onApprove,
//           disabled,

//           onClick: (data, actions) => {
//             // console.log("data");
//             // console.log(data);

//             const checked = doCheck();
//             if (!checked) {
//               return actions.reject();
//             }
//           },
//         })
//         .render(`#paypal-button-container-${id}`);
//     } else {
//       injectScript(document, "paypal-script", PAYPAL_SCRIPT_URL, () =>
//         setPaypalScriptLoaded(true),
//       );
//     }
//   }, [
//     paypalScriptLoaded,
//     amountToCharge,

//     id,
//   ]);

//   return (
//     <Container id="paypal-buttons-container">
//       {/* <div style={{ color: "gold" }} id={`paypal-button-container-${id}`} /> */}
//       <div id={`paypal-button-container-${id}`} />
//     </Container>
//   );
// };

// export default PayPalButton;