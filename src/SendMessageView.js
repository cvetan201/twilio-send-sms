import React from "react";

export default class SendMessageView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            to: '',
            from: '+13185157689',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({ [name]: event.target.value });
    }

    async sendSMS() {
        const to = this.state.to;
        const from = this.state.from;
        const message = this.state.message;

        const body = {
            fromNumber: from,
            toNumber: to,
            messageBody: message
        };

        const options = {
            method: 'POST',
            body: new URLSearchParams(body),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        };

        // Make the network request using the Fetch API
        fetch('https://send-sms-2478.twil.io/outbound-sms', options)
            .then(resp => resp.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div>
                <label>
                    To:
                    <input type="text" value={this.state.to} onChange={this.handleChange} name="to" />
                </label>
                <label>
                    From:
                    <input type="text" value={this.state.from} onChange={this.handleChange} name="from" />
                </label>
                <label>
                    Message:
                    <textarea type="text" value={this.state.message} onChange={this.handleChange} name="message" />
                </label>
                <button type="submit" onClick={e => this.sendSMS()}>Send</button>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         url: state.flex.config.serviceBaseUrl.slice(0, 5) === 'https'
//             ? (state.flex.config.serviceBaseUrl.slice(-1) === '/' ? state.flex.config.serviceBaseUrl.substring(0, state.flex.config.serviceBaseUrl.length - 1) : state.flex.config.serviceBaseUrl)
//             : ('https://' + (state.flex.config.serviceBaseUrl.slice(-1) === '/' ? state.flex.config.serviceBaseUrl.substring(0, state.flex.config.serviceBaseUrl.length - 1) : state.flex.config.serviceBaseUrl))
//     }
// }