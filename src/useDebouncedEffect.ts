import { useCallback, useEffect } from "react";

const useDebouncedEffect = (effect, delay, deps) => {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};

// useDebouncedEffect(() => {
//   // Help a user use discount code regardless of upper or lower case.
//   orderApi.updateOrderDiscountCode(orderId, localDiscountCode.toUpperCase())
//     .then(_updatedOrder => {
//       setDiscountCode(localDiscountCode);
//     });
// }, 1000, [localDiscountCode])

export default useDebouncedEffect;