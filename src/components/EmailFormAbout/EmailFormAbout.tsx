
import React, { useState } from "react";
import formStyles from './email-form-about.module.scss'
import btnStyles from '../MainButton/main-button.module.scss';
import classnames from 'classnames';

type FormButtonProps = {
  className?: string,
  small?: boolean,
  inverse?: boolean,
}

const SERVICE = 'service_7wyoin7';
const TEMPLATE = 'template_t57wz1s';

export function EmailFormAbout({ className, small, inverse }: FormButtonProps) {
  const [email, setEmail] = useState<string | null>(null);
  const btnClasses = classnames([btnStyles.btnHolder, className ? className : '', small ? btnStyles.smallBtn : '', inverse ? btnStyles.inverseColors : ''])

  const handleChange = (e: any) => {
    const email = e.target.value;
    setEmail(email);
  }

  const sendEmail = async () => {
    if (!email || !email.includes('@')) {
      return alert('Please enter a valid email');
    }

    try {
      const templateParams = {
        user_email: email
      };
      if ("emailjs" in window) {
        // @ts-ignore
        const { emailjs } = window;
        await emailjs.send(SERVICE, TEMPLATE, templateParams);
        return alert('Successfully joined waitlist');
      }

    } catch (error) {
      return alert('Error occurred, please try again');
    }
  }

  return <>
    <div className={formStyles.formHolder + ' animate__animated animate__fadeInUp'}>
      <h2>
        Send money now
      </h2>
      <input
        placeholder="enrique@sendvaro.com"
        type={"email"}
        name={"email"}
        onChange={handleChange}
      />

      <div onClick={sendEmail} className={formStyles.buttonHolder}>submit</div>

    </div>
  </>;
};