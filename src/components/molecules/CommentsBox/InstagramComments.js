import React from 'react'
import InstagramComment from '../../atoms/Dashboard/InstagramComment'
import { v4 as uuidv4 } from 'uuid'
import { Divider } from '@material-ui/core'
import List from '@material-ui/core/List'

const Comments = [
  {
    userName: 'Nome 1',
    userComment:
      'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
  },
  {
    userName: 'Nome 2',
    userComment:
      'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
  },
  {
    userName: 'Nome 3',
    userComment:
      'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
  },
  {
    userName: 'Nome 4',
    userComment:
      'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
  },
  {
    userName: 'Nome 5',
    userComment:
      'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
  },
  {
    userName: 'Nome 6',
    userComment:
      'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
  },
  {
    userName: 'Nome 7',
    userComment:
      'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
  },
  {
    userName: 'Nome 8',
    userComment:
      'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
  },
  {
    userName: 'Nome 9',
    userComment:
      'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
  },
  {
    userName: 'Nome 10',
    userComment:
      'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
  }
].reverse()

const CommentList = Comments.map(comment => {
  return (
    <>
      <InstagramComment
        key={uuidv4()}
        userName={comment.userName}
        userComment={comment.userComment}
      />
      <Divider />
    </>
  )
})


export default function InstagramComments () {
  return (
    <List component='nav' dense>
      {CommentList}
    </List>
  )
}
