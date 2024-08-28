function LikeButton() {
    const [Liked, setLiked] = React.useState(false);
    const text = Liked ? '좋아요 취소' : '좋아요';
    return React.createElement(
        'button',
        { onClick: () => setLiked(!Liked) },
        text,
    );
}
const domContainer = document.querySelector('#react-root')
ReactDOM.render(React.createElement(LikeButton), domContainer)