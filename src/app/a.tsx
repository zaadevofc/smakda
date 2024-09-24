export default function ProductionCalculator() {
  return (
    <div className="bg-purple-900 p-6 min-h-screen">
      <div className="bg-lime-300 rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">Calculate The Production Property We Can Do.</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white text-black rounded">Overview</button>
          <button className="px-4 py-2 bg-black text-white rounded">Calculator</button>
          <button className="px-4 py-2 bg-white text-black rounded">History And Development</button>
          <button className="px-4 py-2 bg-white text-black rounded">Special Program</button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 flex space-x-6">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold mb-4">Calculator Simulation</h2>
          <div className="w-full mb-4 p-2 border rounded">Property Value</div>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="text" placeholder="m²" className="w-1/3 mr-2 p-2 border rounded" />
              <input type="text" placeholder="Property Value" className="w-2/3 p-2 border rounded" />
            </div>
            <div className="flex items-center">
              <input type="text" placeholder="m²" className="w-1/3 mr-2 p-2 border rounded" />
              <input type="text" placeholder="Property Value" className="w-2/3 p-2 border rounded" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span>Total Value</span>
              <span>$ 7000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-lime-300 h-2.5 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <h2 className="text-xl font-semibold mb-4">Bid For Data Results</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="text-3xl font-bold">$1,600<span className="text-sm font-normal">/Month</span></p>
          </div>
          <button className="w-full bg-black text-white p-2 rounded">
            $1,200<span className="text-sm">/Month</span>
          </button>
          <p className="text-sm text-center mt-2">Payment includes Tax 0%</p>
        </div>
      </div>
    </div>
  )
}