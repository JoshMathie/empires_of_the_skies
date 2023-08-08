# empires_of_the_skies
An implementation of the unpublished boardgame 'Empires Of The Skies'


# Local testing setup

-Ensure node is installed on your local machine (currently working on node v16)

-add your IP address to the server origins array within server.ts e.g. "http://192.168.1.121:3000", but replace 192.168.1.121 with your IP address

-swap the IP address for your IP address within the server URL within HomePage.tsx, keeping the port number the same (i.e. "YOUR.IP.ADDRESS:8000")

-run 'npm run serve' to start the server from within the program root

-in a separate process, run 'npm install && npm start' from within the program root

-Localhost server should have started, if it does not open a browser window automatically, you can open one yourself and search for localhost:[PORT] where PORT the port listed in the terminal following this command's execution

## notes on testing

If a client is unable to connect to the server, ensure the browser has not prepended https to the URL rather than HTTP.

