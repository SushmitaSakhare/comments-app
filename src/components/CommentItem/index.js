// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeText = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const datePosted = formatDistanceToNow(date)

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="list-item">
      <div className="user-comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="user-details">
            <p className="name">{name}</p>
            <p className="time">{datePosted} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="btn-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button type="button" onClick={onClickLike} className={likeText}>
            Like
          </button>
        </div>
        <button
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
