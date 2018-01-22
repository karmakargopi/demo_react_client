import React from 'react';
import ReactDOM from 'react-dom';
//You need this npm package to do createReactClass
import CreateReactClass from 'create-react-class';

const App = CreateReactClass ({
    render: function () {
        return (
            <div>
                <div id = "header"></div>
                <div className = "container">
                    <div className = "column">
                        <InboxPane />
                    </div>
                    <div className = "column">
                        <ChatPane />
                    </div>
                    <div className = "column">
                        <MsgPane />
                    </div>
                </div>
            </div>
        );
    }
});

const InboxPane = CreateReactClass({
    render: function() {
        return (
            <div id = "inbox-pane">
                <h1>Inbox</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Chat Received</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <InboxItem /> 
                    </tbody>
                </table>
            </div>
        );
    }
});

const InboxItem = CreateReactClass({
    render: function() {
        return (
            <tr>
                <td>5P.M</td>
                <td>I wud like a pizza</td>
                <td>Confirmed</td>
            </tr>
        );
    }
});

const ChatPane = CreateReactClass({

    render: function() {
        return (
            <div id = "inbox-pane">
                <h1>Chat</h1>
            </div>
        );
    }
});

const MsgPane = CreateReactClass({

    render: function() {
        return (
            <div id = "inbox-pane">
                <h1>Message</h1>
            </div>
        );
    }
});
ReactDOM.render(<App />, document.getElementById('main'));