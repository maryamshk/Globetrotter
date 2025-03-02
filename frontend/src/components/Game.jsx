// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Confetti from "react-confetti";
// import { FaGlobe } from "react-icons/fa";

// const Game = () => {
//   const [destination, setDestination] = useState(null);
//   const [guess, setGuess] = useState("");
//   const [result, setResult] = useState(null);

//   const fetchRandomDestination = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/destinations/random"
//       );
//       setDestination(res.data);
//       setGuess("");
//       setResult(null);
//     } catch (err) {
//       console.error("Failed to fetch destination:", err);
//       setResult({ error: "Failed to load the game. Try again!" });
//     }
//   };

//   const handleGuess = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/destinations/guess",
//         {
//           destinationId: destination._id,
//           guess,
//         }
//       );
//       setResult(res.data);
//       setTimeout(fetchRandomDestination, 3000);
//     } catch (err) {
//       console.error("Failed to validate guess:", err);
//       setResult({ error: "Failed to validate guess. Try again!" });
//     }
//   };

//   useEffect(() => {
//     fetchRandomDestination();
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         overflow: "hidden",
//         backgroundColor: "#f9fafb",
//         padding: "20px",
//       }}
//     >
//       <h1
//         style={{
//           display: "flex",
//           alignItems: "center",
//           fontSize: "24px",
//           fontWeight: "bold",
//           color: "#333",
//           marginBottom: "16px",
//         }}
//       >
//         <FaGlobe style={{ marginRight: "8px", color: "#3b82f6" }} />
//         Globetrotter
//       </h1>
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//           borderRadius: "12px",
//           padding: "24px",
//           width: "100%",
//           maxWidth: "400px",
//           textAlign: "center",
//         }}
//       >
//         {destination && (
//           <>
//             <h2
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "600",
//                 color: "#333",
//                 marginBottom: "16px",
//               }}
//             >
//               {destination.clues[0]}
//             </h2>
//             <input
//               value={guess}
//               onChange={(e) => setGuess(e.target.value)}
//               placeholder="Your guess..."
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 outline: "none",
//                 marginBottom: "12px",
//                 fontSize: "16px",
//               }}
//             />
//             <button
//               onClick={handleGuess}
//               style={{
//                 width: "100%",
//                 backgroundColor: "#3b82f6",
//                 color: "#fff",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 fontSize: "16px",
//                 border: "none",
//                 cursor: "pointer",
//                 transition: "background 0.3s",
//               }}
//               onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
//               onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
//             >
//               Submit Guess
//             </button>
//           </>
//         )}
//         {result && (
//           <div style={{ marginTop: "16px" }}>
//             {result.correct ? (
//               <Confetti />
//             ) : (
//               <p style={{ color: "#dc2626" }}>😢 Incorrect!</p>
//             )}
//             <p style={{ color: "#555", marginTop: "8px" }}>{result.funFact}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Game;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { FaGlobe } from "react-icons/fa";

const Game = () => {
  const [destination, setDestination] = useState(null);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState(null);

  const fetchRandomDestination = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/destinations/random"
      );
      setDestination(res.data);
      setGuess("");
      setResult(null);
    } catch (err) {
      console.error("Failed to fetch destination:", err);
      setResult({ error: "Failed to load the game. Try again!" });
    }
  };

  const handleGuess = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/destinations/guess",
        {
          destinationId: destination._id,
          guess,
        }
      );
      setResult(res.data);
      setTimeout(fetchRandomDestination, 3000);
    } catch (err) {
      console.error("Failed to validate guess:", err);
      setResult({ error: "Failed to validate guess. Try again!" });
    }
  };

  useEffect(() => {
    fetchRandomDestination();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#f9fafb",
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "16px",
        }}
      >
        <FaGlobe style={{ marginRight: "8px", color: "#3b82f6" }} />
        Globetrotter
      </h1>
      <div
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          padding: "24px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        {destination && (
          <>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "16px",
              }}
            >
              {destination.clues[0]}
            </h2>
            <input
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Your guess..."
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                outline: "none",
                marginBottom: "12px",
                fontSize: "16px",
              }}
            />
            <button
              onClick={handleGuess}
              style={{
                width: "100%",
                backgroundColor: "#3b82f6",
                color: "#fff",
                padding: "12px",
                borderRadius: "8px",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
            >
              Submit Guess
            </button>
          </>
        )}
        {result && (
          <div style={{ marginTop: "16px" }}>
            {result.correct ? (
              <Confetti />
            ) : (
              <p style={{ color: "#dc2626" }}>😢 Incorrect!</p>
            )}
            <p style={{ color: "#555", marginTop: "8px" }}>{result.funFact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
