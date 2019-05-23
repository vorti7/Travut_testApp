import Amplify, { Auth } from 'aws-amplify';
import aws_config from '../aws-exports';
import RNNNavigator from '../navigation/navigator'


Amplify.configure(aws_config);

const AuthClass = {
    /*
    Signup Info example
    {
        username: useremail,
        password: userpassword,
        attributes: {
        name: username,
        }
    }
    */
    signupTraveler(signupInfo){
        return new Promise(function (resolve, reject){
            RNNNavigator.showOverlay("spinnerOverlay", "travut.loadingOverlayComponent")
            Auth.signUp(signupInfo)
            .then(success => {
                RNNNavigator.dismissOverlay("spinnerOverlay")
                resolve("success")
            })
            .catch(err => {
                RNNNavigator.dismissOverlay("spinnerOverlay")
                reject(err.message)
            })
        })
    },

    checkLogin(){
        console.log('login checking')
        return new Promise(function (resolve, reject){
            Auth.currentSession()
                    .then(data => {
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
        })
    },

    checkLoginChangePage(cmpId, yesSession, noSession){
        console.log('checkLoginChangePage called')
        this.checkLogin().then(success => {
            console.log('session found ', cmpId)
            RNNNavigator.setRootScreen(cmpId, yesSession)
        })
        .catch(err => {
            console.log('no session found ', cmpId)
            RNNNavigator.setRootScreen(cmpId, noSession)
        })
    },

    loginTraveler(loginEmail, loginPassword){
        console.log(loginEmail,loginPassword)
        return new Promise(function (resolve, reject){
            RNNNavigator.showOverlay("spinnerOverlay", "travut.loadingOverlayComponent")
            Auth.signIn(loginEmail, loginPassword)
                .then(success => {
                    console.log('\nlogin success\n'+JSON.stringify(success))
                    RNNNavigator.dismissOverlay("spinnerOverlay")
                    resolve('success')
                })
                .catch(err => {
                    console.log('\nlogin failed\n'+JSON.stringify(err))
                    RNNNavigator.dismissOverlay("spinnerOverlay")
                    reject(err.message)
                });
        })
    },

    logoutTraveler(){
        return new Promise(function (resolve, reject){
            Auth.signOut()
                .then(success => {
                    resolve(success)
                })
                .catch(err => {
                    reject(err.message)
                });
        })
    },

    changePassword(oldPassword, newPassword){
        //Login Required
        Auth.currentAuthenticatedUser()
        .then(user => {
            return Auth.changePassword(user, oldPassword, newPassword);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },

    //attr : 'phone_number' or 'email'
    sendForVerify(attr){
        Auth.verifyCurrentUserAttribute(attr)
        .then(() => {
            console.log('a verification code is sent');
        }).catch((e) => {
            console.log('failed with error', e);
        });
    },

    //attr : 'phone_number' or 'email'
    verfyUserByCode(attr, code){
        Auth.verifyCurrentUserAttributeSubmit(attr, code)
        .then(() => {
            console.log('user verified');
        }).catch(e => {
            console.log('failed with error', e);
        });
    },

    requestForgotPassword(username){
        Auth.forgotPassword(username)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },

    getForgotPassword(username, code, new_password){
        Auth.forgotPasswordSubmit(username, code, new_password)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },




    getInfoTraveler(){
        Auth.currentAuthenticatedUser()
                .then(data => console.log('currentAuthenticatedUser data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        Auth.currentCredentials()
                .then(data => console.log('currentCredentials data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        Auth.currentSession()
                .then(data => console.log('currentSession data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        Auth.currentUserCredentials()
                .then(data => console.log('currentUserCredentials data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        Auth.currentUserInfo()
                .then(data => console.log('currentUserInfo data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        Auth.currentUserPoolUser()
                .then(data => console.log('currentUserPoolUser data : ',getLog(data)))
                .catch(err => {console.log('error : ',err,'\n\n')})
        

    },

    getLog(input){
        // console.log('\n')
        Object.keys(input).forEach(function(aKey, index){
            console.log((index+1) + ". "+aKey + " : "+JSON.stringify(input[aKey]))
        })
        console.log('\n')
    }
}

export default AuthClass