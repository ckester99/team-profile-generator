class genHTML {
    getTemplateHead() {
        return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                <script src="https://kit.fontawesome.com/a6bc5d1964.js" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="./style.css" />
                <title>My Team</title>
            </head>
            <body>
                <nav class="navbar bg-primary justify-content-center" style="height: 15vh"><h1 class="navbar-text text-white fs-2">My Team</h1></nav>
                <main class="d-flex justify-content-evenly" style="padding: 5%">`;
    }

    getTemplateTail() {
        return `</main>
        </body>
    </html>`;
    }

    genMember() {
        return `<div class="card rounded-3" style="width: 16rem">
        <div class="card-body p-0">
            <div class="bg-primary rounded-top text-white px-4 pt-3 pb-2">
                <h2 class="">Name</h2>
                <h3>Title</h3>
            </div>
            <div class="d-flex flex-column justify-content-center px-4 mb-4" style="height: 9rem">
                <div>ID</div>
                <div>Email</div>
                <div>Custom</div>
            </div>
        </div>
    </div>`;
    }
}

module.exports = genHTML;
