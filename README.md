#Angular Music History

Conversion of the Music History project to using AngularJS & RequireJS

Long running project with multiple iterations.  Current state is using modular RequireJS construction and ECMAScript 6 via the Babel transpiler.

Allows for submission & viewing of songs with filters by album/artist/genre and a full-text search.

###Requirements:
- Node.js https://nodejs.org/en/
- Installation of http-server via _npm install -g http-server_
- Installation of bower via _npm install -g bower_

###Post Cloning:
- Inside the _lib_ directory:
  - Run _npm install_
  - Run _bower install_
- Inside the main repo directory:
 - Run _http-server_
 - Make note of the port number returned after running _http-server_
- Navigate to http://localhost:[your-port-number]

###Usage:
- Add Music menu option allows for adding of new songs to the database
- View Music provides filtering of the added songs via the form to the left
