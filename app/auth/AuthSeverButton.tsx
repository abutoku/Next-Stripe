import React from 'react'
import AuthClientButton from './AuthClientButton'
import { supabaseServer } from '@/utils/supabaseServer'

const AuthSeverButton = async () => {
  const supabase = supabaseServer();
  const { data: user } = await supabase.auth.getSession();
  const session = user.session;

  return <AuthClientButton session={session} />

}

export default AuthSeverButton