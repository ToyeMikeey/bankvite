import { useState } from 'react'
import { Menu, CreditCard, PlusCircle, Globe, FileText, ArrowLeftRight, Percent, Gamepad2 } from 'lucide-react'

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState('11:03')
  const [batteryLevel, setBatteryLevel] = useState('23')

  return (
    <div className="max-w-md mx-auto bg-gray-100 h-screen overflow-y-auto">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        <span className="font-bold">{currentTime}</span>
        <div className="flex items-center space-x-1">
          <span className="font-bold">5G</span>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 19H17V8H7V19ZM9 10H15V17H9V10Z" fill="currentColor" />
            <path d="M8 5H16V7H8V5Z" fill="currentColor" />
          </svg>
          <span>{batteryLevel}%</span>
        </div>
      </div>

      {/* Menu Button */}
      <div className="p-4">
        <button className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">
          <Menu size={24} />
          <span className="font-semibold">Menu</span>
        </button>
      </div>

      {/* Dashboard Title */}
      <h1 className="text-3xl font-bold px-4 mt-4 mb-6">Dashboard</h1>

      {/* Limit Upgraded Section */}
      <div className="mx-4 bg-purple-400 rounded-full flex items-center overflow-hidden">
        <div className="bg-purple-600 py-3 px-6 text-white font-semibold">Limit Upgraded</div>
        <div className="flex-grow text-center py-3 text-white font-semibold">Manage Limits</div>
      </div>

      {/* Account Card */}
      <div className="mx-4 mt-6 bg-purple-700 rounded-xl p-4 text-white shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">FCMB</span>
          <span className="bg-purple-900 px-3 py-1 rounded-full text-sm">FLEXX YOUTH SAVINGS TIER 3</span>
        </div>
        <div className="text-4xl font-bold mb-4">₦2,690,200.69</div>
        <div className="flex justify-between">
          <div>
            <div className="text-sm opacity-80">A/C NAME</div>
            <div className="font-semibold">E MICHAEL ADETOYE</div>
          </div>
          <div>
            <div className="text-sm opacity-80">A/C NUMBER</div>
            <div className="font-semibold">9761591 10</div>
          </div>
        </div>
      </div>

      {/* Card Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-2 gap-4 mx-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex items-center space-x-2 mb-2">
            <PlusCircle className="text-yellow-500" size={24} />
            <span className="font-semibold text-lg">Gro</span>
          </div>
          <p className="text-sm text-gray-600">Start Investing Now</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex items-center space-x-2 mb-2">
            <Globe className="text-blue-500" size={24} />
            <span className="font-semibold text-lg">Play WWTBAM</span>
          </div>
          <p className="text-sm text-gray-600">Play our trivia games and get a chance to be on th...</p>
        </div>
      </div>

      {/* Expense Tracker */}
      <div className="mx-4 mt-6 bg-white rounded-xl overflow-hidden shadow">
        <div className="flex">
          <div className="w-1/2">
            <img src="/placeholder.svg?height=100&width=180" alt="Expense tracker illustration" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 p-4 bg-gray-800 text-white">
            <h3 className="font-semibold mb-2">See your money trail</h3>
            <h2 className="text-xl font-bold mb-2">Expense Tracker</h2>
            <button className="text-yellow-500 font-semibold">Get Started &gt;</button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-between items-center px-4 py-2">
        <button className="flex flex-col items-center">
          <CreditCard className="text-yellow-500" size={24} />
          <span className="text-xs mt-1">Airtime</span>
        </button>
        <button className="flex flex-col items-center">
          <FileText className="text-yellow-500" size={24} />
          <span className="text-xs mt-1">Pay Bills</span>
        </button>
        <button className="flex flex-col items-center">
          <ArrowLeftRight className="text-yellow-500" size={24} />
          <span className="text-xs mt-1">Transfer</span>
        </button>
        <button className="flex flex-col items-center">
          <Percent className="text-yellow-500" size={24} />
          <span className="text-xs mt-1">Loans</span>
        </button>
        <button className="flex flex-col items-center">
          <Gamepad2 className="text-yellow-500" size={24} />
          <span className="text-xs mt-1">Betting</span>
        </button>
      </div>
    </div>
  )
}