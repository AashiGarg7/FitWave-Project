import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            // position: 'bottom',
            display: false,
            labels: {
                // display:false,
                color: 'white',
                font: {
                    size: 14,
                },
            },
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    let value = context.raw;
                    return `${value}%`;
                }
            }
        }
    },
};

function DonutChart() {
    const data = {
        labels: ['Calories Burn', 'Protien', 'Carbs'],
        datasets: [
            {
                label: 'Votes',
                data: [33.5, 23.02, 11.24],
                backgroundColor: [
                    'rgb(204, 255, 51, 1)',
                    'rgba(69, 255, 188, 1)',
                    'rgba(41, 41, 40, 1)',
                ],
                borderColor: [
                    'rgba(204, 255, 51, 1)',
                    'rgba(69, 255, 188, 1)',
                    'rgba(41, 41, 40, 1)',
                ],
                borderWidth: 2,
                cutout: '60%',
            },
        ],
    };

    return (
        <div className='h-[240px] w-[50%] text-white  bg-[#121212] rounded-l-xl border-1 p-4'>
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default DonutChart;
