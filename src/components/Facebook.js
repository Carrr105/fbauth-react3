import React from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends React.Component {

    state = {
        name: '',
        photo: '',
        isAuth: false
    };

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            name: response.name,
            photo: response.picture.data.url,
            isAuth: true
        });
        
    }

    render(){
        let fbdata;
        this.state.isAuth ?
        fbdata = (
        <div>
            <img src={this.state.photo} alt={this.state.name} />
            <h2>Bienvenid@ {this.state.name}!</h2>
        </div>
        ) : 
        fbdata = (<FacebookLogin
        appId="your_key_here"
        autoLoad={true}
        fields="name,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />);
        return (
            <>
                {fbdata}
            </>
        );
    }
}

export default Facebook;