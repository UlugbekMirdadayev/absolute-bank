import { ReactComponent as Logo } from "./assets/images/logo.svg";
import Stepper from "./components/Stepper/Stepper";
import { STEPS } from "./constants";
import { useEffect, useState } from "react";
import ParamsStep from "./components/ParamsStep/ParamsStep";
import InsuranceStep from "./components/InsuranceStep/InsuranceStep";
import TaxStep from "./components/TaxStep/TaxStep";
import AdditionalStep from "./components/AdditionalStep/AdditionalStep";
import { useDictionary } from "./hooks/useDictionary";
import { useForm } from "./hooks/useForm";
import { BRAND_TYPE, PRODUCT_TYPE, TS_TYPE, CURRENCY } from "./dictionary";

const App = () => {
  const [step, setStep] = useState("params"); 

  const { form, onChange: changeForm } = useForm();

  useEffect(() => {
    console.log(form);
  }, [form]);

  const { dictionaryMap } = useDictionary();

  const onNext = (key) => () => setStep(key);

  const onSave = () => {};

  return (
    <div className="app">
      <main className="app-main">
        <div className="app-header">
          <div>
            <Logo />
          </div>
        </div>
        <Stepper steps={STEPS} activeKey={step} />

        {step === "params" && (
          <ParamsStep
            form={form}
            productsList={PRODUCT_TYPE}
            autoList={TS_TYPE}
            brandList={BRAND_TYPE}
            modelList={dictionaryMap.get("modelts") || []}
            currencyList={CURRENCY}
            termList={dictionaryMap.get("term") || []}
            advanceList={dictionaryMap.get("advancepayment") || []}
            typePaymentList={dictionaryMap.get("typepayment") || []}
            balanceOwnerList={dictionaryMap.get("balanceowner") || []}
            onNext={onNext("insurance") || []}
            onChange={changeForm}
          />
        )}
        {step === "insurance" && (
          <InsuranceStep
            form={form}
            ownerList={dictionaryMap.get("insuranceowner") || []}
            periodList={dictionaryMap.get("insuranceperiod") || []}
            onNext={onNext("tax")}
            onChange={changeForm}
          />
        )}
        {step === "tax" && (
          <TaxStep
            form={form}
            registratorts={dictionaryMap.get("registratorts") || []}
            onNext={onNext("additional")}
            onChange={changeForm}
          />
        )}
        {step === "additional" && (
          <AdditionalStep form={form} onChange={changeForm} onSave={onSave} />
        )}
      </main>
    </div>
  );
};

export default App;
