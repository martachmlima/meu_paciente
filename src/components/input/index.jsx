import { Conteiner } from "./StyleInput";

const InputComponent = ({ errors, label, register, valueRegister, type }) => {
  console.log(errors)
  return (
    <>
      <Conteiner errors={errors}>
        {errors ? (
          <label>{label + " - " + errors}</label>
        ) : (
          <label>{label}</label>
        )}

        <input {...register(valueRegister)} type={type} />
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
