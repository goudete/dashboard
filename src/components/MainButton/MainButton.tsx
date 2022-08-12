import React from 'react'
import styles from './main-button.module.scss';
import classnames from 'classnames';
import classNames from 'classnames';

type MainButtonProps = {
  title: string,
  onClick: () => void,
  disabled?: boolean,
  className?: string,
}

export const MainButton = ({title, onClick, disabled, className}: MainButtonProps) => {
  const classes = classnames([styles.btnHolder, className ? className : ''])
  return (
    <div onClick={onClick} className={classes}>
      {title}
    </div>
  )
}
