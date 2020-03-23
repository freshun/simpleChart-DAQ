'use strict';
let ctx = document.getElementById('myChart');
let years = [
    'April/1/10', 'May/1/10', 'June/1/10','July/1/10','August/1/10','September/1/10','October/1/10','November/1/10','December/1/10',
    'Janruary/1/11','February/1/11', '3/1/11','April/1/11','May/1/11','June/1/11','July/1/11','August/1/11','September/1/11',
    'October/1/11','Novemer/1/11','December/1/11','Janruary/1/12','February/1/12','March/1/12','April/1/12','May/1/12','June/1/12',
    'July/1/12','August/1/12','September/1/12','October/1/12','Novemer/1/12','December/1/12','Janruary/1/13','February/1/13','March/1/13',
    'April/1/13','May/1/13','June/1/13','July/1/13','August/1/13','September/1/13','October/1/13','Novemer/1/13','December/1/13',
    'Janruary/1/14','February/1/14','March/1/14','April/1/14','May/1/14','June/1/14','July/1/14','August/1/14','September/1/14',
    'October/1/14','Novemer/1/14','December/1/14','Janruary/1/15','February/1/15','March/1/15','April/1/15','May/1/15',
    'June/1/15','July/1/15','August/1/15','September/1/15','October/1/15','Novemer/1/15','December/1/15','Janruary/1/16',
    'February/1/16','March/1/16','April/1/16','May/1/16','June/1/16','July/1/16','August/1/16','September/1/16','October/1/16',
    'Novemer/1/16','December/1/16','Janruary/1/17','February/1/17','March/1/17','April/1/17','May/1/17','June/1/17','July/1/17',
    'August/1/17','September/1/17','October/1/17','Novemer/1/17','December/1/17','Janruary/1/18','February/1/18','March/1/18',
    'April/1/18','May/1/18','June/1/18','July/1/18','August/1/18','September/1/18','October/1/18','Novemer/1/18',
    'December/1/18','Janruary/1/19','February/1/19','March/1/19','April/1/19','May/1/19','June/1/19','July/1/19',
    'August/1/19','September/1/19','October/1/19','Novemer/1/19','December/1/19','Janruary/1/20','February/1/20','March/1/20',
    'March/20/20'];

let price = [2461.19, 2257.04,2109.24,2254.70,2114.03,
    2368.62,2507.41,2498.23,2652.87,2700.08,2782.27,2781.07,2873.54,
    2835.30,2773.52,2756.38,2579.46,2415.40,2684.41,2620.34,
    2605.15,2813.84,2966.89,3091.57,3046.36,2827.34,2935.05,
    2939.52,3066.96,3116.23,2977.23,3010.24,3019.51,3142.13,3160.19,
    3267.52,3328.79,3455.90,3403.25,3626.37,3589.87,3771.48,3919.71,
    4059.89,4176.59,4103.88,4308.12,4198.99,4114.56,4242.62,4408.18,
    4369.78,4580.27,4493.39,4630.74,4791.63,4736.05,4635.24,4963.53,
    4900.88,4941.42,5070.03,4986.87,5128.28,4812.70,4620.16,5053.75,5108.67,
    5007.41,4613.95,4557.95,4869.85,4775.36,4948.05,4842.67,5162.13,
    5213.22,5312,5189.14,5323.68,5444.5,5614.79,5825.44,5911.74,6047.61,6198.52,
    6140.42,6348.12,6428.66,6495.96,6727.67,6873.97,6903.39,7411.48,
    7273.01,7063.45,7066.27,7442.12,7510.30,7671.79,8109.54,8046.35,
    7305.90,7330.54,6635.28,7281.74,7532.53,7729.32,8095.39,7453.15,
    8006.24,8175.42,7962.88,7999.34,8292.36,8665.47,8972.60,9150.94,
    8567.37,6879.52,6879.52,
];

let lineChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: years,
        datasets: [{
            data: price,
            label: 'Nasdaq',
            backgroundColor: 'rgba(63, 195, 128, 0.2)',
            borderColor: 'rgba(63, 195, 128, 1)',
            pointRadius: 1,
        }]
},
    options: {
        responsive: true,
        legend: {display : true,
                position : 'bottom'},
        tooltips: {
            mode: 'nearest',
            bodyAlign: 'center',
            backgroundColor: 'rgba(103, 128, 159, 1)',
            xPadding: 10,
            yPadding: 10,
            caretPadding: 15,
            intersect: false,
            displayColors: false,
            borderColor: 'rgba(255,255,255, 0.9)',
            borderWidth: 2
        },

        scales:{
            yAxes:[{
                ticks: {
                    callback: function(value, index, values) {
                      return value.toLocaleString("en-US",{style:"currency", currency:"USD"});
                    }
                },
            gridLines: {
                color: 'rgba(103, 128, 159, 0.7)',
                },
            }],

            xAxes:[{
                gridLines: {
                    display: false
                    }
                }],
        }
    }

});


