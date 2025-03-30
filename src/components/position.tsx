import React from 'react'

const Position = () => {
  return (
    <div className="bg-white text-black">
      {/* Make this div tall and scrollable */}
      <div className="relative h-[200vh] overflow-y-auto bg-red-300 p-20">
        {/* Sticky div */}
        <div className="sticky top-0">
          <div className="z-10 h-52 w-52 bg-green-300"></div>
        </div>
      </div>

      {/* Another section below */}
      <div className="z-50 h-screen bg-blue-500 p-5">asd</div>
    </div>
  )
}

export default Position
