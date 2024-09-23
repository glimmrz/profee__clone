"use client";
import { useTranslations } from "next-intl";
import Button from "../button";
import Icon from "../icon";
import Input from "../input";
import { useState } from "react";

export default function ExhangeRate() {
  const [values, setValues] = useState({
    send: 100,
    receive: 300,
  });
  const t = useTranslations("Hero");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form className="transparent-white rounded-2xl">
      <div className="p-8">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <Input
              required
              label="send"
              name="send"
              type="number"
              value={values.send}
              onChange={handleChange}
            />
            <Input
              required
              label="receive"
              name="receive"
              type="number"
              value={values.receive}
              onChange={handleChange}
            />
          </div>

          {/* Details */}
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Icon icon="stock" size={14} />
              <span className="text-sm">
                {t("ExchangeRateForm.rateText")} ISK 1 ={" "}
                <strong>GBP 0.005444</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Icon icon="star" size={14} />
              <span className="text-sm">{t("ExchangeRateForm.textTwo")}</span>
            </div>

            <div className="flex items-center gap-2">
              <Icon icon="timer" size={14} />
              {t("ExchangeRateForm.textThree")}
            </div>
          </div>

          {/* Button */}
          <Button
            label={t("ExchangeRateForm.buttonLabel")}
            size="lg"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
}
