import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
    return date.toLocaleDateString();
  }

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    var obj = {name: "Clovis",
            avatarUrl: "url"};
    return (
        <div>
            <Welcome name="Sara" />
            <Comment date={new Date()} author={obj} />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <UserInfo user={props.author} />
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);