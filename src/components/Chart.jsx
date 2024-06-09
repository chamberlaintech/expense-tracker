import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const categorizeExpenses = (expenses) => {
  const categories = {};

  expenses.forEach((expense) => {
    const { category, amount } = expense;
    if (!categories[category]) {
      categories[category] = 0;
    }
    categories[category] += parseFloat(amount);
  });

  return categories;
};

const CategoryChart = () => {
  const expenses = useSelector((state) => state.expenses);
  const categorizedData = categorizeExpenses(expenses);

  const labels = Object.keys(categorizedData);
  const dataValues = Object.values(categorizedData);

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: [
          "#E74C3C",
          "#F39C12",
          "#F1C40F",
          "#2ECC71",
          "#1ABC9C",
          "#3498DB",
          "#9B59B6",
          "#34495E",
          "#7F8C8D",
          "#BDC3C7",
        ],
        borderColor: "#191718",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#FFFFFF",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += "$" + context.parsed.toFixed(2);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="category">
      <h2>Category Breakdown</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CategoryChart;
