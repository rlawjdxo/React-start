import React, { useEffect } from 'react'
import { getPost } from '../modules/posts'
import { connect } from 'react-redux'
const Post = ({ getPost, loading, post }) => {
    useEffect(() => {
        getPost(2)
    }, []);
    if (loading) return <h1>Loading......</h1>
    return (
        <div>
            <h1>포스트</h1>
            <div>
                <h2>{post.id} : {post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    )
}
const mapStateToProps = ({ posts }) => {
    return {
        post: posts.post, loading: posts.loading,
    }
}
const mapDispatchProps = {
    getPost: (id) => getPost(id)
}
export default connect(mapStateToProps, mapDispatchProps)(Post)