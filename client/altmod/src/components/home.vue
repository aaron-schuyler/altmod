<template>
    <div class="home">

        <h1>Welcome to Altmod!</h1>

        <div class="symbols">* * *</div>

        <p>Altmod is my experimental art project that will incorperate several mediums of creativity, using cutting edge web development languages to make an environment that makes exploring the content easy and intuitive.<br><br> This project will be home to design, music, and writing created by myself, and others as I expand. This project will never be finished, so in the meantime, feel free to check out the content that is already here. It's here for your enjoyment!</p>
    </div>
</template>

<script>
    // import Api from '../api.js'
    export default {
        name: 'Home',
        data() {
            return {


            }
        },
        mounted() {

        },
        methods: {
            formatDate: function(date) {
                const dateTime = new Date(date)
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
                var day = dateTime.getDay() + 1
                var month = months[dateTime.getMonth()]
                var year = dateTime.getYear() + 1900
                return month + " " + day + ", " + year
            }
        }
    }

</script>

<style scoped>
    h1 {
        text-align: center;
    }

    .symbols {
        font-family: monospace;
        text-align: center;
        width: 100%;
        margin: auto;
        font-size: 100px;
        color: yellow;
    }

</style>
