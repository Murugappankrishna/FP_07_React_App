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
