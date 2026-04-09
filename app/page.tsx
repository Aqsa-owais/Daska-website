'use client'

import { useState } from 'react'
import Image from 'next/image'
import HomePage from '@/components/HomePage'
import RecordingPage from '@/components/RecordingPage'
import AssessmentsPage from '@/components/AssessmentsPage'
import CourseOutline from '@/components/CourseOutline'

type CurrentPage = 'home' | 'recording' | 'assessments' | 'course'

export default function Page() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home')

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-sidebar border-r border-border shadow-sm">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iCodeGuru%20Logo%20Original-j86PYpjY70XAZnu548woks156fxIw3.jpeg"
                alt="iCodeGuru Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-sm font-bold text-foreground">iCodeGuru</h1>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <button
            onClick={() => setCurrentPage('home')}
            className={`w-full px-4 py-3 text-left rounded-lg font-medium transition-colors ${
              currentPage === 'home'
                ? 'bg-primary text-primary-foreground'
                : 'text-sidebar-foreground hover:bg-muted'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('course')}
            className={`w-full px-4 py-3 text-left rounded-lg font-medium transition-colors ${
              currentPage === 'course'
                ? 'bg-primary text-primary-foreground'
                : 'text-sidebar-foreground hover:bg-muted'
            }`}
          >
            Course Outline
          </button>
          <button
            onClick={() => setCurrentPage('recording')}
            className={`w-full px-4 py-3 text-left rounded-lg font-medium transition-colors ${
              currentPage === 'recording'
                ? 'bg-primary text-primary-foreground'
                : 'text-sidebar-foreground hover:bg-muted'
            }`}
          >
            Recordings
          </button>
          <button
            onClick={() => setCurrentPage('assessments')}
            className={`w-full px-4 py-3 text-left rounded-lg font-medium transition-colors ${
              currentPage === 'assessments'
                ? 'bg-primary text-primary-foreground'
                : 'text-sidebar-foreground hover:bg-muted'
            }`}
          >
            Assessments
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'course' && <CourseOutline />}
        {currentPage === 'recording' && <RecordingPage />}
        {currentPage === 'assessments' && <AssessmentsPage />}
      </main>
    </div>
  )
}
