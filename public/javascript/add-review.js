async function newFormHandler(event) {
    event.preventDefault();
  
<<<<<<< HEAD
    const address = document.querySelector('input[name="title"]').value;
    const review_content = document.querySelector('input[name="review"]').value;
  
=======
    const address = document.querySelector('input[name="review-title"]').value.trim();
    const review_content = document.querySelector('input[name="review-text"]').value.trim();
    console.log(address);
    console.log(review_content);

    //console.log(review_content);
>>>>>>> f698c4dcc91149fd7d6c50d8fd1274a5d1e624bd
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        address,
        review_content
<<<<<<< HEAD
=======
        // session id thing goes here
>>>>>>> f698c4dcc91149fd7d6c50d8fd1274a5d1e624bd
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
  