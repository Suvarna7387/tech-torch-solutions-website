import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import backgroundImage from "../images/careerbgimg.jpg"; // Import your background image file
import backgroundimgforjobfind from "../images/Careerpgbgimg2.jpg";

const Career = () => {
  const redirectToLinkedInJobs = () => {
    window.open(
      "https://www.linkedin.com/company/techtorch-solutions-pune/jobs/",
      "_blank"
    );
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.careerText}>Career with us</div>
        <div style={styles.textDescription}>
          The Future is open.“Your work is going to fill a large part of your
          life, the only way to do great work is to love what you do”, your Life
          with Tech Torch Solutions Pvt. Ltd. Tech Torch build job opportunities
          for the passionate one.
        </div>
      </div>
      <Stack direction="row" spacing={2} style={styles.buttonContainer}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          style={styles.button}
          onClick={redirectToLinkedInJobs}
        >
          View Current Openings
        </Button>
      </Stack>
      <div style={styles.jobsindcontainer}>
        <div style={styles.jobText}>
          Couldn't find the job you are looking for?
        </div>
        <div style={styles.resumeText}>Send your resume on </div>
        <div style={styles.emailText}>hr@techtorchsolutions.com</div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      backgroundImage: `url(${backgroundImage})`, // Apply background image
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "60vh", // Ensure full screen height
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "5vw", // Adjust padding for responsiveness
      color: "black",
    },
    careerText:{
      fontWeight:"bold",
      fontSize:"5vw", // Responsive font size
      color:"#2d2d2d",
      marginBottom:"5vw", // Responsive margin
      textAlign: "center",
    },
    textDescription:{
      fontWeight:"normal",
      fontSize:"2vw", // Responsive font size
      color:"#2d2d2d",
      width:"80%", // Responsive width
      textAlign: "center",
      marginBottom: "5vw", // Responsive margin
    },
    jobsindcontainer: {
      backgroundImage: `url(${backgroundimgforjobfind})`, // Apply background image
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh", // Ensure full screen height
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "5vw", // Adjust padding for responsiveness
      color: "black",
    },
    jobText: {
      color: '#32313F', // Text color for "Couldn't find the job you are looking for?"
      marginBottom: '2vw', // Responsive margin
      fontWeight: 'bold',
      fontSize: '3vw', // Responsive font size
      width: "40%", // Responsive width
      textAlign: "center",
    },
    resumeText: {
      color: '#7F7F9B', // Text color for "Send your resume on"
      marginBottom: '2vw', // Responsive margin
      marginTop: '5vw', // Adjust margin as needed
      fontWeight: 'bold',
      fontSize: '2.5vw', // Responsive font size
      textAlign: "center",
    },
    emailText: {
      color: '#D52F31', // Text color for "hr@techtorchsolutions.com"
      fontWeight: 'bold',
      fontSize: '2.5vw', // Responsive font size
      textAlign: "center",
    },
    buttonContainer: {
      marginTop: "5vw", // Adjust margin top as needed
      justifyContent: "center",
      marginBottom: "5vw", // Responsive margin
    },
    button: {
      margin: "auto", // Center horizontally
      borderRadius: "20px",
      minHeight:"6vw", // Responsive height
      backgroundColor:"#2d2d2d"
    },
  };
  

export default Career;
