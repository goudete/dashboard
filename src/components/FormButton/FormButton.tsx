import React from "react";
import styles from '../MainButton/main-button.module.scss';
import classnames from 'classnames';

type FormButtonProps = {
  className?: string,
  small?: boolean,
  inverse?: boolean,
}

export function FormButton({ className, small, inverse }: FormButtonProps) {
  const classes = classnames([styles.btnHolder, className ? className : '', small ? styles.smallBtn : '', inverse ? styles.inverseColors : ''])

  const sendEmail = async (e: any) => {
    console.log(e)
    // try {
    //   const templateParams = {
    //     from_name: 'Xpipe',
    //     user_email: 
    //   };
    //   if ("emailjs" in window) {
    //     // @ts-ignore
    //     const { emailjs } = window;
    //     const res = await emailjs.send('service_fu5m174', 'template_t57wz1s', templateParams);
    //     console.log('res:', res);
    //   }

    // } catch (error) {
    //   console.log(JSON.stringify(error));
    // }
  }

  return <>
    <div>input</div>
    <div onClick={sendEmail} className={classes}>submit</div>
  </>;
};