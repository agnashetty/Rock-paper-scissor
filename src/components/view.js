import React from 'react'

class RockPaperSci extends React.Component {

    constructor() {
        super()
        this.state = {
            playerVal: null,
            computerVal: null,
            playerScore: 0,
            compScore: 0
        }
    }

    caclScore = (playerVal, computerVal) => {
        if (playerVal === computerVal) {
            return 0;
        } else if ((playerVal === "ROCK" && computerVal === "SCISSORS") ||
            (playerVal === "SCISSORS" && computerVal === "PAPER") ||
            (playerVal === "PAPER" && computerVal === "ROCK")) {
            return 1;
        } else {
            return -1;
        }
    }



    DisplayScore = (playerChoice) => {

        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const compChoices = choices[Math.floor(Math.random() * choices.length)]
        const val = this.caclScore(playerChoice,compChoices)
        this.setState({
            playerVal: playerChoice,
            computerVal : compChoices
        })
        if (val==1){
            this.setState({
                playerScore: this.state.playerScore + 1
            })
        }else if (val == -1){
            this.setState({
                compScore: this.state.compScore + 1
            })
        }
    }



    render() {
        return (
            <div className="">
                <button style={{ margin: '10px' }} onClick={() => this.DisplayScore("ROCK")}>Rock</button>
                <button style={{ margin: '10px' }} onClick={() => this.DisplayScore("PAPER")}>Paper</button>
                <button style={{ margin: '10px' }} onClick={() => this.DisplayScore("SCISSORS")}>Scissor</button>
                <p>You chose : {this.state.playerVal} </p>
                <p>Computer chose : {this.state.computerVal}</p>
                <p>Your score : {this.state.playerScore} </p>
                <p>Computer's score : {this.state.compScore} </p>
            </div>
        )
    }
}

export default RockPaperSci
