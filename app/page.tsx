import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { DashboardContent } from '@/components/dashboard-content'

export default function HomePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}