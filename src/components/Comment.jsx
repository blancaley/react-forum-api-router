const Comment = ({ name, email, body }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
}
 
export default Comment;