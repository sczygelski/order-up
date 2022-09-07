async function reviewFormHandler(event) {
    event.preventDefault();

<<<<<<< HEAD
    const address = document.querySelector('textarea[name="review-body"]').value.trim();
    const review_content = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (review_text) {
        const response = await fetch('/reviews', {
            method: 'GET',
=======
    const review_text = document.querySelector('textarea[name="review-body"]').value.trim();
   // const post_id = window.location.toString().split('/') [
   //     window.location.toString().split('/').length - 1
   // ];
   console.log(review_text);
    if (review_text) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
>>>>>>> f698c4dcc91149fd7d6c50d8fd1274a5d1e624bd
            body: JSON.stringify({
                post_id,
                review_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText)
        }
    }
};

<<<<<<< HEAD
document.querySelector('.post').addEventListener('submit', newFormHandler)
=======
document.querySelector('.review-form').addEventListener('submit', reviewFormHandler)
>>>>>>> f698c4dcc91149fd7d6c50d8fd1274a5d1e624bd
