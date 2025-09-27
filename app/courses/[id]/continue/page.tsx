
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CourseContinuePage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;

  useEffect(() => {
    // 重定向到开始页面，实际项目中可以跳转到上次学习的章节
    router.push(`/courses/${courseId}/start`);
  }, [courseId, router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <div className="w-16 h-16 mx-auto mb-4 animate-spin">
          <i className="ri-loader-4-line text-4xl text-red-400"></i>
        </div>
        <p className="text-gray-300">正在跳转到课程...</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ];
}
