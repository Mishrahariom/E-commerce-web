import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Checkpoint = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!clicked) {
      // Navigate to the checkout page when the button is clicked
      navigate('/checkout');
    }
    setClicked(true);
  };

  return (
    <div
      className={`checkpoint ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      {clicked ? (
        <>
          <div>
            <p>Have a great day!</p>
          </div>
          <div>
            <button
              onClick={() => navigate('/')}
              className="btn41-43 btn-41"
            >
              Continue Shopping
            </button>
          </div>
        </>
      ) : (
        <>

          <div>
            Your Order Placed succesfully.<br /> <br /> 
            Click to check out for shopping.
          </div>
          {/* <p>Thank you very much.</p>
          <p>Click to check out for shopping.</p> */}
        </>
      )}
    </div>
  );
};

//   const [clicked, setClicked] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = () => {

//     if (!clicked) {

//       navigate("/");
//     }
//     setClicked(true);
//   };



//   return (
//     <>

//       <div

//         className={`checkpoint ${clicked ? 'clicked' : ''}`}
//         onClick={handleClick}
//       >
//         {clicked ? 'Have a great day!' : 'Click me to check out'}

//         <button
//           onClick={() => navigate("/")}
//           className="btn41-43 btn-41">
//           Continue Shopping
//         </button>
//       </div>

//     </>
//   );
// };


{/* <div className="flex flex-col items-center justify-center h-screen text-8xl">
             Thank you for Purchasing
             <button
               onClick={() => navigate("/")}
               className="border-2 rounded-xl p-2 bg-gray-300 hover:opacity-90 mt-12"
             >
               Continue Shopping
           </button>
           </div> */}


            //   setClicked(true);
    //   <button
    //            onClick={() => navigate("/")}
    //            className="bn6"
    //          >
    //            Continue Shopping
    //        </button>
    //   // You can navigate or perform other actions here
    // };