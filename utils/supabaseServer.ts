import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
import { Database } from '@/lib/database.types'

export const supabaseServer = () => {
  cookies().getAll();
  // server componentでは引数にcookiesを指定する
  return createServerComponentClient<Database>({ cookies });
}