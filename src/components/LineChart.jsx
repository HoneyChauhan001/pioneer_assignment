import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.Year),
        datasets: [
            {
                label: 'US Population',
                data: data.map(item => item.Population),
                fill: false,
                borderColor: '#15803d',
                backgroundColor: '#15803d',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRation: false,
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
                    text: 'Year'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Population'
                },
            },
        },
    };

    return (
        <div className="bg-zinc-900 rounded-lg shadow-md p-6 mt-6 mr-6">
            <h2 className="text-2xl text-white font-bold mb-4">Line Chart</h2>
            <div className="w-full md:w-4/5 lg:w-3/5 mx-auto">
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default LineChart;

