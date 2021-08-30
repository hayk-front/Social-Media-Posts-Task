<template>
    <div class="G-flex G-flex-column G-align-end">
        <div class="post">
            <div class="post-content G-flex G-flex-column G-justify-between">
                <p class="post-title">Title: {{ currentPost.title }}</p>
                <p class="post-body">Body: {{ currentPost.body }}</p>
            </div>
        </div>
        <div class="comment-section">
            <p class="title">Comments:</p>
            <div class="comment" v-for="(comment, index) in comments" :key="index">
                <div class="comment-content">
                    <p class="row"><span>Name:</span> {{ comment.name }}</p>
                    <p class="row"><span>Email:</span> {{ comment.email }}</p>
                    <p class="row"><span>Comment:</span> {{ comment.body }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Comments",
        computed: {
            ...mapState({
                currentPost: state => state.requests.currentPost,
                comments: state => state.requests.comments,
            }),
        },
        mounted() {
            if (!Object.keys(this.currentPost).length) {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/styles";

    .title {
        font-size     : 24px;
        margin-bottom : 1%;
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

            .post-title {
                font-size : 18px;
                color     : $light_white;
            }
        }
    }

    .comment-section {
        width: 98%;

        .comment {
            width            : 100%;
            height           : fit-content;
            padding          : 20px 0;
            border-radius    : 8px;
            margin-bottom    : 3%;
            background-color : $light_white_transparent;

            .comment-content {
                width      : 98%;
                margin     : 0 auto;

                .row {
                    margin-bottom : 8px;

                    span{
                        color: $light_grey;
                        margin-right: 10px;
                    }
                }
            }
        }
    }

</style>