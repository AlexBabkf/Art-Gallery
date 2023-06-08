export default function CommentForm({ slug, onSubmitComment }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const input = new FormData(event.target);
    const data = Object.fromEntries(input);
    onSubmitComment(slug, data.comment);
    event.target.reset();
    event.target.elements.comment.focus();
  }

  return (
    <div>
      <h5>Add comment...</h5>
      <form onSubmit={handleFormSubmit}>
        <textarea name="comment" id="comment" cols="30" rows="5"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
