import { HomeView } from './view'

const data = {
  salesChartData: {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        fillColor: 'rgb(210, 214, 222)',
        label: 'Electronics',
        pointColor: 'rgb(210, 214, 222)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgb(220,220,220)',
        pointStrokeColor: '#c1c7d1',
        strokeColor: 'rgb(210, 214, 222)'
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        fillColor: 'rgba(60,141,188,0.9)',
        label: 'Digital Goods',
        pointColor: '#3b8bba',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        pointStrokeColor: 'rgba(60,141,188,1)',
        strokeColor: 'rgba(60,141,188,0.8)'
      }
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  },

  salesChartOptions: {
    bezierCurve: true,
    bezierCurveTension: 0.3,
    datasetFill: true,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    legendTemplate: `<ul class='<%=name.toLowerCase()%>-legend'>
      <% for (var i=0; i<datasets.length; i++){%>
        <li>
          <span style='background-color:<%=datasets[i].lineColor%>'></span>
            <%=datasets[i].label%>
        </li>
            <%}%>
    </ul>`,
    maintainAspectRatio: true,
    pointDot: false,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    responsive: true,
    scaleGridLineColor: 'rgba(0,0,0,.05)',
    scaleGridLineWidth: 1,
    scaleShowGridLines: false,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    showScale: true
  },

  pieChartData: [
    {
      color: '#f56954',
      highlight: '#f56954',
      label: 'Chrome',
      value: 700
    },
    {
      color: '#00a65a',
      highlight: '#00a65a',
      label: 'IE',
      value: 500
    },
    {
      color: '#f39c12',
      highlight: '#f39c12',
      label: 'FireFox',
      value: 400
    },
    {
      color: '#00c0ef',
      highlight: '#00c0ef',
      label: 'Safari',
      value: 600
    },
    {
      color: '#3c8dbc',
      highlight: '#3c8dbc',
      label: 'Opera',
      value: 300
    },
    {
      color: '#d2d6de',
      highlight: '#d2d6de',
      label: 'Navigator',
      value: 100
    }
  ],

  pieChartOptions: {
    animateRotate: true,
    animateScale: false,
    animationEasing: 'easeOutBounce',
    animationSteps: 100,
    legendTemplate: `<ul class='<%=name.toLowerCase()%>-legend'>
      <% for (var i = 0; i<segments.length; i++){%>
        <li>
          <span style='background-color:<%=segments[i].fillColor%>'></span>
            <%if (segments[i].label) {%><%=segments[i].label %><%}%>
        </li >
            <%}%>
    </ul >`,
    maintainAspectRatio: false,
    percentageInnerCutout: 50, // This is 0 for Pie charts
    responsive: true,
    segmentShowStroke: true,
    segmentStrokeColor: '#fff',
    segmentStrokeWidth: 1,
    tooltipTemplate: '<%=value %> <%=label%> users'
  },

  visitorsReportData: {
    backgroundColor: 'transparent',
    hoverColor: false,
    hoverOpacity: 0.7,
    map: 'world_mill_en',
    markerStyle: {
      initial: {
        fill: '#00a65a',
        stroke: '#111'
      }
    },
    markers: [
      { latLng: [41.9, 12.45], name: 'Vatican City' },
      { latLng: [43.73, 7.41], name: 'Monaco' },
      { latLng: [-0.52, 166.93], name: 'Nauru' },
      { latLng: [-8.51, 179.21], name: 'Tuvalu' },
      { latLng: [43.93, 12.46], name: 'San Marino' },
      { latLng: [47.14, 9.52], name: 'Liechtenstein' },
      { latLng: [7.11, 171.06], name: 'Marshall Islands' },
      { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
      { latLng: [3.2, 73.22], name: 'Maldives' },
      { latLng: [35.88, 14.5], name: 'Malta' },
      { latLng: [12.05, -61.75], name: 'Grenada' },
      { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
      { latLng: [13.16, -59.55], name: 'Barbados' },
      { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
      { latLng: [-4.61, 55.45], name: 'Seychelles' },
      { latLng: [7.35, 134.46], name: 'Palau' },
      { latLng: [42.5, 1.51], name: 'Andorra' },
      { latLng: [14.01, -60.98], name: 'Saint Lucia' },
      { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
      { latLng: [1.3, 103.8], name: 'Singapore' },
      { latLng: [1.46, 173.03], name: 'Kiribati' },
      { latLng: [-21.13, -175.2], name: 'Tonga' },
      { latLng: [15.3, -61.38], name: 'Dominica' },
      { latLng: [-20.2, 57.5], name: 'Mauritius' },
      { latLng: [26.02, 50.55], name: 'Bahrain' },
      { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe' }
    ],
    normalizeFunction: 'polynomial',
    regionStyle: {
      hover: {
        cursor: 'pointer',
        'fill-opacity': 0.7
      },
      initial: {
        fill: 'rgba(210, 214, 222, 1)',
        'fill-opacity': 1,
        stroke: 'none',
        'stroke-opacity': 1,
        'stroke-width': 0
      },
      selected: {
        fill: 'yellow'
      },
      selectedHover: {}
    }
  }
}

export function HomePage(attrs, children) {
  attrs.data = data
  return HomeView(attrs, children)
}
