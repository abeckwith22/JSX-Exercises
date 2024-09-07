const App = () => {
    return (
        <div>
            <Person name="Jannet" age={18}/>
            <Person name="John" age={10}/>
            <Person name="Shorfellow Elliot" age={21}/>
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);