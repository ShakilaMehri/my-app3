"use client"

import React, {useState} from 'react';
import styles from '../styles/login.module.css';
import Link from 'next/link';
import { UserIcon, EyeIcon, EyeOffIcon } from 'lucide-react';


const Page: React.FC = () => {
    const [passwordVisible, setPasswordVisible]= useState (false);
    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    };
  return (
    <div className={styles.loginBody}>
    <div className={styles.wrapper}>
        <form action="">
            <h1 className={styles.loginTitle}>Login</h1>
            <div className={styles.inputBox}>
                <input  className={styles.input} type="text" placeholder='username' required/>
                <UserIcon  className={styles.loginIcon}/>
            </div>
            <div className={styles.inputBox}>
                <input className={styles.input} type={passwordVisible ? "text" : "password"} placeholder='password' required/>
                {passwordVisible ? (
                    <EyeOffIcon className={styles.loginIcon} onClick={togglePasswordVisibility} />
                ) : (
                    <EyeIcon className={styles.loginIcon} onClick={togglePasswordVisibility}/>
                )
            }
                
            </div>
            <div className={styles.rememberForgot}>
                <label className={styles.label}><input className={styles.inputCheck} type="checkbox" />Remember me</label>
                <Link className={styles.forgotLink} href='#'>Forgot Password?</Link>
            </div>
            <button type='submit' className={styles.btn}>Login</button>
            <div className={styles.registerLink}>
                <p className={styles.registerPara}>Don't have an account?</p>
                <Link className={styles.registerPara} href='#'>Register</Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Page;