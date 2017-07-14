#!/usr/bin/env python
import SimpleHTTPServer  # http.server
import SocketServer
import socket
import os
frontend_path = os.path.realpath(
    os.path.join(
        os.path.dirname(__file__),
        '../frontend'
    )
)

print("Changing serve path to: " + frontend_path)

os.chdir(frontend_path)

HOST = socket.gethostname()
PORT = 1036
address = ("", PORT)

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(address, Handler)

print("serving at port", PORT)

try:
    httpd.serve_forever()
except KeyboardInterrupt:
    httpd.shutdown()

