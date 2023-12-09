/*
  interface, são parametros que queremos receber e seus tipos, nada além deles
  interface é como se você criasse seus proprios tipos ou seja, para utilizar uma interface
  exportada, usa-se como se fosse tipar alguma coisa (USANDO ":" )
  ex: {name, email, password} : UserRequest
*/
export interface UserRequest {
  name: string;
  email: string;
  password: string;
}
