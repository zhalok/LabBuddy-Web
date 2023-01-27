import React from 'react'
import AskForum from './AskForum'
import ForumItem from './ForumItem'
import TagBar from './TopUser'

export default function Forum() {
  return (
    <div style={{paddingLeft:200,paddingRight:200,marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <div style={{margin:'0px 80px'}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'50px 10px 0px 0px'}}>
        <h5>Top Asked Questions on Forum</h5>
        <AskForum />
      </div>
      <hr/>
      
      <ForumItem />
      <ForumItem />
      <ForumItem />
      <ForumItem />
      <ForumItem />
      <ForumItem />
      <ForumItem />
      <ForumItem />
      </div>
      
      <TagBar />
    </div>
  )
}
