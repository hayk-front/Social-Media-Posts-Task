export const requests = {
    state: {
        posts: [],
        comments: [],
        currentPost: [],
        details: null,
    },
    actions: {
        getPosts({commit}) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => commit('gotPosts', json))
                .catch(error => console.log(error))
        },
        createPost({commit}, post_details) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: post_details.title,
                    body: post_details.body,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => commit('newPost', json))
                .catch(error => console.log(error))
        },
        getComments({commit}, post_id) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + post_id + '/comments')
                .then((response) => response.json())
                .then((json) => commit('gotComments', json))
                .catch(error => console.log(error))
        },
        getDetails({commit}, post_id) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + post_id)
                .then((response) => response.json())
                .then((json) => commit('gotDetails', json))
                .catch(error => console.log(error))
        },
        updatePost({commit}, post_details) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + post_details.id, {
                method: 'PUT',
                body: JSON.stringify({
                    id: post_details.id,
                    title: post_details.title,
                    body: post_details.body,
                    userId: post_details.userId
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    const obj = {
                        json: json,
                        post: post_details
                    }
                    commit('updatedPost', obj)
                })
                .catch(error => console.log(error))
        },
        deletePost({commit}, post_id) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + post_id, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((json) => {
                    const obj = {
                        json: json,
                        id: post_id
                    }
                    commit('deletedPost', obj)
                })
                .catch(error => console.log(error))
        }
    },
    mutations: {
        gotPosts(state, data) {
            state.posts = data;
        },
        setCurrentPost(state, data) {
            state.currentPost = data;
        },
        gotComments(state, data) {
            state.comments = data;
        },
        gotDetails(state, data) {
            state.details = data;
        },
        newPost(state, data) {
            // Adding the new post to array by myself just to show, because API is fake :)
            if (data) {
                state.posts.unshift(data)
            }
        },
        updatedPost(state, data) {
            // Updating by myself, just to show,  because API is fake :)
            if(data.json){
                const updated = state.posts.findIndex(el => el.id === data.post.id);
                if(updated > -1){
                    state.posts[updated] = data.post
                    alert('The post was updated successfully')
                }
            }
        },
        deletedPost(state, data) {
            // Deleting the post from array by myself just to show, because API is fake :)
            if (data.json) {
                const deleted = state.posts.findIndex(el => el.id === data.id);
                if (deleted > -1) {
                    state.posts.splice(deleted, 1);
                }
            }
        },
    },
};