const Tweet = ({username, name, date, msg}) => {
    return (
        <div class="tweet">
            <ul>
                <li class="tweet-metadata">
                    <b>{username}</b> @{name}
                </li>
                <li>{msg}</li>
            </ul>
        </div>
    );
}