import { createPool,Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {

  const connection = await createPool({
      host:'localhost',
      user:'admin',
      password:'19568514lJ.',
      database:'typescript_MySQL',
      connectionLimit:10
  })
  return connection;

}