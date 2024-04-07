import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as CharJS } from 'chart.js/auto';

const BarChart = ({ data }) => {
    const labels = data.map(item => item.Year);
    const chartData = {
        labels: data.map(item => item.Year),
        datasets: [
            {
                label: 'US Population',
                data: data.map(item => item.Population),
                backgroundColor: '#15803d',
                borderColor: 'white',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Population',
                },
            },
        },
    };

    return (
        <div className="bg-zinc-900 rounded-lg shadow-md p-6 mt-6 mr-6">
        <h2 className="text-2xl text-white font-bold mb-4">Bar Chart</h2>
        <div className="w-full md:w-4/5 lg:w-3/5 mx-auto">
            <Bar data={chartData} options={options} />
        </div>
    </div>

    );
};
export default BarChart;
