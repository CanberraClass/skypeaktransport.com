const smrtMRT = document.getElementById('mkbf-smrt-mrt').getContext('2d');
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: true
        }
    }
};

const linesmrt = new Chart(smrtMRT, {
    type: 'line', // or 'bar', 'pie', etc.
    data: {
        labels: ["2020", "2021", "2022", "2023", "2024", "2025", "Bef 27 Sep 2026", "Aft 27 Sep 2026"],
        datasets: [{
            label: "SKL",
            data: [0, 1022000, 2452000, 4482000, 8530000, 12713000, 24173600, 0],
            borderColor: 'rgb(123, 58, 10)',
            fill: true,
            backgroundColor: 'rgba(112, 133, 115,0.05)',
            borderWidth: 3
        },

        {
            label: "HBL",
            data: [0, 0, 0, 0, 4951000, 5912000, 6918000, 0],
            borderColor: 'rgb(255, 187, 0)',
            fill: true,
            backgroundColor: 'rgba(207, 61, 61,0.05)',
            borderWidth: 3
        },

        {
            label: "AEL",
            data: [0, 0, 0, 0, 4475000, 5512200, 6610200, 0],
            borderColor: 'rgb(39, 39, 157)',
            fill: true,
            backgroundColor: 'rgba(39, 39, 157,0.05)',
            borderWidth: 3
        },

        {
            label: "NWL",
            data: [0, 0, 0, 3210000, 4510000, 8291200, 12349000, 0],
            borderColor: 'rgb(14, 103, 44)',
            fill: true,
            backgroundColor: 'rgba(14, 103, 44,0.05)',
            borderWidth: 3
        },

        {
            label: "YSLRT",
            data: [0, 0, 0, 0, 4530000, 8936100, 16222000, 0],
            borderColor: 'rgb(112, 133, 115)',
            fill: true,
            backgroundColor: 'rgba(112, 133, 115,0.05)',
            borderWidth: 3
        }]//



    },
    options: chartOptions
});

function updateChartOptions(chart, isDarkMode) {
    const options = isDarkMode ? darkThemeOptions : {
        scales: {
            x: {
                ticks: {
                    color: '#000000' // X-axis labels color
                },
                grid: {
                    color: '#e0e0e0' // X-axis grid lines color
                }
            },
            y: {
                ticks: {
                    color: '#000000' // Y-axis labels color
                },
                grid: {
                    color: '#e0e0e0' // Y-axis grid lines color
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#000000' // Legend labels color
                }
            },
            tooltip: {
                backgroundColor: '#ffffff', // Tooltip background color
                titleColor: '#000000', // Tooltip title color
                bodyColor: '#000000' // Tooltip body color
            }
        }
    };
    chart.options = {
        ...chart.options,
        ...options
    };
    chart.update();
}

// Check localStorage for dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    updateChartOptions(linesmrt, true);
}

const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    updateChartOptions(linesmrt, isDarkMode);
    // Save the preference in localStorage
    if (isDarkMode) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});