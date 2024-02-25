document.getElementById("learnButton").addEventListener("click", function () {
  // Perform any action here
  window.location.href = "/learn"; // Redirect to the destination page
});

document.getElementById("testButton").addEventListener("click", function () {
  // Perform any action here
  window.location.href = "/test"; // Redirect to the destination page
});

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "letter a",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "letter d",
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgb(54, 162, 235)",
      data: [15, 25, 10, 12, 30, 40, 55],
    },
  ],
};

const ctx = document.getElementById("barChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
