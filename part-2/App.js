const App = () =>{
    return (
        <div>
            <h1>Tweets</h1>
            <Tweet username="user1" name="n1" date="1/1/20" msg="I really like toast"></Tweet>
            <Tweet username="user2" name="n2" date="1/1/20" msg="I really like PB & J"></Tweet>
            <Tweet username="user3" name="n3" date="1/1/20" msg="i'm allergic to PB & J"></Tweet>

        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
