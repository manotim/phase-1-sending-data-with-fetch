// Add your code here
function submitData(name, email) {
    return fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      })
      .then((res) => {
        if(!res.ok) {
          throw new Error('network not working')
        }
        return res.json()
      })
      .then((data) => {
        let newId = data.id
        let idText = document.createTextNode(newId)
        document.body.appendChild(idText)
      })
      .catch((error) => {
        // console.error('error occured', error)
        let textError = document.createTextNode(error.message)
        document.body.appendChild(textError)
      })
      
}