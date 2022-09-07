async function newFormHandler(event) {
    event.preventDefault();
  
    const address = document.querySelector('input[name="review-title"]').value;
    const review_content = document.querySelector('input[name="review-url"]').value;
  
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        review_url
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
  