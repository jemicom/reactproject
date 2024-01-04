import React from "react";

// const StarRating = ({ rating }) => {
//   return (
//     <div>
//       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
//         <span>{num <= rating ? "★" : "☆"}</span>
//       ))}
//     </div>
//   );
// };

const StarRating = ({ count = 5, rating }) => {
  const ary = [];
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // [1, 2, 3, 4, 5]
  for (let a = 1; a <= count; a++) {
    ary.push(a);
  }
  //
  return (
    <div>
      {ary.map((num) => (
        <span>{num <= rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export default StarRating;
