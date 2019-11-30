var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequests: function(request, response){
        response.writeHead(200, {'Content-Type': 'text/html'});
        
        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./homepage.html', response);
                break;
            case '/jobseeker-nologin.html':
                renderHTML('./jobseeker-nologin.html', response);
                break;
            case '/JobseekerCreateAccount.html':
                renderHTML('./JobseekerCreateAccount.html', response);
                break;
            case '/AvailablePositions.html':
                renderHTML('./AvailablePositions.html', response);
                break;
            case '/JobDetail.html':
                renderHTML('./JobDetail.html', response);
                break;
            case '/resume.html':
            renderHTML('./resume.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }

    }
};