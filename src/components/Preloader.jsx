import { useState, useEffect } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetch, image load)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s delay, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Remove preloader after loading

  return (
    <div
      id="preloader"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 0.5s ease",
      }}
    >
      <div
        className="spinner"
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #ccc",
          borderTop: "5px solid #007bff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Preloader;
