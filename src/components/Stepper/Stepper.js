import styles from './Stepper.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

const Stepper = ({
  steps,
  activeKey,
}) => {

  const activeIndex = steps.findIndex(item => item.key === activeKey);

  return (
    <div className={cx('stepper')}>
      <div className={cx('inner')}>
        {steps.map((step, i) => (
          <div className={cx('step', {'stepActive': i <= activeIndex})} key={step.key}>
            <div className={cx('stepDot')}/>
            <span className={cx('stepText')}>{step.label}</span>
            {i + 1 < steps.length && <div className={cx('stepLine')}/>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
