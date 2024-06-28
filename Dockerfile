# Use the official JDK 17 image as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the jar file into the container at /app
COPY target/fullstack_person-0.0.1-SNAPSHOT.jar /app/fullstack_person.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "fullstack_person.jar"]
