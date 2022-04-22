import CurrencyInput from "react-currency-input-field";

const format = (val) => val.split(' ').join('');

const AdditionalStep = ({
  form,
  onChange,
  onSave,
}) => {
  const onChangeField = (key) => (value) => {
    onChange(key, value);
  };

  const onChangeText = (key, fn) => ({target}) => {
    onChange({[key]: fn ? fn(target.value) : target.value});
  };

  return (
    <section className="step-content">
      <h1>Дополнительные затраты</h1>

      <div className="row row_space">
       <div className="row-quarter">
         <div className="form-field">
           <span className="form-field__label">Сообщение о сделке в Фед. Ресурс</span>
           <div className="form-field__control">
             <input
               type="text"
               className="input"
               value={form.fed_resource}
               onChange={onChangeText('fed_resource')}
             />
           </div>
         </div>
       </div>
        <div className="row-quarter">
          <div className="form-field">
            <span className="form-field__label">Затраты на противоугонную систему</span>
            <div className="form-field__control">
              <CurrencyInput
                className="input"
                groupSeparator={' '}
                value={(form.anti_theft_system_cost || '')}
                onChange={onChangeText('anti_theft_system_cost', format)}
              />
            </div>
          </div>
        </div>
      </div>

      <h1>Затраты, связанные с регистрацией предмета лизинга в Госавтоинспекции</h1>

      <div className="row row_space row_end">
        <div className="form-field row-quarter">
          <span className="form-field__label">Агент ЮЛ, %</span>
          <div className="form-field__control">
            <input
              type="number"
              className="input"
              value={form.agent_ul}
              onChange={onChangeText('agent_ul')}
            />
          </div>
        </div>
        <div className="form-field row-quarter">
          <div className="mark">
            <span className="mark__label">Агент ЮЛ, руб.</span>
            <p className="mark__text">75 000 ₽</p>
          </div>
        </div>
        <div className="form-field row-quarter">
          <span className="form-field__label">Агент ФЛ, %</span>
          <div className="form-field__control">
            <input
              type="number"
              className="input"
              value={form.agent_fl}
              onChange={onChangeText('agent_fl')}
            />
          </div>
        </div>
        <div className="form-field row-quarter">
          <div className="mark">
            <span className="mark__label">Агент ФЛ, руб.</span>
            <p className="mark__text">0,00</p>
          </div>
        </div>
      </div>


      <div className="divider"/>

      <button className="submit">Сформировать</button>
    </section>
  )
};

export default AdditionalStep;
