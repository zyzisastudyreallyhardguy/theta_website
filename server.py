#!/usr/bin/env python3
"""
A simple HTTP server for hosting the THETA TEAM website locally.
"""
import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
    '.svg': 'image/svg+xml',
})

print(f"Server starting at http://localhost:{PORT}")
print("Press Ctrl+C to stop the server")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever() 