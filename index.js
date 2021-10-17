function run()
{
 event.preventDefault();
 const name=document.getElementById('name').value;
 const email=document.getElementById('email').value;
 const number=document.getElementById('number').value;
 const branch=document.getElementById('dropdown').value;
 const batch=document.querySelector('input[name="batch"]:checked').value;;
 const diplomaStudent=document.getElementById('diploma-student').checked;
 const hostelite=document.getElementById('hostelite').checked;
 const immigrant=document.getElementById('out-of-state-immigrant').checked;
 const feedback=document.getElementById('feedback').value;

 var data={
  'name':name,
  'email':email,
  'number':number,
  'branch': branch,
  'batch': batch,
  'diplomaStudent': diplomaStudent,
  'hostelite': hostelite,
  'immigrant': immigrant,
  'feedback': feedback,
 }

 fetch(location.href, {
  method: 'POST',
  headers:{},
  body:data
 })
 .catch
 {
  alert("Network error");
 }

}
