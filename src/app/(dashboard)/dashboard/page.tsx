import QuotationButton from '@/components/create-quotation/quotationButton'
import DashboardCard from '@/components/dashboard-card'
import InfoBar from '@/components/infobar/page'
import { QuotationTable } from '@/components/quotationtable/quote-table'
import CalIcon from '@/icons/cal-icon'
import PersonIcon from '@/icons/person-icon'
import { DollarSign } from 'lucide-react'
import React from 'react'

const DashBoardPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <InfoBar />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard
            value={24}
            title="Clients Requests"
            icon={<PersonIcon />}
          />
          <DashboardCard
            value={36}
            title="Client Items Recorded"
            icon={<PersonIcon />}
          />
          <DashboardCard value={12} title="Quotations" icon={<CalIcon />} />
          <DashboardCard
            value={200}
            title="Quotation Value"
            icon={<DollarSign />}
          />
        </div>
        
        <QuotationButton />
        
        <div className="bg-gray-100 rounded-lg p-4">
          <QuotationTable />
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage