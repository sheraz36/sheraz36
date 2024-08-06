<!DOCTYPE html>
<html lang="ur">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موبائل گیو اوے</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        .container {
            max-width: 100%;
            margin: 0 auto;
            padding: 10px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        header h1 {
            font-family: 'Georgia', serif;
            color: #333;
            margin: 10px 0;
        }

        .mobile-image {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }

        .giveaway-details {
            margin-bottom: 20px;
            padding: 0 10px;
        }

        button {
            background-color: #28a745;
            color: #fff;
            border: none;
            padding: 12px 24px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            margin: 10px 0;
        }

        button:hover {
            background-color: #218838;
        }

        footer p {
            font-size: 14px;
            color: #777;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>موبائل گیو اوے</h1>
        </header>

        <main>
            <section class="giveaway-details">
                <img src="https://i.pinimg.com/originals/1e/2d/84/1e2d8446cb622dc056bd0eaa54f6433b.jpg" alt="Infinix Note 30" class="mobile-image">
                <h2>موبائل قیمت: 1 روپے</h2>
                <p>اس موبائل کو جیتنے کا موقع پانے کے لئے نیچے دیے گئے طریقوں سے حصہ لیں:</p>
                <ul>
                    <li><strong>JazzCash:</strong> 03203702822</li>
                    <li><strong>EasyPaisa:</strong> 03405809305</li>
                </ul>
            </section>

            <button id="participate-btn">حصہ لیں</button>
        </main>

        <footer>
            <p>© 2024 موبائل گیو اوے۔ تمام حقوق محفوظ ہیں۔</p>
        </footer>
    </div>

    <script>
        document.getElementById('participate-btn').addEventListener('click', function() {
            // Try to open JazzCash app
            const jazzCashURL = 'jazzcash://';
            const easyPaisaURL = 'easypaisa://';
            
            // Create a temporary iframe to attempt to open JazzCash app
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = jazzCashURL;
            document.body.appendChild(iframe);
            
            // Set a timeout to fall back to EasyPaisa after a short delay
            setTimeout(function() {
                // Check if JazzCash app was opened
                if (!document.hidden) {
                    window.location.href = easyPaisaURL; // Open EasyPaisa if JazzCash not opened
                }
            }, 2000); // Adjust the timeout as needed

            // Show a confirmation message
            alert('شکریہ! آپ نے گیو اوے میں حصہ لے لیا ہے۔');
        });
    </script>
</body>
</html>
