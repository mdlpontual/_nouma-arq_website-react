import React from 'react'
import IMG from './assets/imagesHUB'

function App() {
  return (
    <>
      <div id="cont" className='container-fluid'>
        <div id="row-logo" className='row'>
          <div id="logo" className='col d-flex justify-content-center align-items-end'>
            <img src={IMG.noumaBlackFullLogoPNG} />
          </div>
        </div>
        <div id="row-text" className='row'>
          <div id="text" className='col d-flex justify-content-center align-items-center'>
            <div>
              <h1>Site em Construção...</h1>
              <h4>(Under Construction)</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App