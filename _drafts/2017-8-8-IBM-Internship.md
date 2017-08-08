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
we got issues or enhancements via E-mail. This meant another decrease in efficiency of the developers.

#### Development Pipeline ####

The preferred platform of use was, of course, IBM Bluemix. For deployment the Bluemix Platform was backed by Cloud Foundry,
so many of the Consultants, that had no real education or experience in development, just directly deployed to Bluemix without a proper pipeline
or Version Control. I took over a project from a previous student intern, that had not written any documentation nor used Version Control.
The basic formatting guidelines were not followed so I received a zip file of a Node Js project containing 2 main files: a 750 lines of server routing,
and 1800 lines of pure javascript frontend with jQuery.

I did not bother to refactor the code but rather started to write my own solution. Through this I gained more skills in Node Js, MySQL and several frontend
frameworks. For the final solution I decided to use the Vue.js framework for the frontend, and, what else, Express for the backend. For deployment I used the
Bluemix DevOps Pipeline which cloned the git repository, ran the tests, I had written, and only if every one of the passed did a
[blue-green deploy](https://docs.cloudfoundry.org/devguide/deploy-apps/blue-green.html). This allowed for 0 downtime on a new deploy. The users would not even realize.

During my time I did some smaller workshops about this setup and tried to make the non-technical users appreciate the Git and Pipeline workflow.

#### Generalized Projects ####
- Watson IoT and connected office (python & C++)
- Machine Learning for data classification (python)
- Internal Tool (Full Stack)

I am glad that I had this opportunity and thank every one of the people that supported me.