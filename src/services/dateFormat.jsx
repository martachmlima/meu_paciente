export const FormateData = date => {
  new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
}
