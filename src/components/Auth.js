export const BASE_URL = 'https://auth.nomoreparties.co';


export const register = (email, password) => {
    //console.log(email, password)
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(({
        "email": email,
        "password": password
      }))
  })
  .then((response) => {
    try {
      if (response.status === 201){
        return response.json();
      }
    } catch(e){
      return (e)
    }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => {
      console.log(err)});
}; 

export const authorise = (email, password) => {
    //console.log(email, password)
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => {
    try {
      if (response.status === 200){
        //console.log(response)
        return response.json();
      }
    } catch(e){
      return (e)
    }
  })
  .then((data) => {
    if (data.token){
      localStorage.setItem('token', data.token);
      //console.log(data)
      return data;
    } else {
      return;
    }
   }) 
  .catch((err) => console.log(err));
}; 

export const getContent = (token) => {

  return fetch(`${BASE_URL}/users/me`, {
    headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
    },
  })
  .then((res) => {
    if (res){
        return (res.json)
    } else {
        return
    }
  })
  .catch((err) => console.log(err));
}; 