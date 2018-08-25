console.log("the app is running")
const appRoot = document.getElementById("app");
//jsx -> javascript xml

const app = {
    title: "Indecision App",
    subtitle:"Let the computer make decisions for you",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }

}

const clearOptions = () =>{
    app.options = [];
    renderApp();
}

const selectRandom = () => {
    let randomNo = Math.floor(Math.random() * app.options.length);
    let option = app.options[randomNo];
    alert("Go for " + option);
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={selectRandom}>What should I do?</button>
            <button onClick={clearOptions}>Clear All</button>
            <ol>
                {app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
}

renderApp();