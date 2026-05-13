import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()
  if (!user || !user.publicMetadata.siteOwner) {
    redirect('/')
  }

  return <>{children}</>
}
