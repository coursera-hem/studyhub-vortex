
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About StudyHub</h1>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At StudyHub, our mission is to provide accessible, high-quality education to everyone around the world. 
                We believe that education is a fundamental right and that everyone should have the opportunity to learn,
                grow, and achieve their goals through knowledge.
              </p>
              <p className="text-muted-foreground">
                We're committed to creating a platform where educators can share their expertise and learners can 
                acquire valuable skills that will help them succeed in their personal and professional lives.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                StudyHub was founded in 2023 by a group of educators and technologists who saw the need for a more
                interactive and engaging online learning platform. Frustrated with the limitations of existing 
                educational technologies, they set out to build something better.
              </p>
              <p className="text-muted-foreground">
                Starting with just a few courses in programming and data science, StudyHub has grown to offer
                thousands of courses across various disciplines, serving millions of learners worldwide.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Accessibility:</strong> We strive to make education accessible to everyone, regardless of their background or circumstances.</li>
                <li><strong>Quality:</strong> We maintain high standards for our course content to ensure learners receive the best possible education.</li>
                <li><strong>Innovation:</strong> We continuously explore new teaching methods and technologies to enhance the learning experience.</li>
                <li><strong>Community:</strong> We foster a supportive community where learners can connect, collaborate, and learn from each other.</li>
                <li><strong>Impact:</strong> We measure our success by the positive impact we have on learners' lives and careers.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
