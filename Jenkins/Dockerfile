FROM jenkins/jenkins
USER root

# Update
RUN apt-get update

# Install Node
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get install -y nodejs
RUN npm install --global eslint

# Drop back to the regular jenkins user - good practice
USER jenkins
