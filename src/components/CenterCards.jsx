import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const CenterCards = ({ heading }) => {
  const chartRef = useRef(null);
  const totalRef = useRef(null);
  const labels = ["Upcoming", "Ongoing", "Completed"];
  const values = [50, 100, 50];
  let myChart = null;

  useEffect(() => {
    if (chartRef.current) {
      // Create or update chart when component mounts or updates
      const ctx = chartRef.current.getContext("2d");

      // Ensure previous instance is destroyed
      if (myChart) {
        myChart.destroy();
      }

      myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: ["#FFCB49", "#7464FF", "#4FD2B5"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutout: "80%", // To create a hollow effect
          plugins: {
            legend: {
              display: false, // Hide legend
            },
          },
        },
      });

      // Cleanup function to destroy chart when component unmounts
      return () => {
        if (myChart) {
          myChart.destroy();
        }
      };
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Calculate total
  const total = 123456;

  // Position total inside chart
  const updateTotalPosition = () => {
    if (chartRef.current && totalRef.current) {
      const chartContainer = chartRef.current.closest(".chart-container");
      const chartArea = chartContainer.getBoundingClientRect();
      const centerX = chartArea.width / 2;
      const centerY = chartArea.height / 3;
      totalRef.current.style.left = `${centerX}px`;
      totalRef.current.style.top = `${centerY}px`;
      totalRef.current.textContent = `Total ${total}`;
    }
  };

  useEffect(() => {
    // Call the function to update total position
    updateTotalPosition();

    // Listen for window resize to update total position
    window.addEventListener("resize", updateTotalPosition);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", updateTotalPosition);
    };
  }, []);

  return (
    <div className="bg-white rounded-md h-72 shadow-lg w-52 mx-auto mr-14 overflow-hidden chart-container">
      <h3 className="text-sm mx-2 font-semibold">{heading}</h3>
      <div className="relative p-10 justify-center items-center">
        <canvas ref={chartRef} width={100} height={100}></canvas>
        <div
          ref={totalRef}
          className="absolute mx-auto w-8 text-center"
          style={{ transform: "translate(-50%, -50%)" }}
        ></div>
        {labels.map((label, index) => (
          <svg
            key={index}
            width="150"
            height="24"
            viewBox="0 0 172 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="m-2"
          >
            <rect
              width="172"
              height="24"
              rx="4"
              fill={`url(#paint0_linear_${index})`}
            />
            <defs>
              <linearGradient
                id={`paint0_linear_${index}`}
                x1="0"
                y1="12"
                x2="172"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop
                  offset="1"
                  stopColor={
                    index === 0
                      ? "#FFCB49"
                      : index === 1
                      ? "#7464FF"
                      : "#4FD2B5"
                  }
                />
              </linearGradient>
            </defs>
            <text x="10" y="16" fill="black">
              {label} {values[index]}
            </text>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default CenterCards;
