import React from "react";

class Login extends React.Component {
    render() {
        return (
        <div className="container2">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <input id="email" type="text" placeholder="email" className="field" />
                <input id="password" type="password" placeholder="password" className="field" />
                <input type="submit" onClick={this.handleClick} value="login" className="btn"></input>
            </form>
        </div>
        );
    }
    
    handleClick = e => {
        e.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'password': document.getElementById('password').value,
                'app': 'APP_BCK'
            },
            body: JSON.stringify({ 'email': document.getElementById("email").value })
        };
        fetch('https://dev.tuten.cl:443/TutenREST/rest/user/testapis%40tuten.cl', requestOptions)
        .then(response => response.json())
        .then(respuestaRest => {
            if(null != respuestaRest && null != respuestaRest.sessionTokenBck && "" != respuestaRest.sessionTokenBck){
                console.log("sessionTokenBck: " + respuestaRest.sessionTokenBck);
                //this.props.history.push('/home');
                this.props.history.push({ 
                    pathname: '/home',
                    token: respuestaRest.sessionTokenBck
                });
                
            } else{
                alert("Error login");
            }
        });

        
    };

    /**let obtenerHoraObj = {
            'time': '11:23:50',
            'timezone': '2'
        };
        fetch("http://localhost:8080/obtenerHora", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept": "application/json"
            },
            body: JSON.stringify(obtenerHoraObj),
        })
            .then(response => response.json())
            .then(respuestaRest => {
                console.log("Time: " + respuestaRest.response.time);
                console.log("Timezone: " + respuestaRest.response.timezone);
            }
        );*/
 
}
export default Login;