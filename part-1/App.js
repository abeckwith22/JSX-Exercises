const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name="John Doe"/>
        </div>
    );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);