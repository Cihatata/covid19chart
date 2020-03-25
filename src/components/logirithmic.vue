<script>
  import {Line} from "vue-chartjs";

  export default {
    name:"logirithmic",
    extends: Line,
    props: {
      confirmed: {type: Array, required: true},
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
              borderColor: "rgb(134,214,43)",
              pointBackgroundColor: "rgb(134,214,43)"
            },
            {
              label: "Toplam Vaka",
              data: this.confirmed[2],
              backgroundColor: "transparent",
              borderColor: "rgba(171, 11, 18, 1)",
              pointBackgroundColor: "rgba(171, 11, 18, 1)"
            },
            {
              label: "Cin disindaki vaka sayisi",
              data: this.confirmed[0],
              backgroundColor: "transparent",
              borderColor: "rgb(47,52,188)",
              pointBackgroundColor: "rgb(47,52,188)"
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Logaritmik Grafik',
            fontSize:24,
            padding:28,
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

