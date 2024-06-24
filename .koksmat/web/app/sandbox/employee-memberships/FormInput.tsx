// FormInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormSchema } from "./schemas";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type InputProps = {
  name: keyof FormSchema;
  label: string;
  type?: string;
};

const FormInput: React.FC<InputProps> = ({ name, label, type = "text" }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormSchema>();

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} type={type} {...register(name)} />
      {errors[name] && <span>{errors[name]?.message}</span>}
    </div>
  );
};

export default FormInput;
