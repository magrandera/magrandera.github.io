---
layout: post
title: "IBM Internship"
image: "/images/posts/IBM-Munich.jpg"
excerpt: "This summer I had an internship at IBM Watson IoT in Munich.
 I worked on several projects but the main understanding I got from this internship is..."
---

This summer I had an internship at IBM Watson IoT in Munich for 3 Months. I worked on several projects but the main understanding I got from this internship is
that a team can not function without proper organization.

I was not employed in a pure development team but rather as part of a team of developers in a consulting unit.
I was meant to build high-fidelity prototypes for client showcases and well as an internal tool.

#### Disorganization ####

Since I was not working in a pure developer team, we had many different communication channels. Slack, Email, Internal Messenger were all options.
The developers and younger team members usually used Slack, because of the many possible integrations. Many of the senior consultants rather used the internal messenger or email.
This meant to contact someone you always had to try several communication channels and therefore spent quite a lot of time on a simple message.

The main issue tracking tool we were using was ZenHub, but many of the non technical employees did not even use Github so
we got issues or enhancements via E-mail. This meant another decrease in efficiency of the developers. Many different deployment
methods were used. Since Bluemix is backed by Cloud Foundry many people just chose to directly push to the platform without
any pipeline or Version Control.

#### Proper Development Workflow ####

After all, maybe having this disorganization was not at all a bad thing for me. I tried to solve this problem, at least for my projects,
and therefore came across many principles of DevOps and Team Projects. I looked more into deployment strategies and spent a couple of days to
setup a proper pipeline.

Here are the main steps:
1. Clone git repository
2. Build the artifacts
3. Run unit tests (results sent for analysis)
4. Run code style test (results sent for analysis)
5. Smart Gate (decides whether to deploy or not, based on test results and general commit quality)
6. [Blue-green deploy](https://docs.cloudfoundry.org/devguide/deploy-apps/blue-green.html) for zero downtime

#### Generalized Projects ####

- IoT and Insurance (Python & C++)
- Machine Learning for data classification (Python)
- Internal Tool (Full Stack)
- Blockchain (Hyperledger Fabric)

I am glad that I had this opportunity and thank every one of the people that supported me.