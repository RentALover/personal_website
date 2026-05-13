'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

import { PencilSwooshIcon } from '~/assets'

export function SiteOwnerEditLink({
  id,
  type,
  className,
}: {
  id: string
  type: string
  className?: string
}) {
  const { user } = useUser()
  const router = useRouter()

  if (!user?.publicMetadata?.siteOwner) return null

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        router.push(`/studio/intent/edit/${id};type/${type}`)
      }}
      className={className}
      aria-label="编辑"
    >
      <PencilSwooshIcon className="h-4 w-4" />
    </button>
  )
}
