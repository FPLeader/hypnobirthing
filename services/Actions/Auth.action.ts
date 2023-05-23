import API from '../API';
import { Dispatch } from 'redux'
import { toast } from 'react-toastify'
import { NextRouter } from 'next/router'

export function register(data: any, setLoadingOpen: any, router: NextRouter) {
    return async (dispatch: Dispatch) => {
        API.post('auth/register', data)
            .then((result: any) => {
                if (result.data.status === 'success') {
                    toast.info('Check the code has been sent to your email.');
                    setLoadingOpen(false)
                    dispatch(setTempUser(result.data.currentUser.ds_email));
                    router.push('/validatecode');
                }
            })
            .catch((err) => {
                if (err.request?.response === '')
                    toast.error('Something went wrong.');
                else {
                    try {
                        let errorMessage = JSON.parse(err.request?.response).message;
                        toast.error(errorMessage);
                    } catch (error) {
                        console.error('Error parsing response:', err.request?.response);
                        toast.error('Something went wrong.');
                    }
                }
                setLoadingOpen(false)
            });
    };
}

export function login(data: any, setLoadingOpen: any, router: NextRouter) {
    return async (dispatch: Dispatch) => {

        API.post('auth/login', data)
            .then((result: any) => {
                if (result.data.status === 'success') {
                    toast.success('Log in successfully!')
                    localStorage.removeItem('token');
                    localStorage.token = result.data.data.token;
                    setLoadingOpen(false)
                    dispatch(setUser(result.data.data.currentUser));
                    router.push('/profile/educator')
                }
            })
            .catch((err) => {
                if (err.request?.response === '')
                    toast.error('Something went wrong.');
                else {
                    try {
                        let errorMessage = JSON.parse(err.request?.response).message;
                        if (errorMessage === `Please verify your email.`) {
                            dispatch(setTempUser(data.ds_email));
                            API.post('auth/resend', {
                                ds_email: data.ds_email,
                            })
                                .then((result) => {
                                    if (result.data.status === 'success') {
                                        toast.success('Check the code has been sent to your email.');
                                    }
                                })
                                .catch((err) => {
                                    toast.error(`We can't send verification code to your email.`);
                                    console.log(err);
                                })
                            router.push('/validatecode');
                        }
                        toast.error(errorMessage);
                    } catch (error) {
                        console.error('Error parsing response:', err.request?.response);
                        toast.error('Something went wrong.');
                    }
                }
                setLoadingOpen(false)
            });
    };
}

export function setTempUser(data: any) {
    localStorage.setItem('tempUser', data);

    return { type: 'setTempUser', data };
}

export function setUser(data: any) {
    localStorage.removeItem('tempUser');
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(data));
    if (data !== null) {
        localStorage.removeItem('isLogIn');
        localStorage.setItem('isLogIn', 'true');
    }
    return { type: 'setUser', data };
}

export function logout(router: any, afterRoute: any) {
    localStorage.removeItem('isLogIn');
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    router.push(afterRoute);
    return { type: 'logout' };
}

// export function logout(navigate: any, afterRoute: any, gapi: any) {
//     return async (dispatch: any) => {

//         localStorage.removeItem('isLogIn');
//         localStorage.removeItem('token');
//         localStorage.removeItem('notification');
//         dispatch(setUser(null));
//         try {
//             var auth2 = gapi.auth2.getAuthInstance();
//             auth2.signOut().then(function () {
//                 console.log('User signed out.');
//             });
//         } catch (error) {
//             console.log(error)
//         }

//         navigate(afterRoute);

//     }
// }