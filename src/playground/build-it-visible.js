const appRoot = document.getElementById('app');

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.visibilityToggleHandler = this.visibilityToggleHandler.bind(this);
        this.state = {
            visibility:false
        };
    }
    visibilityToggleHandler(){
        this.setState((prevState) =>{
            return {
                visibility : !prevState.visibility
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Toggle Visible</h1>
                <button onClick={this.visibilityToggleHandler}>{this.state.visibility?'Hide':'Show'}</button>
                {this.state.visibility && <p>Top secret details ;)</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />,appRoot);

// let visible = false;

// const toggle = () => {
//     visible = !visible;
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Toggle visible</h1>
//             <button onClick={toggle}>{visible?'Hide':'Show'}</button>
//             {visible && 
//                 (<div>
//                     <p>Text is now visible</p>
//                 </div>)
//             }
//         </div>
//     )
    
//     ReactDOM.render(template,appRoot);
// }

// renderApp();