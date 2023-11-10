import { createPool } from 'mysql2/promise'

export async function connect(){

  const connection = await createPool({
      host:'localhost',
      user:'admin',
      password:'19568514lJ.',
      database:'typescript_MySQL',
      connectionLimit:10
  })

}