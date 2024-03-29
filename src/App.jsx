import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <section className='bmi-section'>
        <div className='info'>
          <h1>Body Mass Index Calculator</h1>
          <p>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
        </div>
        <div className='calculator'>
          <h2>Enter your details below</h2>
          <div className='options'>
            <input value="metric" name='metric' id='metric' type="radio" />
            <label htmlFor="metric">Metric</label>
            <input value="imperial" name='imperial' id='imperial' type="radio" />
            <label htmlFor="imperal">Imperial</label>
          </div>
          <div className='bmi-result'>
            <div className='container'>
              <p className='title'>Your BMI is...</p>
              <p className='result'>25.6</p>
            </div>

            <div className='side-text'>
              <p>
                Your BMI suggests you’re a healthy weight. Your ideal weight is between <b>63.3kgs - 85.2kgs</b>.
              </p>
            </div>
            
          </div>
        </div>

      </section>
    </>
  )
}

export default App
