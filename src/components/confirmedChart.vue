
<script>
  import { Line } from "vue-chartjs";

  export default {
    extends: Line,
    props:{
      confirmed:{type:Array,required:true},
      labels:{type: Array,required: true}
    },
    methods:{
      test(){
        console.log('sa');
      }
    },
    mounted() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              label: "Data 1",
              data: this.confirmed,
              backgroundColor: "transparent",
              borderColor: "rgba(1, 116, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)"
            },
            {
              label: "Data 3",
              data: [12, 110, 50, 9, 0, 10, 20],
              backgroundColor: "transparent",
              borderColor: "rgba(111, 16, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)"
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "My Data"
          }
        }
      );
    }
  };
</script>

