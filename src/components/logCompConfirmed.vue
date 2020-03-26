<script>
  import {Line} from "vue-chartjs";

  export default {
    name:"logirithmic",
    extends: Line,
    props: {
      confirmeddata: {type: Array, required: true},
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
              label: this.confirmeddata[0].name,
              data: this.confirmeddata[0].date,
              backgroundColor: "transparent",
              borderColor: "rgb(134,214,43)",
              pointBackgroundColor: "rgb(134,214,43)"
            },
            {
              label: this.confirmeddata[1].name,
              data: this.confirmeddata[1].date,
              backgroundColor: "transparent",
              borderColor: "rgba(171, 11, 18, 1)",
              pointBackgroundColor: "rgba(171, 11, 18, 1)"
            },
            {
              label: this.confirmeddata[2].name,
              data: this.confirmeddata[2].date,
              backgroundColor: "transparent",
              borderColor: "rgb(255,23,59)",
              pointBackgroundColor: "rgb(255,23,59)"
            },
            {
              label: this.confirmeddata[3].name,
              data: this.confirmeddata[3].date,
              backgroundColor: "transparent",
              borderColor: "rgb(47,22,18)",
              pointBackgroundColor: "rgb(47,22,18)"
            },
            {
              label: this.confirmeddata[4].name,
              data: this.confirmeddata[4].date,
              backgroundColor: "transparent",
              borderColor: "rgb(47,252,255)",
              pointBackgroundColor: "rgb(47,252,255)"
            },
            {
              label: this.confirmeddata[5].name,
              data: this.confirmeddata[5].date,
              backgroundColor: "transparent",
              borderColor: "rgb(131,21,255)",
              pointBackgroundColor: "rgb(131,21,255)"
            },
            {
              label: this.confirmeddata[6].name,
              data: this.confirmeddata[6].date,
              backgroundColor: "transparent",
              borderColor: "rgb(232,222,38)",
              pointBackgroundColor: "rgb(232,222,38)"
            },

          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Ülkerdeki Logaritmik Vaka Artışları',
            fontSize:24,
            padding:28,
          },
          scales: {
            xAxes: [{
              type: 'time',
              //distribution: "linear",
              ticks: {
                min: 1582227834000,
                max: 1585851719000,
              },
              time: {
                unit: 'day'
              },
            }],
            yAxes: [{
              type: 'logarithmic',
              position: 'left'
            }]
          }
        }
      );
    }
  };
</script>

