<script>
  import {mapActions,mapState} from 'vuex'
  import {Line} from "vue-chartjs";

  export default {
    extends: Line,

    props: {
      data: {type: Object, required: true},
    },
    methods: {

    },
    computed:{

    },
    mounted() {
      this.renderChart(
        {
          labels: ['Ocak', 'Subat', 'Mart', 'Nisan'],
          datasets: [
            {
              label: this.data.name  + "Günlük Açıklanan vaka sayısı",
              data: this.data.cases.date,
              hoverBorderColor:"rgba(134,214,43)",
              backgroundColor: "rgb(232,222,38)",
              hoverBackgroundColor: "rgb(134,214,43)",
              pointBackgroundColor: "rgb(134,214,43)"
            },
            {
              label:this.data.name +" Günlük Açıklanan ölü sayısı",
              data: this.data.deaths.date,
              backgroundColor: "rgba(171, 11, 18, 1)",
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
            text:this.data.name +'\'Günlük Açıklanan vaka ve ölüm sayısı',
            fontSize:24,
            padding:28,
          },
          scales: {
            xAxes: [{
              stacked:true,
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

