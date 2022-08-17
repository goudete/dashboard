import React from 'react'
import styles from './main-button.module.scss';
import classnames from 'classnames';

type MainButtonProps = {
  title: string,
  onClick: (e: any | null) => void,
  disabled?: boolean,
  className?: string,
  small?: boolean,
  inverse?: boolean,
}

export const MainButton = ({title, onClick, disabled, className, small, inverse}: MainButtonProps) => {
  const classes = classnames([styles.btnHolder, className ? className : '', small ? styles.smallBtn : '', inverse ? styles.inverseColors : ''])
  return (
    <div onClick={onClick} className={classes}>
      {title}
    </div>
  )
}
