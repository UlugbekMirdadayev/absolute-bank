import Select from "../Select/Select";

const InsuranceStep = ({
  form,
  ownerList,
  periodList,
  onNext,
  onChange
}) => {

  const onChangeField = (key) => (value) => {
    onChange(key, value);
  };

  const onChangeText = (key, fn) => ({target}) => {
    onChange({[key]: fn ? fn(target.value) : target.value});
  };


  return (
    <section className="step-content">
      <h1>Страхование</h1>

      <div className="row row_space">
        <div className="form-field">
          <span className="form-field__label">Страхователь КАСКО</span>
          <div className="form-field__control">
            <Select
              items={ownerList}
              selectedId={form.insuranceowner}
              onChange={onChangeField('insuranceowner')}
            />
          </div>
        </div>

        <div className="form-field">
          <span className="form-field__label">Страховая компания</span>
          <div className="form-field__control">
            <input
              type="number"
              className="input"
              value={form.insurance_firm}
              onChange={onChangeText('insurance_firm')}
            />
          </div>
        </div>
      </div>

      <div className="row row_space">
        <div className="form-field">
          <span className="form-field__label">Страховая премия, %</span>
          <div className="form-field__control">
            <input
              type="number"
              className="input"
              value={form.insurance_percent}
              onChange={onChangeText('insurance_percent')}
            />
          </div>
        </div>

        <div className="form-field">
          <span className="form-field__label">Период страхования</span>
          <div className="form-field__control">
            <Select
              items={periodList}
              selectedId={form.insuranceperiod}
              onChange={onChangeField('insuranceperiod')}
            />
          </div>
        </div>
      </div>


      <div className="divider"/>

      <button className="submit" onClick={onNext}>Продолжить</button>
    </section>
  )
};

export default InsuranceStep;
