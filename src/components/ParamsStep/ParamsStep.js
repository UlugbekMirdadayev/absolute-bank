import React, { useEffect, useState } from "react";
import Select from "../Select/Select";
import MaskedInput from "react-text-mask/dist/reactTextMask";
import CurrencyInput from "react-currency-input-field";

const format = (val) => val.split(" ").join("");

const ParamsStep = ({
  form,
  productsList,
  autoList,
  brandList,
  modelList,
  currencyList,
  termList,
  advanceList,
  typePaymentList,
  balanceOwnerList,
  onNext,
  onChange,
}) => {
  const onChangeField = (key) => (value) => {
    onChange(key, value);
  };

  const [models, setModels] = useState([]);

  const onChangeText =
    (key, fn) =>
    ({ target }) => {
      onChange({ [key]: fn ? fn(target.value) : target.value });
    };

  useEffect(() => {
    if (form?.brandts?.id) {
      const model = modelList.filter(
        (__res) => __res.brandId === form?.brandts?.id
      );
      setModels(model);
    }
  }, [form?.brandts?.id, modelList, models]);

  return (
    <section className="step-content">
      <h1>Параметры сделки</h1>

      <div className="row row_space">
        <div className="form-field">
          <span className="form-field__label">Лизингополучатель</span>
          <div className="form-field__control">
            <input
              type="text"
              className="input"
              value={form.leasing_user}
              onChange={onChangeText("leasing_user")}
            />
          </div>
        </div>

        <div className="form-field">
          <span className="form-field__label">Поставщик</span>
          <div className="form-field__control">
            <input
              type="text"
              className="input"
              value={form.leasing_owner}
              onChange={onChangeText("leasing_owner")}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="form-field">
          <span className="form-field__label">Договор лизинга</span>
          <div className="form-field__control">
            <input
              type="text"
              className="input"
              value={form.leasing_agreement}
              onChange={onChangeText("leasing_agreement")}
            />
          </div>
        </div>

        <div className="form-field">
          <span className="form-field__label">
            Договор поставки/купли-продажи
          </span>
          <div className="form-field__control">
            <input
              type="text"
              className="input"
              value={form.purchase_agreement}
              onChange={onChangeText("purchase_agreement")}
            />
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="row row_end row_space">
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Тип продукта</span>
            <div className="form-field__control">
              <Select
                items={productsList}
                selectedId={form.producttype}
                onChange={onChangeField("producttype")}
              />
            </div>
          </div>
        </div>

        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">
              Стоимость предмета лизинга в рублевом эквиваленте
            </span>
            <div className="form-field__control">
              <input
                type="number"
                className="input"
                value={form.currency_exchange}
                onChange={onChangeText("currency_exchange")}
              />
            </div>
          </div>
        </div>

        <div className="row-third" />
      </div>
      <div className="row row_space">
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">
              Тип транспортного средства
            </span>
            <div className="form-field__control">
              <Select
                items={autoList}
                selectedId={form.typets}
                onChange={onChangeField("typets")}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">
              Марка транспортного средства
            </span>
            <div className="form-field__control">
              <Select
                items={brandList}
                selectedId={form.brandts}
                onChange={onChangeField("brandts")}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">
              Модель транспортного средства
            </span>
            <div className="form-field__control">
              <Select
                items={models}
                selectedId={form.modelts}
                onChange={onChangeField("modelts")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row row_space">
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">
              Стоимость предмета лизинга
            </span>
            <div className="form-field__control">
              <CurrencyInput
                className="input"
                groupSeparator={" "}
                value={form.leasing_cost || ""}
                onChange={onChangeText("leasing_cost", format)}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Валюта ДКП</span>
            <div className="form-field__control">
              <Select
                items={currencyList}
                selectedId={form.currency}
                onChange={onChangeField("currency")}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Курс валюты</span>
            <div className="form-field__control">
              <input
                type="number"
                className="input"
                value={form.currency_exchange}
                onChange={onChangeText("currency_exchange")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">
              Дата оплаты по ДКП
              <span className="tooltip">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="tooltip__icon"
                >
                  <path
                    d="M8 15.5001C3.85775 15.5001 0.5 12.1423 0.5 8.00009C0.5 3.85784 3.85775 0.500092 8 0.500092C12.1423 0.500092 15.5 3.85784 15.5 8.00009C15.5 12.1423 12.1423 15.5001 8 15.5001ZM7.25 10.2501V11.7501H8.75V10.2501H7.25ZM8.75 9.01634C9.35275 8.83467 9.8702 8.44256 10.2081 7.9114C10.546 7.38024 10.6819 6.74538 10.5911 6.12244C10.5002 5.4995 10.1886 4.92992 9.71301 4.51743C9.23744 4.10495 8.62953 3.87699 8 3.87509C7.39314 3.87505 6.805 4.08521 6.33559 4.46984C5.86619 4.85447 5.54451 5.38981 5.42525 5.98484L6.89675 6.27959C6.93851 6.07067 7.03874 5.87789 7.18577 5.7237C7.33281 5.56951 7.52061 5.46025 7.72732 5.40862C7.93403 5.35699 8.15115 5.36512 8.35342 5.43207C8.55568 5.49901 8.73478 5.62202 8.86987 5.78677C9.00497 5.95153 9.0905 6.15126 9.11651 6.36272C9.14253 6.57419 9.10796 6.78869 9.01683 6.98128C8.9257 7.17386 8.78175 7.33661 8.60174 7.45059C8.42173 7.56456 8.21306 7.62508 8 7.62509C7.80109 7.62509 7.61032 7.70411 7.46967 7.84476C7.32902 7.98541 7.25 8.17618 7.25 8.37509V9.50009H8.75V9.01634Z"
                    fill="#8E9299"
                  />
                </svg>
                <span className="tooltip__text">
                  Дата фактической инвестиции лизинговой компании
                </span>
              </span>
            </span>
            <div className="form-field__control">
              <MaskedInput
                mask={[
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                showMask
                value={form.leasing_date_payment}
                onChange={onChangeText("leasing_date_payment")}
                render={(ref, props) => (
                  <input ref={ref} type="text" className="input" {...props} />
                )}
              />
            </div>
          </div>
        </div>
        <div className="row-third" />
        <div className="row-third" />
      </div>

      <div className="divider" />

      <div className="row row_end row_space">
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Срок лизинга, мес.</span>
            <div className="form-field__control">
              <Select
                items={termList}
                selectedId={form.term}
                onChange={onChangeField("term")}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">Минимальный размер аванса, %</span>
            <p className="mark__text">15</p>
          </div>
        </div>
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Выбор размера аванса, %</span>
            <div className="form-field__control">
              <input
                type="number"
                className="input"
                min={15}
                max={49}
                defaultValue={15}

                // value={form.advancepayment}
                // onChange={onChangeText("advancepayment")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row row_end row_space">
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">Размер аванса, руб.</span>
            <p className="mark__text">375 000 ₽</p>
          </div>
        </div>
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Дата поступления аванса</span>
            <div className="form-field__control">
              <MaskedInput
                mask={[
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                showMask
                value={form.date_advance_payment}
                onChange={onChangeText("date_advance_payment")}
                render={(ref, props) => (
                  <input ref={ref} type="text" className="input" {...props} />
                )}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Тип платежей</span>
            <div className="form-field__control">
              <Select
                items={typePaymentList}
                selectedId={form.typepayment}
                onChange={onChangeField("typepayment")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">
              Минимальный размер 1 и 2 платежей при льготном периоде (НДС)
            </span>
            <div className="form-field__control">
              <CurrencyInput
                className="input"
                groupSeparator={" "}
                value={form.min_payment || ""}
                onChange={onChangeText("min_payment", format)}
              />
            </div>
          </div>
        </div>

        <div className="row-third" />
        <div className="row-third" />
      </div>

      <div className="divider" />

      <div className="row row_space">
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">
              Объем привлекаемого фондирования
            </span>
            <p className="mark__text">2 125 000</p>
          </div>
        </div>
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">Контрактная ставка, %</span>
            <p className="mark__text">30,00</p>
          </div>
        </div>
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">в т.ч. ставка фондирования, %</span>
            <p className="mark__text">25,00</p>
          </div>
        </div>
      </div>

      <div className="row row_space">
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Св т.ч. FTP</span>
            <div className="form-field__control">
              <input
                type="number"
                className="input"
                value={form.ftp}
                onChange={onChangeText("ftp")}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">в т.ч. маржа Банка</span>
            <div className="form-field__control">
              <input
                type="number"
                className="input"
                value={form.margin_bank}
                onChange={onChangeText("margin_bank")}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">в т.ч. маржа ЛК</span>
            <div className="form-field__control">
              <input
                type="number"
                className="input"
                value={form.margin_lk}
                onChange={onChangeText("margin_lk")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="row row_space">
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">
              Коэффициент удорожания предмета лизинга
            </span>
            <p className="mark__text">1,86</p>
          </div>
        </div>
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">Годовое удорожание, %</span>
            <p className="mark__text">17,16</p>
          </div>
        </div>
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">
              Эффективная процентная ставка (IRR)
            </span>
            <p className="mark__text">51,87</p>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="row row_end row_space">
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Балансосодержатель</span>
            <div className="form-field__control">
              <Select
                items={balanceOwnerList}
                selectedId={form.balanceowner}
                onChange={onChangeField("balanceowner")}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Дата передачи в лизинг</span>
            <div className="form-field__control">
              <MaskedInput
                mask={[
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                showMask
                value={form.leasing_date}
                onChange={onChangeText("leasing_date")}
                render={(ref, props) => (
                  <input ref={ref} type="text" className="input" {...props} />
                )}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">Срок амортизации</span>
            <p className="mark__text">60</p>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="row row_end row_space">
        <div className="row-third">
          <div className="form-field">
            <span className="form-field__label">Ставка НДС</span>
            <div className="form-field__control">
              <input
                type="number"
                className="input"
                value={form.nds}
                onChange={onChangeText("nds")}
              />
            </div>
          </div>
        </div>
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">НДС к возмещению</span>
            <p className="mark__text">416 667 ₽</p>
          </div>
        </div>
        <div className="row-third">
          <div className="mark">
            <span className="mark__label">Балансовая стоимость</span>
            <p className="mark__text">2 083 333 ₽</p>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="row row_end">
        <div className="row-quarter">
          <div className="form-field">
            <span className="form-field__label">Дата первого платежа</span>
            <div className="form-field__control">
              <MaskedInput
                mask={[
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                showMask
                value={form.date_first_payment}
                onChange={onChangeText("date_first_payment")}
                render={(ref, props) => (
                  <input ref={ref} type="text" className="input" {...props} />
                )}
              />
            </div>
          </div>
        </div>
        <div className="row-quarter">
          <div className="mark">
            <span className="mark__label">Дата последнего платежа</span>
            <p className="mark__text">18.04.2022</p>
          </div>
        </div>
        <div className="row-quarter">
          <div className="form-field">
            <span className="form-field__label">% выкупной стоимости</span>
            <div className="form-field__control">
              <input type="number" className="input" />
            </div>
          </div>
        </div>
        <div className="row-quarter">
          <div className="mark">
            <span className="mark__label">Сумма выкупной стоимости</span>
            <p className="mark__text">1 200 ₽</p>
          </div>
        </div>
      </div>

      <div className="divider" />

      <button className="submit" onClick={onNext}>
        Продолжить
      </button>
    </section>
  );
};

export default ParamsStep;
