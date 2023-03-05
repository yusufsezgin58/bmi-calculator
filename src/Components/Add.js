import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useState } from 'react'

function Add() {

  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [result, setResult] = useState()

  return (
    <div className={styles.add} >
      <div>
        <h4>Calculate Body Mass Index</h4>
      </div>
      <div className='mt-3'>
        <label>Height</label>
        <input type={"text"} className="form-control mt-1" placeholder='1.90' value={height} onChange={(e) => {
          setHeight(e.target.value)
        }} />
        <label className='mt-3'>Weight</label>
        <input type={"text"} className="form-control mt-1" placeholder='70' value={weight} onChange={(e) => {
          setWeight(e.target.value)
        }} />
        <button className='btn btn-light float-end mt-3 px-3' onClick={() => {
          setResult((weight / (height * height)))
        }}>Result</button>
      </div>
      <hr />
      <div>
        <h5 className='text-light fw-semibold text-center'>Your BMI value : {result}</h5>
      </div>
      <hr />
      <div className='mt-3'>
        <h4>Some Informations</h4>
        <table class="table mt-3">
          <tbody className='table-light'>
            <tr>
              <td>0 - 18.4</td>
              <td>Thin</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td>Overweight</td>
            </tr>
            <tr>
              <td>30.0 - 34.9</td>
              <td>Fat - Class I</td>
            </tr>
            <tr>
              <td>35.0 - 44.9</td>
              <td>Fat - Class II</td>
            </tr>
            <tr>
              <td>45.0 and over</td>
              <td>Fat - Class III</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Add
