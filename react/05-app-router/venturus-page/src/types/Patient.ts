export type Patient = {
  cpf:string
  name?: string,
  age?: number,
  conditions?: string[],
  description?: string,
  historic?: string[],
}