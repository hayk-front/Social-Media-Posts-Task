<template>
    <div class="header">
        <div class="header-content G-flex G-align-center G-justify-between">
            <router-link to="/">
                <p class="title">Evistep Task</p>
            </router-link>
            <router-link to="/create">
                <div class="create-post G-flex G-align-center G-justify-between">
                    <img src="../../public/icons/add.svg" alt="" class="add-icon">
                    <span>Create post</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/styles";

    .header {
        width: 100%;
        height: 100px;
        color: #fff;
        background-color: $grey;

        .header-content {
            width: 80%;
            height: 100px;
            margin: 0 auto;

            .title {
                font-size: 22px;
            }

            a{
                color: #fff;
            }

            .create-post {
                cursor: pointer;
                border-radius: 5px;
                padding: 10px 12px;
                min-width: 105px;
                background-color: $light_white_transparent;
                transition: all 0.3s;

                &:hover {
                    background-color: $white_transparent;
                }

                p {
                    text-decoration: none;
                    font-size: 19px;
                }

                .add-icon {
                    filter: $black_to_white;
                    width: 15px;
                }
            }
        }
    }
</style>