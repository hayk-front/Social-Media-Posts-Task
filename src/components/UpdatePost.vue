<template>
    <div>
        <div class="post">
            <div class="post-content G-flex G-flex-column G-justify-between">
                <form @submit.prevent="update">
                    <span>Title:</span>
                    <div class="P-input-box">
                        <label>
                            <input type="text" ref="postTitle">
                        </label>
                    </div>
                    <span>Body:</span>
                    <div class="P-input-box">
                        <label>
                        <textarea rows="6" cols="100" ref="postBody">
                        </textarea>
                        </label>
                    </div>

                    <button class="create-btn G-flex G-align-center" type="submit">
                        <img src="../../public/icons/check.svg" alt="" class="create-icon">Save
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "CreatePost",
        computed: {
            ...mapState({
                currentPost: state => state.requests.currentPost,
            }),
        },
        methods: {
          update(){
              const postDetails = {
                  id: this.currentPost.id,
                  title: this.$refs.postTitle.value,
                  body: this.$refs.postBody.value,
                  userId:  this.currentPost.userId,
              }
              this.$store.dispatch('updatePost', postDetails)
          }
        },
        mounted(){
            if(Object.keys(this.currentPost).length){
                this.$refs.postTitle.value = this.currentPost.title;
                this.$refs.postBody.value = this.currentPost.body;
            }else{
                this.$router.push('/')
            }
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

            .P-input-box {
                width   : 30%;
                padding : 15px 0;

                label {
                    display : block;
                    width   : 100%;

                    input {
                        width            : 100%;
                        background-color : #fff;
                        border-radius    : 8px;
                        padding          : 0 8px;
                        height           : 30px;
                        outline          : none;
                        border           : none;
                    }

                    textarea {
                        width            : 100%;
                        background-color : #fff;
                        border-radius    : 8px;
                        padding          : 3px 5px;
                        outline          : none;
                        border           : none;
                    }
                }
            }

            .post-title {
                font-size : 18px;
                color     : $light_white;
            }

            .create-btn {
                cursor           : pointer;
                font-size        : 18px;
                border-radius    : 5px;
                margin-right     : 3%;
                padding          : 8px 12px;
                border           : none;
                color            : #fff;
                background-color : $light_white_transparent;
                transition       : all 0.3s;

                &:hover {
                    background-color : $white_transparent;
                }

                .create-icon {
                    margin-right : 10px;
                    width        : 15px;
                    filter       : $black_to_white;
                }
            }
        }
    }
</style>