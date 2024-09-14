import { useState } from 'react'
import { Menu, CreditCard, PlusCircle, Globe, FileText, ArrowLeftRight, Percent, Gamepad2, ChevronLeft, Phone, Wifi } from 'lucide-react'

function AirtimeView({ onBack }) {
  const [selectedOption, setSelectedOption] = useState('airtime')

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-4">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="text-purple-700 mr-4">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Buy Airtime</h1>
      </div>

      <div className="flex rounded-full bg-gray-200 p-1 mb-6">
        <button className="flex-1 rounded-full py-2 px-4 bg-purple-600 text-white font-semibold">Recharge</button>
        <button className="flex-1 rounded-full py-2 px-4 text-gray-700 font-semibold">Upcoming</button>
        <button className="flex-1 rounded-full py-2 px-4 text-gray-700 font-semibold">History</button>
      </div>

      <p className="text-lg mb-4">What would you like to do? *</p>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <label className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Phone className="text-purple-600 mr-3" size={24} />
            <span className="text-lg">Airtime</span>
          </div>
          <input
            type="radio"
            name="option"
            value="airtime"
            checked={selectedOption === 'airtime'}
            onChange={() => setSelectedOption('airtime')}
            className="form-radio h-5 w-5 text-purple-600"
          />
        </label>
        <label className="flex items-center justify-between">
          <div className="flex items-center">
            <Wifi className="text-purple-600 mr-3" size={24} />
            <span className="text-lg">Data</span>
          </div>
          <input
            type="radio"
            name="option"
            value="data"
            checked={selectedOption === 'data'}
            onChange={() => setSelectedOption('data')}
            className="form-radio h-5 w-5 text-purple-600"
          />
        </label>
      </div>

      <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-full">
        Recharge
      </button>
    </div>
  )
}

function Dashboard({ onAirtimeClick }) {
  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen p-4">
      <div className="p-4">
        <button className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">
          <Menu size={24} />
          <span className="font-semibold">Menu</span>
        </button>
      </div>

      <h1 className="text-3xl font-bold px-4 mt-4 mb-6">Dashboard</h1>

      <div className="mx-4 bg-purple-400 rounded-full flex items-center overflow-hidden">
        <div className="bg-purple-600 py-3 px-6 text-white font-semibold">Limit Upgraded</div>
        <div className="flex-grow text-center py-3 text-white font-semibold">Manage Limits</div>
      </div>

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

      <div className="flex justify-center mt-4 space-x-2">
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>

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

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-between items-center px-4 py-2">
        <button className="flex flex-col items-center" onClick={onAirtimeClick}>
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

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard')

  return (
    <>
      {currentView === 'dashboard' ? (
        <Dashboard onAirtimeClick={() => setCurrentView('airtime')} />
      ) : (
        <AirtimeView onBack={() => setCurrentView('dashboard')} />
      )}
    </>
  )
}