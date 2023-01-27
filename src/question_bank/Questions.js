import React from 'react'
import AskQuestion from './AskQuestion'
import QuestionItem from './QuestionItem'
import TagBar from './TagBar'

export default function Questions() {
  return (
    <div style={{paddingLeft:200,paddingRight:200,marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <div style={{margin:'0px 80px'}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'50px 10px 0px 0px'}}>
        <h5>Top Questions</h5>
        <AskQuestion />
      </div>
      <hr/>
      
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      </div>
      
      <TagBar />
    </div>
  )
}
