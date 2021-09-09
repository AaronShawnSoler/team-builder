import React from 'react'

export default function List(props) {
  const { team } = props

  return (
    <div>
      {team.map(member => <Member  member={member}/>)}
    </div>
  )
}

function Member(props) {
  const {member} = props

  return (
    <div>
      <h2>{member.name}</h2>
      <p>{member.email}</p>
      <p>{member.role}</p>
    </div>
  )
}
