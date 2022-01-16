import React, { useState } from 'react'

import nextId from 'react-id-generator'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { addItemstoFormArray } from '../features/counter/form-slice'

function ModalPage(props) {
  const htmlId = nextId()
  const dispatch = useDispatch()

  const [question, setquestion] = useState('')
  const [fetChedquestion, setfetChedquestion] = useState('')
  const [pullDown, setpullDown] = useState('')
  const [options, setOptions] = useState({
    formName: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    optionType: '',
  })
  const [options1, setOptions1] = useState('')
  const [options2, setOptions2] = useState('')
  const [options3, setOptions3] = useState('')
  const [options4, setOptions4] = useState('')

  const [all, setall] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const fetchQustion = () => {
    setfetChedquestion(question)
  }

  const fetchAll = () => {
    setOptions({
      formId: htmlId,
      question: fetChedquestion,
      formName: props.title,
      option1: options1,
      option2: options2,
      option3: options3,
      option4: options4,
      optionType: pullDown,
    })

    let finalList = [...all, options]
    setall(finalList)
    console.log(all)

    dispatch(addItemstoFormArray(options))
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <Modal isOpen={props.showness} onRequestClose={closeModal}>
        <h2>{props.title}</h2>
        <input
          type="text"
          placeholder="Enter your question"
          onChange={(e) => {
            setquestion(e.target.value)
          }}
        />
        <button onClick={fetchQustion}>Add Question</button>
        <h2>{fetChedquestion}</h2>
        <h3 hidden={fetChedquestion === ''}> Answer type</h3>
        <select
          onChange={(e) => {
            setpullDown(e.target.value)
          }}
          hidden={fetChedquestion === ''}
          name=""
          id=""
        >
          <option value="none">Please select type of Answer</option>
          <option value="text">Free Text</option>
          <option value="checkbox">Check Box</option>
          <option value="radio">Radio buttons</option>
        </select>
        {/* <button disabled={pullDown === "none"} hidden={fetChedquestion === ""}>Add Answers</button> */}
        <div hidden={fetChedquestion === ''}>
          <label name="option1">Option 1</label>
          <input
            value={options1}
            onChange={(e) => {
              setOptions1(e.target.value)
            }}
            type="text"
          />
          <label name="option2">Option 2</label>
          <input
            value={options2}
            onChange={(e) => {
              setOptions2(e.target.value)
            }}
            type="text"
          />
          <label name="option3">Option 3</label>
          <input
            value={options3}
            onChange={(e) => {
              setOptions3(e.target.value)
            }}
            type="text"
          />
          <label name="option4">Option 4</label>
          <input
            value={options4}
            onChange={(e) => {
              setOptions4(e.target.value)
            }}
            type="text"
          />
          <button onClick={fetchAll}>Double Click to submit</button>
        </div>

        <button onClick={()=>{window.location.reload()}}>Close This Box</button>
      </Modal>
    </div>
  )
}

export default ModalPage
