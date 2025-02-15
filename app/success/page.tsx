'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function AvatarDisplay(): JSX.Element {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedAvatar = localStorage.getItem('avatar');
    if (storedAvatar) {
      setAvatarUrl(storedAvatar);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800">
      {avatarUrl ? (
        <Image width={32} height={32} src={avatarUrl} alt="Uploaded Avatar" className="size-32 rounded-full" />
      ) : (
        <p className="text-white">No avatar uploaded.</p>
      )}
    </div>
  );
}
