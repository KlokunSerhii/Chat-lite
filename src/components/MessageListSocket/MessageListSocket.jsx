import React from 'react';
import styles from '../Chat/Chat.module.css';
import imgDefault from '../../img/bot.jpg';

function MessageListSocket({ state, params }) {
  return (
    <>
      {state.map(({ user, message }, i) => {
        const avatar = user.avatar
          ? user.avatar
          : imgDefault;
        const you = user.name === params.name;
        return you ? (
          <div key={i} className={styles.containerYou}>
            <img
              src={avatar}
              alt="avatar"
              className={styles.avatar}
            />
            <div className={styles.messageContainerYou}>
              <p className={styles.you}>{message}</p>
              <div className={styles.infoMessage}>
                <p className={styles.time}>{}</p>
                <p className={styles.nameYou}>
                  {user.name}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div key={i} className={styles.containerUser}>
            <img
              src={avatar}
              alt="avatar"
              className={styles.avatar}
            />
            <div className={styles.messageContainerUser}>
              <p className={styles.user}>{message}</p>
              <div className={styles.infoMessageUser}>
                <p className={styles.time}>{}</p>
                <p className={styles.nameUser}>
                  {user.name}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MessageListSocket;
