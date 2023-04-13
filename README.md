# Silverfun Web App

## Introduction & Explanation
SilverFun is a one-stop elderly care application for elderly or caregivers who want to find information to best help the elderly in their family or IT-literate elderly and empower the elderly to be more active members of society.

Despite initially harbouring negative attitudes towards technology, many elderly individuals still use it voluntarily for the top 3 activities of communication (80%), leisure (51%) and obtaining information (51%). However, they often encounter challenges such as:
1. Visual Impairments such as colour vision and contrast sensitivity causes them trouble in seeing small details
2. Overwhelming Information on webpages tend to confuse them and turns them away from using online services
3. Difficulty in understanding how applications work often occur as the webpage are often not intuitive to them

These challenges highlight a need to condense these internet activities into a platform that is intuitive and simple to use for the elderly, so as to empower more to adopt technology as part of their lives. For our project, we decided to focus on creating a website that helps elderly finding information and leisure activities easily. By using datasets from data.gov.sg, we curated an app that consolidates the information on health and medical services, government services, and activities, all of which are what the elderly typically search for.

Our web app aims to help elderly users discover nearby activities and healthcare services. To prevent information overload, the app offers only the essential details, such as the address, operating hours, and website. The app also includes a sign-up and login feature for potential expansion to include a scheduler feature. Our goal is to change elderly individuals' attitudes towards technology and online services by offering an intuitive and easy-to-use platform that empowers them to adopt technology into their daily lives.

### Tech Stack
Silverfun web application is built primarily using React.js, alongside the Tailwind CSS framework. The main APIs utilised for this application should be the Firebase Authentication REST API, Google Maps API, and a custom Python Flask RESTful API for distance calculation.

### UI/UX Analysis
For a UI/UX analysis on creating the SilverFun web app, proceed to https://drive.google.com/file/d/1KZseRRyXQrq_K50lnIQLF-SEi2R-Qvdj/view

## Installation Instructions
This is a very simplified guide on setting up local environment for Windows

### Setting up repository
Go to a folder where you want the repository to be in
Clone the repository 
``` git clone https://github.com/htuttttt/SilverFun-Web-Application.git ```

### Install required dependencies 
To install required dependencies, follow steps below. 
1. Install npm
2. Install required npm dependencies
``` 
npm i
```

### Start Application
To start the application, run command below in terminal. 
``` 
npm run start
```

Note that Google Maps related functionalities require Google Maps API key to be entered on source code to be able to display.
