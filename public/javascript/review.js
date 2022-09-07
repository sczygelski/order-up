async function newFormHandler(event) {
    event.preventDefault();

    const address = document.querySelector('textarea[name="review-body"]').value.trim();
    const review_content = window.location.toString().split('/') [
        window.location.toString().split('/').length - 1
    ];

    if (review_text) {
        const response = await fetch('/reviews', {
            method: 'POST',
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

document.querySelector('.review-form').addEventListener('submit', newFormHandler)