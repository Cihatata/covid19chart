<script>
  import {mapActions,mapState} from 'vuex'
  import {Line} from "vue-chartjs";

  export default {
    extends: Line,

    props: {
      data: {type: Object, required: true},
    },

    computed:{

    },
    mounted() {
      this.renderChart(
        {
          labels: ['Ocak', 'Subat', 'Mart', 'Nisan'],
          datasets: [
            {
              label: this.data.name  +" Vaka Sayısı",
              data: this.data.cases.date,
              backgroundColor: "transparent",
              borderColor: "rgb(134,214,43)",
              pointBackgroundColor: "rgb(134,214,43)"
            },
            {
              label:this.data.name +" Ölü sayısı",
              data: this.data.deaths.date,
              backgroundColor: "transparent",
              borderColor: "rgba(171, 11, 18, 1)",
              pointBackgroundColor: "rgba(171, 11, 18, 1)"
            },
          ]
        },
        {
          id:'grafik',
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text:this.data.name +'\'daki Vaka ve Ölümler Grafiği',
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
            }]
          }
        }
      );
    }
  };
</script>

