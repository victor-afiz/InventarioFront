import  React, { Component } from 'react';

import './Test.css';
const NUMBERS = ['7','8','9','4','5','6','1','2','3','0'];
class Test extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            nickName : "",
            name : "",
            photo : "",
            rolID : "",
            password : "",
            email : "",
            maganers : ""
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {

        const checkStatus = response => {
            const hasError = (response.status < 200 || response.status >= 300)
            if (hasError) {
                console.log(response.text());
            }else {
                console.log('ok');
            }
            return response;
        };

        // fetch("http://127.0.0.1:8000/Manager/")
        //     .then(checkStatus)
        //     .catch(err => {
        //         console.log(err)
        //     });

        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })

    };

    handleOnSubmitPost(e) {

        const checkStatus = response => {

            const hasError = (response.status < 200 || response.status >= 300)
            if (hasError) {
                console.log(response.text());
            }else {
                console.log(response.text());
            }
            return response;
        };


        fetch('/Manager/create/', {
            method: 'POST',
            body: JSON.stringify({
                nickName :NUMBERS,
                name : "aafaaaa",
                photo : "e",
                rolID : "CURfRENT MANAGER",
                password : "e",
                email : "aaaafaa@DFG.DF"
            })
        }).then(checkStatus).catch(err => {
            console.log(err)
        });
    }
    handleOnSubmitGet(e) {

        const checkStatus = response => {
            const hasError = (response.status < 200 || response.status >= 300)
            if (hasError) {
                console.log(response.text());
            }else {
                console.log(response.json());
            }
            return response;
        };

        fetch("/Manager/delete/?id=4",{method: 'GET'})
            .then(checkStatus)
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return(
            <div className="container  Login">
                <form className="forum" >

                    <div className="tab-content">
                        <br/>
                        <div id="menu1" className="container tab-pane active form-group">

                            <input type="text" value={this.state.nickName} onChange={this.handleChange} className="form-control" placeholder="nickName*" name="nickName" id="email" />
                            <br/>
                            <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="name*" name="name" />
                            <br/>
                            <input type="text" value={this.state.photo} onChange={this.handleChange} className="form-control" placeholder="photo*" name="photo" />
                            <br/>
                            <input type="number" value={this.state.rolID} onChange={this.handleChange} className="form-control" placeholder="rolID*" name="rolID" />
                            <br/><input type="password" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="email*" name="email" />
                            <br/>
                            <button type="button"  onClick={this.handleOnSubmitPost} className="btn btn-warning btn-lg btn-block">Entrar</button>
                            <br/>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}
export default Test;


// import  React, { Component } from 'react';
//
// import './Test.css';
//
// class Test extends Component
// {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             showMenu : "",
//         };
//
//     }
//     render () {
//         return(
//             <div>
//
//             </div>
//         );
//
//     }
// }
//     export default Test;