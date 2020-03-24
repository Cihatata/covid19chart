<script>
  import {Line} from "vue-chartjs";

  export default {
    extends: Line,
    data: {
      xx: [{
        "x": "2020-01-22",
        "y": {"totalConfirmed": 555, "mainlandChina": 548, "otherLocations": 7}
      }, {"x": "2020-01-23", "y": {"totalConfirmed": 654, "mainlandChina": 643, "otherLocations": 11}}]
    },
    props: {
      confirmed: {type: Array, required: true},
      labels: {type: Array, required: true}
    },
    methods: {
      test() {
        console.log('sa');
      }
    },
    mounted() {
      this.renderChart(
        {
          labels: ['Ocak', 'Subat', 'Mart', 'Nisan'],
          datasets: [
            {
              label: "Cin'deki vaka sayisi",
              data: this.confirmed[1],
              backgroundColor: "transparent",
              borderColor: "rgba(1, 116, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)"
            },
            {
              label: "Toplam Vaka",
              data: this.confirmed[2],
              backgroundColor: "transparent",
              borderColor: "rgba(1, 116, 18, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)"
            },
            {
              label: "Cin disindaki vaka sayisi",
              data: this.confirmed[0],
              backgroundColor: "transparent",
              borderColor: "rgba(111, 16, 18, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)"
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Custom Chart'
          },
          scales: {
            xAxes: [{
              type: 'time',
              //distribution: "linear",
              ticks: {
                min: 1577883661000,
                max: 1587734407000,
              },
              time: {
                unit: 'month'
              },
            }]
          }
        }
      );
    }
  };
</script>

