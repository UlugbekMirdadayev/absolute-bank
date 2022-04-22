import { useState } from "react";

const init = {
  leasing_user: null,
  leasing_agreement: null,
  leasing_owner: null,
  purchase_agreement: null,
  producttype: null,
  typets: null,
  brandts: null,
  modelts: null,
  leasing_cost: null,
  currency: null,
  currency_exchange: null,
  leasing_date_payment: null,
  term: null,
  advancepayment: null,
  date_advance_payment: null,
  typepayment: null,
  min_payment: null,
  ftp: null,
  margin_bank: null,
  margin_lk: null,
  balanceowner: null,
  leasing_date: null,
  nds: null,
  date_first_payment: null,
  percent_redemption: null,
  insuranceowner: null,
  insurance_firm: null,
  insurance_percent: null,
  insuranceperiod: null,
  registratorts: null,
  power_ts: null,
  nalog_ts: null,
  fed_resource: null,
  anti_theft_system_cost: null,
  gibdd_add_cost: null,
  agent_ul: null,
  agent_fl: null,
};


const saveReq = (body) => fetch('/calculate', {method: 'post', body: JSON.stringify(body)}).then(res => res.json());

export const useForm = () => {
  const [form, setForm] = useState({...init});

  const onChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const onSave = async () => {
    await saveReq(form);
  };

  return {
    form,
    onChange,
    onSave,
  }
};
