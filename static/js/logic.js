var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

d3.json(url, function (data) {
    createFeatures(data.features);
});

function getColor(d) {

    return d < 1 ? 'rgb(255,255,178)' :
        d < 2 ? 'rgb(254,204,92)' :
            d < 3 ? 'rgb(253,141,60)' :
                d < 4 ? 'rgb(240,59,32)' :
                    'rgb(189,0,38)';
}

