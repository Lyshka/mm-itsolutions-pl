"use client";

import { FormHTMLAttributes } from "react";

import { useFormMail } from "@/hooks/useFormMail";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Recaptcha } from "../Input/Recaptcha";

type ServiceFormType = {
  name: string;
  buttonName: string;
} & FormHTMLAttributes<HTMLFormElement>;

export const ServiceForm = ({
  buttonName,
  name,
  ...props
}: ServiceFormType) => {
  const { form, sendEmail, captcha } = useFormMail({
    template: "template_17ngi34",
  });

  return (
    <form
      name="serviceForm"
      ref={form}
      onSubmit={sendEmail}
      {...props}
      className="flex 2xl:flex-row flex-col items-center gap-6 w-full"
    >
      <Input
        className="2xl:min-w-[307px] min-w-full"
        placeholder={`${name} *`}
        required
        name="name"
      />
      <Input
        className="2xl:min-w-[307px] min-w-full"
        placeholder={`+48`}
        type="tel"
        required
        name="email"
      />
      <Recaptcha recaptchaRef={captcha} />
      <Button className="uppercase 2xl:leading-4 2xl:w-auto w-full">
        {buttonName}
      </Button>
    </form>
  );
};
