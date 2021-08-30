<template>
    <div>
        <div class="post" v-for="(post, index) in posts" :key="index">
            <div class="post-content G-flex G-flex-column G-justify-between">
                <p class="post-title">{{ post.title }}</p>
                <p class="post-body">{{ post.body }}</p>
                <div class="post-buttons G-flex G-align-center">
                    <div class="post-btn see-comments-btn  G-flex G-align-center" @click="getComments(post)">
                        <img src="../../public/icons/comment.svg" alt="" class="post-icon comment-icon">
                        <span>See comments</span>
                    </div>
                    <div class="post-btn view-btn  G-flex G-align-center" @click="viewPost(post)">
                        <img src="../../public/icons/view.svg" alt="" class="post-icon view-icon">
                        <span>View</span>
                    </div>

                    <div class="post-btn update-btn  G-flex G-align-center" @click="getPost(post)">
                        <img src="../../public/icons/edit.svg" alt="" class="post-icon update-icon">
                        <span>Update</span>
                    </div>
                    <div class="post-btn delete-btn  G-flex G-align-center" @click="deletePost(post.id)">
                        <img src="../../public/icons/remove.svg" alt="" class="post-icon delete-icon">
                        <span>Delete</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Post",
        computed: {
            ...mapState({
                posts: state => state.requests.posts,
            }),
        },
        methods: {
            deletePost(id) {
                this.$store.dispatch('deletePost', id);
            },
            getPost(post) {
                this.$store.commit('setCurrentPost', post);
                this.$router.push('/update')
            },
            viewPost(post) {
                this.$store.dispatch('getDetails', post.id).then(() => {
                    this.$store.commit('setCurrentPost', post);
                    this.$router.push('/details')
                });
            },
            getComments(post) {
                this.$store.dispatch('getComments', post.id).then(() => {
                    this.$store.commit('setCurrentPost', post);
                    this.$router.push('/comments')
                });
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/styles";

    .post {
        width            : 100%;
        height           : fit-content;
        padding          : 20px 0;
        border-radius    : 8px;
        color            : #fff;
        margin-bottom    : 20px;
        background-color : $light_white_transparent;

        .post-content {
            width      : 90%;
            min-height : 130px;
            margin     : 0 auto;

            .post-title {
                font-size : 18px;
                color     : $light_white;
            }

            .post-buttons {
                a {
                    text-decoration : none;
                    color           : #fff;
                }

                .post-btn {
                    cursor           : pointer;
                    border-radius    : 5px;
                    margin-right     : 3%;
                    padding          : 5px 10px;
                    max-width        : 145px;
                    background-color : $light_white_transparent;
                    transition       : all 0.3s;

                    &:hover {
                        background-color : $white_transparent;
                    }
                }

                .post-icon {
                    margin-right : 10px;
                    width        : 15px;
                    filter       : $black_to_white;
                }
            }
        }
    }

</style>