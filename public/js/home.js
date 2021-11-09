const deleteBtn = document.querySelectorAll('button[data-action="delete"]');

for (let i = 0;i<deleteBtn.length;i++){
    deleteBtn[i].addEventListener('click',() => {
       const taskId = deleteBtn[i].dataset.taskid;
        deleteTodo(taskId);

    })
}
const deleteTodo = (taskId) => {
    console.log(taskId);
    
    
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      // Typical action to be performed when the document is ready:
      location.reload();
    }
  };
  xhttp.open("DELETE", "/api/task/", true);
  xhttp.send(JSON.stringify(taskId));
  
};



