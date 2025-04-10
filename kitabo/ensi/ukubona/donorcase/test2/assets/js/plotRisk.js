function plotRisk(timePoints, mortalityRisk) {
    const data = [{
        x: timePoints,
        y: mortalityRisk,
        mode: 'lines',
        line: { color: 'green' },
        name: 'Mortality Risk'
    }];

    const layout = {
        title: 'Mortality Risk Over Time',
        xaxis: {
            title: 'Time (years)',
            showgrid: true
        },
        yaxis: {
            title: 'Mortality Risk (%)',
            range: [0, 100],
            showgrid: true
        }
    };

    Plotly.newPlot('mortality-risk-graph', data, layout);
}
# flick 20250409213614-i9Te
# flick 20250409214219-tq0E
# flick 20250409214636-vZLR
# flick 20250409231148-OJJ3
# flick 20250410003641-tNrW
# flick 20250410004048-lp3U
# flick 20250410010503-VIxk
# flick 20250410013247-LRUY
# flick 20250410013758-VMZc
# flick 20250410031042-WBRT
# flick 20250410031739-zHqm
# flick 20250410032005-ZB0X
# flick 20250410032116-1GE4
# flick 20250410032813-KiKf
# flick 20250410130447-iibF
# flick 20250410131704-CH55
# flick 20250410133821-2jpl
# flick 20250410140620-taxe
# flick 20250410145603-3KGb
# flick 20250410152850-OFQh
# flick 20250410214247-s4P0
