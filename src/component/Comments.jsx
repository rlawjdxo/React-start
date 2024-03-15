import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../modules/comments';

const Comments = ({ fetchComments, comments, loading }) => {
    useEffect(() => {
        fetchComments()
    }, []);

    if (loading) return <h1>Loading......</h1>
    return (
        <div className="comments">
            {comments.map(comment =>
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            )}
        </div>
    )
};


const mapStateToProps = ({ comments }) => {
    return {
        comments: comments.items, 
        loading: comments.loading
    }
}
const mapDispatchToProps = {
    fetchComments
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);