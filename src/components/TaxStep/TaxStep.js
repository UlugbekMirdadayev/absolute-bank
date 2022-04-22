import CurrencyInput from "react-currency-input-field";
import Select from "../Select/Select";

const format = (val) => val.split(' ').join('');

const TaxStep = ({
 form,
 registratorts,
 onNext,
 onChange,
}) => {

  const onChangeField = (key) => (value) => {
    onChange(key, value);
  };

  const onChangeText = (key, fn) => ({target}) => {
    onChange({[key]: fn ? fn(target.value) : target.value});
  };

  return (
    <section className="step-content">
      <h1>Транспортный налог</h1>

      <div className="row row_space row-third">
        <div className="form-field">
          <span className="form-field__label">Регистратор ТС</span>
          <div className="form-field__control">
            <Select
              items={registratorts}
              selectedId={form.registratorts}
              onChange={onChangeField('registratorts')}
            />
          </div>
        </div>
      </div>

      <div className="row row_space row-third">
        <div className="form-field">
          <span className="form-field__label">Мощность ТС, л.с.</span>
          <div className="form-field__control">
            <input
              type="number"
              className="input"
              value={form.power_ts}
              onChange={onChangeText('power_ts')}
            />
          </div>
        </div>
      </div>

      <div className="row row_space row-third">
        <div className="form-field">
          <span className="form-field__label">Ставки транспортного налога, руб.</span>
          <div className="form-field__control">
            <CurrencyInput
              className="input"
              groupSeparator={' '}
              value={(form.nalog_ts || '')}
              onChange={onChangeText('nalog_ts', format)}
            />
          </div>
        </div>
      </div>


      <div className="divider"/>

      <button className="submit" onClick={onNext}>Продолжить</button>
    </section>
  )
};

export default TaxStep;
