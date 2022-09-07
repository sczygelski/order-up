async function newFormHandler(event) {
    event.preventDefault();
  
    const address = document.querySelector('input[name="review-address"]').value;
    const review_content = document.querySelector('input[name="review_content"]').value;
  
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        address,
        review_content
      }),
      
      headers: {
        'Content-Type': 'application/json'
      }
      
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
      console.log("review created");
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-review-form').addEventListener('submit', newFormHandler);
  