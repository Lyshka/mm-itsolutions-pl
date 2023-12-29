import { delagothicone } from "@/assets/font";
import { useFormMail } from "@/hooks/useFormMail";
import { MainContext } from "@/context/MainContext";
import { useContext } from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { TelInput } from "../Input/TelInput";
import { Recaptcha } from "../Input/Recaptcha";
import { IFeedbackPopup } from "../Popup/FeedbackPopup";

export const PopupFeedbackForm = ({
  buttonName,
  description,
  email,
  name,
  title,
}: IFeedbackPopup) => {
  const { toggleFeedBack } = useContext(MainContext);

  const { form, sendEmail, captcha } = useFormMail({
    template: "template_p7le36i",
    toggle: toggleFeedBack,
  });

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="p-6 flex flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-2">
        <h6 className={`${delagothicone.className} text-lg leading-6`}>
          {title}
        </h6>

        <p className="text-sm leading-4">{description}</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Input placeholder={name} name="name" />
          <TelInput />
          <Input placeholder={email} type="email" name="email" />
          <Recaptcha recaptchaRef={captcha} />
        </div>

        <Button className="uppercase">{buttonName}</Button>
      </div>
    </form>
  );
};
