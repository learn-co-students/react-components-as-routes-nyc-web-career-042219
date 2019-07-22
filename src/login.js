import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div> <br/><br/>
                <form>
                    <div>
                        <label htmlFor='username'>Username</label><br />
                        <input type='text' name='username' placeholder='Username' /><br /><br />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label><br />
                        <input type='password' name='password' placeholder='Password' /><br /><br />
                    </div>
                    <input type='submit' value='Login' />
                </form>
            </div>
        )
    }
}

export default Login;