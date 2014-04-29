$(document).ready(function () {


    var polarData = [
        {
            value: 163858,
            color: "#00385e"
        },
        {
            value: 137935,
            color: "#0868ac"
        },
        {
            value: 140324,
            color: "#2b8cbe"
        },
        {
            value: 54395,
            color: "#4eb3d3"
        },
        {
            value: 51268,
            color: "#7bccc4"
        },
        {
            value: 80400,
            color: "#a8ddb5"
        }
    ];

    var polarOptions = {
        animationEasing: "easeOutExpo",
        animateRotate: true,
        segmentShowStroke: false,
        scaleShowLine: true
    };

    var netRevenue = document.getElementById("netRevenue").getContext("2d");

    new Chart(netRevenue).PolarArea(polarData, polarOptions);


    var options = {
        useEasing : true,
        useGrouping : true,
        separator : ',',
        decimal : '.'
    }
    // var score= $('#score');
    var sc1 = new countUp("sc-1", 0, 180368, 0, 1, options);
    var sc2 = new countUp("sc-2", 0, 1655358, 0, 1, options);
    var sc3 = new countUp("sc-3", 0, 18835726, 0, 1, options);
    var sc4 = new countUp("sc-4", 0, 90, 0, 1, options);
    var sc5 = new countUp("sc-5", 0, 70.79, 2, 1, options);
    var sc6 = new countUp("sc-6", 0, 4, 0, 1, options);

    sc1.start();
    sc2.start();
    sc3.start();

    sc4.start();
    sc5.start();
    sc6.start();


})



google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'YTD', 'Plan', 'Actual'],
        ['Feb', 1000000, 1070000, 1175000],
        ['Mar', 1170000, 1170000, 1160000],
        ['Apr', 660000, 1000000, 1170000],
        ['Jun', 1030000, 1100000, 1180000],
        ['Jul', 1030000, 1105000, 1185000],
        ['Aug', 1030000, 1200000, 1200000],
        ['Sep', 1060000, 1270000, 1205000],
        ['Oct', 1630000, 1170000, 1220000],
        ['Nov', 1750000, 1120000, 1221000],
        ['Dec', 1870000, 1170000, 1230000],
        ['Jan', 2170000, 1240000, 1250000]
    ]);

    var options = {
        title: 'YTD Sales Trend',
        colors: ['#4eb3d2', '#41ae76', '#ffa300'],
        animation: {
            duration: 1000,
            easing: 'out'
        },
        pointSize: 5,


    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
