import { Conteiner } from "./StyleInput";

const InputComponent = ({ errors, label, register, valueRegister, type, ...res }) => {
  return (
    <>
      <Conteiner errors={errors}>
        {!!errors && (<label>{errors}</label>)}

        <input {...res} {...register(valueRegister)} type={type} />
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
