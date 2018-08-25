let count = 0;

const plusOne = () => {
    count++;
    renderApp();
}

const minusOne = () => {
    count--;
    renderApp();
}
const resetCount = () => {
    count = 0;
    renderApp();
}


const renderApp = () =>{
    const templateTwo = (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCount}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}

renderApp();