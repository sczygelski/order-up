async function newFormHandler(event) {
    event.preventDefault();
  
    const address = document.querySelector('input[name="review-title"]').value.trim();
    const review_content = document.querySelector('input[name="review-text"]').value.trim();
    console.log(address);
    console.log(review_content);

    //console.log(review_content);
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        address,
        review_content
        // session id thing goes here
      }),
      
      headers: {
        'Content-Type': 'application/json'
      }
      
    });
    console.log(response);
    if (response.ok) {

      document.location.replace('/view-reviews');
      console.log("review created");
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  