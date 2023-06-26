import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import styles from '../assets/scss/Sign.module.scss';

export default function Sign({ type='up' }) {
    type=type.toLowerCase();
    const [buttonTitle, setButtonTitle]=useState('Sign '+type);
    const [buttonDisabled, setButtonDisabled]=useState(false);
    const [errorTitle, setErrorTitle]=useState(null);

    const handleSubmit=async (e) => {
        e.preventDefault();
        setButtonTitle('Loading...');
        setButtonDisabled(true);
        
        await axios({
            method: type === 'up' ? 'post' : 'get',
            // method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/account/${type === 'up' ? 'register' : 'login'}`,
            // url: 'http://localhost:443/account/register',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'User-agent': navigator.userAgent,
                'auth-token': localStorage.getItem('token') || undefined,
                'Accept': 'application/json',
            },
            data: {
                nickname: type === 'up' ? e.target.nickname.value : undefined,
                phone: type === 'up' ? e.target.phone.value : undefined,
                email: e.target.email.value,
                password: e.target.password.value,
            },
        })
        .then((response) => response.json())
        .then((response) => {
            if (response.status === 'success') {
                localStorage.setItem('token', response.data.token);
                setButtonDisabled(false);
                setButtonTitle('Sign '+type);
                setErrorTitle(null);
            } else {
                setErrorTitle(response.message || 'Unknown error');
                setButtonDisabled(false);
                setButtonTitle('Sign '+type);
            }
        })
        .catch((error) => {
            setErrorTitle(error.message);   
            setButtonTitle('Sign '+type);
            setButtonDisabled(false);
        });
    };

    return (
        <section className={styles.sign}>
            <form onSubmit={handleSubmit} autoComplete={'on'} acceptCharset={'UTF-8'}>
                <h1>Sign {type}</h1>
                <p className={styles.error}>{errorTitle}</p>
                {type === 'up' ? <>
                    <label htmlFor="nickname"> Nickname<sup>*</sup> </label>
                    <input type="text" id="nickname" placeholder="Nickname" minLength={3} maxLength={32} autoComplete="username" disabled={buttonDisabled} required />

                    <label htmlFor="phone"> Phone </label>
                    <input type="tel" id="phone" placeholder="Phone" minLength={5} maxLength={32} autoComplete="tel" disabled={buttonDisabled} />
                </> : null}

                <label htmlFor="email"> Email<sup>*</sup> </label>
                <input type="email" id="email" placeholder="E-mail" minLength={5} maxLength={256} autoComplete="email" disabled={buttonDisabled} required />

                <label htmlFor="password"> Password<sup>*</sup> </label>
                <input type="password" id="password" placeholder="Password" minLength={8} maxLength={128} autoComplete="current-password" disabled={buttonDisabled} required />

                <button type="submit">{buttonTitle}</button>
                <hr />

                {type === 'up' ? <>
                    <span>Check out settings and personalize your account.</span>
                    <span>Already have an account? <Link href={'/login'}>Sign in</Link></span>
                </> : <>
                    <span><Link href={'/forgot'}>Forgot password?</Link></span>
                    <span>Don&apost have an account? <Link href={'/register'}>Sign up</Link></span>
                </>}
            </form>
        </section>
    );
}