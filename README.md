# AI Assisted Voice Pair Programmer
## Project Overview
### Pair Programming in Agile and Project's Contribution

- Pair programming is an Agile software development technique where two programmers work together at one worksttion.
- The roles typically include the "driver," who writes the code, and the "navigator" or "thinker," who reviews each line of code as it's written, questioning the code and considering alternatives. This collaborative approach enhances code quality, promotes knowledge sharing, and reduces errors.
- This project facilitates pair programming by providing an AI-assisted voice pair programming tool. The voice input integration allows programmers to intract with the tool in a natural conversational manner reducing the load of the navigator.This Project assists in generating code snippets or suggestions based on the context provided by the programmers, enhancing the productivity and efficiency of the pair programming process.

### Voice Input Integration
- Capture voice input from the user through a microphone connected to a Raspberry Pi.

### Integration with Generative Pre-trained Transformer  Model API
- Send captured voice input to a Generative Pre-trained Transformer model API.
- The API processes the input and generates relevant text based on the input context.

### Text-to-Voice Conversion
- Convert the generated text from the GPT model API back into voice format.

### Technology Stack For All The Forms Of Implementation
- This project is  the project using React, a JavaScript library for building user interfaces.
- This project effectively uses react hocks such as useState useEffect to improve perforamce and reduce the rendering cost on the client side and this project follows the components  style of coding making reusablity on point.
- This project uses NGNIX to configure the Raspberry Pi as a websever 
- NGNIX is a roboust webserver for serving static and dynamic content 
- This Project uses Python which is made as a script and ran over a Raspberry Pi along with a external microphone



## Forms of Implementation 
###  Implementation on Raspberry Pi
- Deploy the project on a Raspberry Pi, a small and affordable single-board computer.
- Run a Python script on the Raspberry Pi to handle integration with the GPT model API, voice input processing, and text-to-voice conversion functionalities.
### Stand-alone React Application
- Develop the user interface as a stand-alone React application.
- Provide users with a seamless and intuitive experience for interacting with the AI-assisted voice pair programming tool.


### Web Server Configuration
- Configure the Raspberry Pi as a web server using Nginx, a popular web server software.
- Serve the React application's content over the network, enabling users to access the AI-assisted voice pair programming tool remotely.

## SetUp - React App
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```
### Live Application URL

The Application is deployed in https://react-fp07-mm-kv-pp-ece-mcet.netlify.app

Click on the link to see the application

### Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **NavBar** Component: This component displays the navbar. It shows the project's title and the contact and about us section.

2. **MainContainer** Component: This component displays the recognized voice and its response. It retrieves its data from a JSON file containing the response returned by the API.

3. **Footer**: This component displays the footer. It includes the necessary details for the contact us section.ter** : This Component displays  footer . This Component displays the necessary details to for the contact us section.


#### API - Used
- A simple javascript fetch method is used  to fetch the Googles Gemini API with the corresponding format of the request headders and body 
- For more reference, visit [Gemini AI API Docs](https://ai.google.dev/gemini-api/docs?_gl=1*onpbrd*_up*MQ..&gclid=CjwKCAjw26KxBhBDEiwAu6KXtx4Kgq-jCZ__5A4Wp7bIgefosJJClYVztCEdVsyTZNnOjcYPGBSYBhoCbKAQAvD_BwE)




### Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app
## Setup -  NGINX Web Server: Serving Static Content

### Overview:
NGINX is a high-performance open-source web server renowned for its efficiency in serving static content. Originally developed to address the C10k problem (handling 10,000 simultaneous connections), NGINX has evolved into a versatile solution for web serving, reverse proxying, load balancing, and more. Its lightweight architecture and asynchronous event-driven approach make it ideal for serving static files efficiently.

### Purpose:
NGINX is primarily used as a web server to deliver static content swiftly and reliably. Its key purposes include:
- **Efficient Static Content Serving:** NGINX excels at serving static files such as HTML, CSS, JavaScript, images, and videos with minimal resource utilization, making it ideal for hosting websites, blogs, and media files.
- **Web Server:** NGINX acts as a robust and scalable web server, handling HTTP requests efficiently while ensuring high availability and low latency.

### Core Components and Architecture:
NGINX's architecture is built around an event-driven model, featuring:
- **Master Process:** Responsible for managing worker processes, configuration loading, and signal handling.
- **Worker Processes:** Handle client connections and execute requests asynchronously, allowing NGINX to handle a large number of concurrent connections efficiently.

## Web Serving: Serving Static Content Efficiently:
NGINX is optimized for serving static content, offering several advantages:
- **Asynchronous I/O:** NGINX's event-driven architecture enables it to handle numerous concurrent connections efficiently without creating separate threads or processes for each connection.
- **File Caching:** NGINX can cache static files in memory, reducing disk I/O and improving response times for frequently accessed content.
- **Gzip Compression:** NGINX supports on-the-fly compression of static files using gzip, reducing bandwidth usage and speeding up content delivery to clients.

### Installation on Raspberry Pi:
Installing NGINX on a Raspberry Pi (Raspbian OS) is straightforward using the package manager:
```bash
sudo apt update
sudo apt# NGINX Web Server: Basic Configuration
```

### Basic Configuration Settings:

After installation, basic configuration adjustments may include:

- **Document Root:** Define the directory where static files will be served from (`/var/www/html` by default).
- **Index File:** Specify the default file to serve when a directory is accessed (e.g., `index.html`).
- **Server Blocks:** Configure virtual hosts to host multiple websites on the same server if needed.

### Configuration Files Overview:

NGINX configuration files typically include:

- **nginx.conf:** Main configuration file, specifying global settings and including other configuration files.
- **sites-available/*:** Directory containing individual configuration files for virtual hosts.
- **sites-enabled/*:** Symbolic links to enabled virtual host configuration files.

## Configuring NGINX for Local Network Access

To access the NGINX-served webpage within your local network using the Raspberry Pi's IP address, follow these steps:

1. Open the NGINX configuration file:

   ```bash
   sudo nano /etc/nginx/sites-available/default


2. Locate the server_name directive within the server block and replace localhost with the Raspberry Pi's IP address or hostname:
nginx
```
server_name <Raspberry_Pi_IP>;
```
3.Save the configuration file and exit the text editor.
4.Restart NGINX to apply the changes:
```
sudo systemctl restart nginx
```
Now, you can access the NGINX-served webpage from any device on your local network by entering the Raspberry Pi's IP address or hostname in the web browser.
## Setup - python script over Raspberry Pi 
### Prerequisites
- python 2 or higher 
Refer to https://www.python.org/downloads/ to install python
- Then use pip to install the following 
```bash
 pip install requests 
pip install json
```

- Raspberry Pi os is flashed in a SD card and inserted in the Raspberry Pi 
- [Raspberry Pi  OS] reference ("https://www.raspberrypi.com/software/")
- the microphone is connected and configuration are maded using  alsamixer
- To run clone the python file and run it over a desired IDE 
  








