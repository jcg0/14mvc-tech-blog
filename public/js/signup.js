const signUp = async (e) => {
  e.preventDefault();
  console.log('where is the stuff')
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();


  // const response = await fetch('/api/users', {
  //   method: 'POST',
  //   body: JSON.stringify({ username, password }),
  //   headers: { "Content-Type": "application/json"},
  // });

  if(username && password){
    console.log(username)
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json"},
    });

    if(response.ok) {
      document.location.replace('/login');
    } else {
      alert('failed to create user');
    }
  }
};

document.querySelector('.signup').addEventListener('submit', signUp);