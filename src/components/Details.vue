<template>
    <div class="details">
        <p class="title">Post details:</p>
        <div class="post">
            <div class="post-content G-flex G-flex-column G-justify-between" v-if="details">
                <p class="row"><span>ID:</span> {{ details.id }}</p>
                <p class="row"><span>User ID:</span> {{ details.userId }}</p>
                <p class="row"><span>Title:</span> {{ details.title }}</p>
                <p class="row"><span>Body:</span> {{ details.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Details",
        computed: {
            ...mapState({
                currentPost: state => state.requests.currentPost,
                details: state => state.requests.details,
            }),
        },
        mounted() {
            if (!Object.keys(this.currentPost).length) {
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/styles";

    .details{
        .title{
            font-size: 26px;
            margin-bottom: 1%;
        }

        .post {
            width            : 100%;
            height           : fit-content;
            padding          : 20px 0;
            border-radius    : 8px;
            margin-bottom    : 3%;
            background-color : $light_white_transparent;

            .post-content {
                width      : 98%;
                min-height : 80px;
                margin     : 0 auto;

                .row{
                    span{
                        color: $light_grey;
                        margin-right: 10px;
                    }
                }
            }
        }
    }


</style>