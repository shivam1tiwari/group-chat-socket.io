# Group Chat Socket
## How to run on your local machine
### 1. Open your editor like vscode 
### 2. Open Terminal and paste following code
 ```bash
   git clone https://github.com/shivam1tiwari/group-chat-socket.io.git
   cd group-chat-socket
```
### 3. Run command
#### 1. First step 

 ```javascript
   cd frontend
   npm install
   npm run dev
```
#### 2.Second step 
##### Open new terminal and 
 ```javascript
   cd backend
   npm install
   npm start   
```
### 4. Now you can chat and can see in console

# Description-
## Tech Stak 
- React
- NodeJs
- Socket.io
- Socket.io-client
- Express
## How it works
 -  We first create express app and sync with socket
 -  I set cors from where request will come like origin and method
 - We have room any one connect with server will subscribe room1 and after that
 - If anyone send message then it will send to others  


