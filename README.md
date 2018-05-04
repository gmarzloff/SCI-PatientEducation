![SCI Web App](images/readme/openrehab-logo.png)

# Spinal Cord Injury Education for Patients

![SCI Education Web App](images/readme/screenshot.png)

## Introduction

This is a web app designed to be a quick reference for patients with spinal cord injuries and their families. It uses the [Framework7.io](https://framework7.io) library. Users with little to no experience can:

1. download the app from a code repository
2. customize the content
3. create new content and features
4. push these new features back to the repository to contribute to the project.

If you want the full suite of reference apps installed complete with a launch page, you probably want the [OpenRehab superproject](https://github.com/gmarzloff/OpenRehab). See **Basic Installation** in that README.

## Tutorial
An updated tutorial is forthcoming. For a similar tutorial, see the [OpenRehab SCI Github respository](https://github.com/gmarzloff/OpenRehab-SCI). 

## Basic Installation
If you have git installed (see tutorial), you can quickly get started with three commands. In a terminal, type: 

```
$ git clone --recurse-submodules https://github.com/gmarzloff/OpenRehab-SCI.git
$ cd OpenRehab-SCI
$ python -m SimpleHTTPServer 8000
```
Then open the web app in a browser: [http://localhost:8000](http://localhost:8000)

To stop the web server (which is only accessible to your local network by default), press `Ctrl`+`C` in the terminal. You should see the terminal prompt which ends with a `$` and cursor to know the server has terminated.

## View on Mobile device
While your SimpleHTTPServer is running, you can view the app on your phone or tablet, though this device must be connected to the same network as your computer (now webserver). First find out your computer's ip address. 

In OSX, you can copy and paste the following line in a terminal then hit enter:  

```
$ ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -d\  -f2
```
In Windows, click Start -> Run -> cmd (enter)-> ipconfig (enter)

The address probably looks like `192.168.1.something`. Type this address without the [ ] in your mobile browser: ``` http://[ip address]:8000 ```

