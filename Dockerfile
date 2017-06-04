# take from the smaller node alpine image
FROM node:alpine

RUN mkdir -p /opt/adventure

# Set the current directory to the newly created one
WORKDIR /opt/adventure

# Get all the dependancies.
COPY package.json package.json
RUN npm install

# get the rest of the code
COPY . .