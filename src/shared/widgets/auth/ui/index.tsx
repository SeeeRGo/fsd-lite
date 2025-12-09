import { useUnit } from 'effector-react';
import { useEffect, useRef } from 'react';
import { authModel } from 'widgets/auth';
import { useToggler } from 'shared/parts/lib/toggler';
import { Modal } from 'shared/ui/modal';
import { EmailForm } from '../../../features/email-form';
import { Header } from '../../../features/header';
import { Message } from '../../../parts/ui/message';
import { PasswordForm } from '../../../parts/ui/password-form';
import styles from './styles.module.scss';
import { Transition } from '../../../parts/ui/transition';

export const AuthWindow = () => {
  const { isOpen, close } = useToggler(authModel.toggler);
  const { state } = useUnit({ state: authModel.$state });
  const windowRef = useRef<HTMLDivElement>(null);
  const isEmailState = state === 'email';

  useEffect(() => {
    windowRef.current?.scrollTo(0, 0);
  }, [isEmailState]);

  return (
    <Modal
      className={styles.window}
      close={close}
      isOpen={isOpen}
      ref={windowRef}
    >
      <Header />
      <div className={styles.container}>
        <Transition>
          <Message
            className={styles.message}
            description={
              isEmailState
                ? 'чтобы пользоваться сервисом на любом устройстве'
                : null
            }
            title="Войдите или зарегистрируйтесь"
          />
        </Transition>
        {isEmailState ? <EmailForm /> : <PasswordForm />}
      </div>
    </Modal>
  );
};
