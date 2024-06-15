import React from 'react'
import { Database } from '@/lib/database.types'
import { cookies } from 'next/headers'
import { SupabaseClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import SubscriptionManagementButton from '@/components/checkout/SubscriptionManagementButton'

const getProfileData = async (supabase: SupabaseClient<Database>) => {
  const { data: profile } = await supabase
    .from("profile")
    .select("*")
    .single();
  return profile;
}

const Dashboard = async () => {

  const supabase = createServerComponentClient({ cookies });
  const profile = await getProfileData(supabase);

  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl mb-6">ユーザー管理ダッシュボード</h1>
      <div>
        <div className="mb-3">
          {profile?.is_subscribed ? `プラン契約中: ${profile?.interval}` : `プラン未加入です`}
        </div>
        <SubscriptionManagementButton />
      </div>
    </div>
  )
}

export default Dashboard