import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class Indecision extends React.Component{
    state = {
        options : [],
        selectedOption : undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ( {options : []} ));
    }

    handlePickOption = () => {
        const randNO = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randNO];
        this.setState(()=>({selectedOption:option}));
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid item to add.'
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists.'
        }
        this.setState((prevState) => ( {options : prevState.options.concat(option)} ));
    }

    handleDeleteAOption = (optionToDelete) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option)=>{
                    return optionToDelete !== option;
                })
            };
        });
    }

    handleClearSelectedOption = () => {
        this.setState(()=>({
            selectedOption:undefined
        }))
    }

    //React life cycle
    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if(options){
                this.setState( ()=> ({options}) );
            }
        }catch(e){
            //Do nothing at all
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options",json);
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render(){
        const subtitle = "Put your fate in computer's hands"
        return(
            <div>
                <Header subtitle={subtitle}/>
                                
                <div className="container">

                    <Action hasOptions={this.state.options.length > 0}
                        handlePickOption={this.handlePickOption}
                    />
                    <div className="widget">
                        <Options options={this.state.options} 
                            removeAll={this.handleDeleteOptions} 
                            handleDeleteAOption={this.handleDeleteAOption}
                        />
                        
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearOption={this.handleClearSelectedOption}
                ></OptionModal>
            </div>
        );
    }
}

export default Indecision;