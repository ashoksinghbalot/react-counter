import React from "react";


class Footer extends React.PureComponent {
    constructor(){
        super()

        this.state = {
            name: "test",
            counter : 0
        }
    }

    incrementCounter = () => {
        this.setState((prev) => ({
            counter: prev.counter + 1
        }))
    }

    componentDidMount() {
        setTimeout(this.incrementCounter, 100)
    }


    componentDidUpdate() {
        setTimeout(this.incrementCounter,100)
    }

    componentWillUnmount(){
        console.log("Unmounting")
    }

    render(){
        const {name, counter} = this.state
        console.log(counter)
        return(
            <div id="footer">
                <h1>my footer {name} {counter} </h1>
            </div>
        )
    }
}

export default Footer