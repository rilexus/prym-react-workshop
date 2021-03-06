import React, {useEffect, useState} from "react";

function withUserApi (Component) {

  async function fetchUser(byID) {
    return new Promise((res)=>{
      setTimeout(() => {
        res({name: 'Stan'})
      }, 2000)
    })
  }

  return (props) => <Component {...props} fetchUser={fetchUser}/>
}

const UserList = ({fetch}) => {
  const [user, setUser] = useState({name: ''})

  useEffect(() => {
    fetch('id').then((user) => {
      setUser(user)
    })

  })

  return (
    <div>
      {user.name}
    </div>
  )
}


export const WithFetchUserComponent = withUserApi(UserList)