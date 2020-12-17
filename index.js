var req = new XMLHttpRequest();
req.onreadystatechange = function (e) {
  if (req.readyState == req.DONE && req.status == 200) {
    data = JSON.parse(this.responseText);

    const myRoot = document.querySelector('#root');
    data.map((item) => {
      document.querySelector('#root').innerHTML += `<tr><td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td><tr>`;
    });
  }
};
req.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
req.send();
