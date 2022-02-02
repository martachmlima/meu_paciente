export const FormateData = date => {
  const newData = new Date(date).toLocaleDateString('pt-BR', {
    timeZone: 'UTC'
  })
  return newData
}

// export default FormateData
