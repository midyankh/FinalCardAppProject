import { Container, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
        A business card is a small, portable document that serves as a marketing tool and representation of an individual or business. It typically contains essential contact information and serves as a convenient way to exchange details with potential clients, colleagues, or business partners.

The primary purpose of a business card is to provide recipients with the necessary information to initiate further communication or establish professional relationships. The card typically includes details such as the individual's or business's name, job title, company name, phone number, email address, 
and website.
<br /> <br />
 Some cards may also include additional information like social media profiles or a brief tagline that captures the essence of the individual or business.

Business cards are designed to be visually appealing and professional, often incorporating the individual's or business's logo, color scheme, and other branding elements.
<br /> <br /> The layout and design of a business card should be concise and easy to read,
 ensuring that the essential information stands out and is easily accessible.

In addition to contact details, a well-crafted business card can leave a lasting impression by showcasing creativity and attention to detail. The choice of paper quality, printing techniques, and finishes can further enhance the card's overall presentation and perceived value.

Business cards are typically exchanged during networking events, conferences, meetings, or chance encounters.
<br /> <br />
 They serve as a tangible reminder of the interaction and allow individuals to follow up or connect at a later time. 
Business cards act as a physical representation of a person or business's professionalism and credibility, making them an essential tool for establishing and maintaining professional connections in today's business landscape.
          
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
