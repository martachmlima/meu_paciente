import { Conteiner } from "./StyleInput";

const InputComponent = ({
  errors,
  label,
  register,
  valueRegister,
  type,
  ...rest
}) => {
  return (
    <>
      <Conteiner errors={errors}>
        {!!errors ? (<label>{errors}</label>) : (<label>{label}</label>)}

        <input {...rest} {...register(valueRegister)} type={type} />
      </Conteiner>
    </>
  );
};

export default InputComponent;
// Exemplo de como utilizar o input

// <InputComponent

// label={"Teste de input"}
// errors={"errors"}
// register={register}
// valueRegister={"email"}
// />
