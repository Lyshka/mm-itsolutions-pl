import ReCAPTCHA from "react-google-recaptcha";
import { RefObject } from "react";
import { useLocale } from "next-intl";

interface IRecaptcha {
  recaptchaRef: RefObject<ReCAPTCHA>;
}

export const Recaptcha = ({ recaptchaRef }: IRecaptcha) => {
  const locale = useLocale();

  return (
    <ReCAPTCHA
      size="invisible"
      ref={recaptchaRef}
      sitekey="6LeUhyYpAAAAAIr-5CqLpzF5k25cz4OTsDca-dtm"
      hl={locale}
    />
  );
};
